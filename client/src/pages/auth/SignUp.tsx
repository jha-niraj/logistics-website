import { useState } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";

// Importing the components:
import { Input } from "@/components/ui/input";
// import { BASE_URL } from "@/config";
// import { useUser } from "@/context/UserContext";
import { RainbowButton } from "@/components/ui/rainbow-button";

const SignUp = () => {
    const [signUp, setSignUp] = useState({
        name: "",
        email: "",
        password: ""
    })
    const [submitting, setIsSubmitting] = useState<Boolean>(false);
    // const navigate = useNavigate();
    // const { setUser } = useUser();

    const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        // try {
        //     const response = await axios.post(`${BASE_URL}/user/signup`, signUp);
        //     if (!response) {
        //         throw new Error("Failed to Sign Up");
        //     }
        //     const user = response.data;
        //     setUser({
        //         userId: user.userId,
        //         name: user.name,
        //         email: user.email,
        //         token: user.token
        //     })
        //     toast.success(response.data.msg);
        //     setTimeout(() => {
        //         navigate("/profile");
        //     }, 1000);
        // } catch (err: any) {
        //     console.log("Error occurred while signup: " + err);
        //     toast.error(err.response.data.msg);
        // } finally {
        //     setIsSubmitting(false);
        // }
    }

    return (
        <main className="w-full h-screen py-20">
            {/* <Toaster /> */}
            <div className="flex flex-col gap-10 items-center justify-center">
                <h1 className="text-3xl font-semibold">Create an Account</h1>
                <div className="flex flex-col w-[40%]">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                        {
                            signUp.email
                        }
                        <div className="flex flex-col gap-1">
                            <label className="text-md font-medium" htmlFor="name">Full Name</label>
                            <Input type="text" id="name" placeholder="Enter your name" onChange={(e: any) => setSignUp(c => ({
                                ...c,
                                name: e.target.value
                            }))} />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-md font-medium">Username</label>
                            <Input type="text" placeholder="Enter your username" onChange={(e: any) => setSignUp(c => ({
                                ...c,
                                email: e.target.value
                            }))} />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-md font-medium">Password</label>
                            <Input type="password" placeholder="Create a password" onChange={(e: any) => setSignUp(c => ({
                                ...c,
                                password: e.target.value
                            }))} />
                        </div>
                        <RainbowButton type="submit" className="w-full">
                            {
                                submitting ? "Signing Up..." : "Sign Up"
                            }
                        </RainbowButton>
                    </form>
                    <hr />
                    <div className="mt-6 text-center">
                        <div className="text-sm text-gray-600 flex gap-2 items-center justify-center">
                            <h1 className="text-sm font-medium">Already have an account?</h1>
                            <Link to="/signin" className="font-medium text-sm text-sky-600 hover:text-indigo-500">
                                Sign In
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default SignUp;