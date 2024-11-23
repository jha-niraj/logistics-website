const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userMiddleware = require("../middlewares/userMiddleware.js");
const { User } = require("../database/userSchema.js");

// Importing the zod schema from zod:
const { userSignUpSchema, userSignInSchema } = require("../zod.js");

router.post("/signup", async (req, res) => {
    const { fullname, username, password } = req.body;

    try {
        const parsedValue = userSignUpSchema.safeParse({ fullname, username, password });
        if (!parsedValue.success) {
            res.status(511).json({
                msg: "Error while parsing the data!!!"
            })
            return;
        } else {
            // Checking if user already exists in database:
            const existingUser = await User.findOne({ username });
            if (existingUser) {
                res.status(511).json({
                    msg: "User already exists in database"
                })
                return;
            } else {
                // Hashing the password for security reason before sending it to the database:
                const hashedPassword = await bcrypt.hash(password, 10);

                const newUser = await User.create({
                    fullname,
                    username,
                    password: hashedPassword
                });
                if (!newUser) {
                    res.status(511).json({
                        msg: "User Creation Failed!!"
                    })
                    return;
                } else {
                    const token = jwt.sign({ _id: newUser._id }, process.env.JWT_SECRET);
                    res.status(200).json({
                        msg: 'User Authentication Successfull',
                        id: newUser._id,
                        fullname: newUser.fullname,
                        email: newUser.username,
                        token: token
                    })
                }
            }
        }
    } catch (err) {
        console.log("Error Occured: " + err);
        res.status(511).json({
            msg: err
        })
    }
})
router.post("/signin", async(req, res) => {
    const { username, password } = req.body;

    try {
        const parsedValue = userSignInSchema.safeParse({ username, password });
        if (!parsedValue.success) {
            res.status(511).json({
                msg: "Error while parsing value!!!"
            })
            return;
        } else {
            const user = await User.findOne({ username });
            if (!user) {
                res.status(511).json({
                    msg: "Email not Found!!!"
                })
                return;
            } else {
                const matchedPassword = await bcrypt.compare(password, user.password);
                if (!matchedPassword) {
                    res.status(511).json({
                        msg: "Password is incorrect"
                    })
                    return;
                } else {
                    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
                    res.status(200).json({
                        msg: 'User Authentication Successfull',
                        id: user._id,
                        fullname: user.fullname,
                        email: user.username,
                        token: token
                    })
                }
            }
        }
    } catch (err) {
        console.log("Error: " + err);
        res.status(501).json({
            msg: "Error while signin!!!"
        })
        return;
    }
})
router.put("/updatepassword", userMiddleware, async (req, res) => {
    const { currentPassword, newPassword } = req.body;
    const userId = req.user;

    try {
        if (!currentPassword || !newPassword) {
            return res.status(400).json({
                msg: "Both old and new passwords are required"
            });
        }
        const user = await User.findById(userId);
        if (!user) {
            return res.status(501).josn({
                msg: "User not found"
            })
        } else {
            const matchedPassword = await bcrypt.compare(currentPassword, user.password);
            if (!matchedPassword) {
                return res.status(501).json({
                    msg: "Old password incorrect!!!"
                })
            } else {
                const updatedPassword = await bcrypt.hash(newPassword, 10);
                if (!updatedPassword) {
                    return res.status(501).json({
                        msg: "Cannot update the password"
                    })
                } else {
                    user.password = updatedPassword;
                    await user.save();

                    return res.status(200).json({
                        msg: "Password updated successfully"
                    })
                }
            }
        }
    } catch (err) {
        console.log("Error: " + err);
        throw new Error("Password updation failed");
    }
})

module.exports = router;