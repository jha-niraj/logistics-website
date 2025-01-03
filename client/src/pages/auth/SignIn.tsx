import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

import { Input } from "@/components/ui/input";
// import { SignInInput } from "@jhaniraj/medium-common-2";
import { BASE_URL } from "@/config";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { useUser } from "@/Context/UserContext";

const SignIn = () => {
    const [signIn, setSignIn] = useState({
        username: "",
        password: ""
    })
    const [submitting, setIsSubmitting] = useState<Boolean>(false);
    const navigate = useNavigate();
    const { setUser } = useUser();

    const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await axios.post(`${BASE_URL}/signin`, signIn);
            if (!response || !response.data) {
                throw new Error("Failed to Sign In");
            }
            const { msg, userId, name, email, token, error } = response.data;
            console.log(name);
            console.log(email);
            console.log(token);
            console.log(msg);
            
            if (error) {
                toast.error(error);
            }
            setUser({
                userId: userId,
                name: name,
                email: email,
                token: token
            })
            toast.success(msg);
            setTimeout(() => {
                navigate("/profile");
            }, 1000);
        } catch (err: any) {
            if (err.response && err.response.data && err.response.data.msg) {
                toast.error(err.response.data.msg);
            } else if (err.response && err.response.data && err.response.data.error) {
                toast.error(err.response.data.error);
            } else {
                toast.error("Failed to Sign In, Try again");
            }
            console.log("Error occurred while signing in:", err);
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <main className="w-full h-screen">
            <Toaster />
            <div className="flex flex-col gap-10 items-center py-20 h-full justify-center">
                <h1 className="text-3xl font-semibold">Welcome, back</h1>
                <div className="flex flex-col w-[40%]">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                        <div className="flex flex-col gap-1">
                            <label className="text-md font-medium">Username</label>
                            <Input type="text" required placeholder="Enter your username" onChange={(e: any) => setSignIn(c => ({
                                ...c,
                                username: e.target.value
                            }))} />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-md font-medium">Password</label>
                            <Input type="password" required placeholder="Create a password" onChange={(e: any) => setSignIn(c => ({
                                ...c,
                                password: e.target.value
                            }))} />
                        </div>
                        <RainbowButton type="submit" className="w-full">
                            {
                                submitting ? "Signing In..." : "Sign In"
                            }
                        </RainbowButton>
                    </form>
                    <hr />
                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-600 flex gap-2 items-center justify-center">
                            <h1 className="text-sm font-medium">Don't have an account?</h1>
                            <Link to="/signup" className="font-medium text-sm text-sky-600 hover:text-indigo-500">
                                Sign Up
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default SignIn;