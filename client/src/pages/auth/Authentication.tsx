import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BookOpen, Lock, Mail, User } from "lucide-react";

export function AuthPage() {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="w-full max-w-4xl">
                <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px]" style={{ perspective: "3000px" }}>
                        {/* Left Side - Static */}
                        <div className="p-8 md:p-12 flex items-center">
                            <AnimatePresence mode="wait">
                                {
                                    !isFlipped ? (
                                        <motion.div
                                            key="login"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="w-full space-y-6"
                                        >
                                            <div className="space-y-2">
                                                <h2 className="text-2xl font-bold">Welcome Back</h2>
                                                <p className="text-gray-500">
                                                    Please sign in to your account
                                                </p>
                                            </div>
                                            <div className="space-y-4">
                                                <div className="space-y-2">
                                                    <Label htmlFor="email">Email</Label>
                                                    <div className="relative">
                                                        <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                                                        <Input
                                                            id="email"
                                                            placeholder="Enter your email"
                                                            className="pl-10"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="password">Password</Label>
                                                    <div className="relative">
                                                        <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                                                        <Input
                                                            id="password"
                                                            type="password"
                                                            placeholder="••••••••"
                                                            className="pl-10"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <Button className="w-full">Sign In</Button>
                                            <p className="text-center text-sm text-gray-500">
                                                Don't have an account?{" "}
                                                <button
                                                    onClick={() => setIsFlipped(true)}
                                                    className="text-purple-600 hover:underline font-medium"
                                                >
                                                    Sign Up
                                                </button>
                                            </p>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="signup-info"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="w-full space-y-6"
                                        >
                                            <div className="space-y-2">
                                                <h2 className="text-2xl font-bold">Join Us Today</h2>
                                                <p className="text-gray-500">
                                                    Create an account to get started with our platform
                                                </p>
                                            </div>
                                            <div className="space-y-6">
                                                <div className="flex items-center gap-4">
                                                    <BookOpen className="h-12 w-12 text-purple-600" />
                                                    <div>
                                                        <h3 className="font-semibold">Easy Registration</h3>
                                                        <p className="text-sm text-gray-500">
                                                            Quick and simple sign-up process
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-4">
                                                    <Lock className="h-12 w-12 text-purple-600" />
                                                    <div>
                                                        <h3 className="font-semibold">Secure Platform</h3>
                                                        <p className="text-sm text-gray-500">
                                                            Your data is protected with enterprise-grade security
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                            </AnimatePresence>
                        </div>

                        {/* Right Side - Flipping Page */}
                        <motion.div
                            className="absolute md:relative w-full h-full origin-left"
                            animate={{
                                rotateY: isFlipped ? -180 : 0,
                            }}
                            transition={{
                                duration: 0.7,
                                type: "spring",
                                stiffness: 100,
                            }}
                            style={{
                                transformStyle: "preserve-3d",
                            }}
                        >
                            {/* Front of the flipping page */}
                            <div
                                className="absolute inset-0 p-8 md:p-12 bg-white flex items-center"
                                style={{
                                    backfaceVisibility: "hidden",
                                }}
                            >
                                <div className="w-full space-y-6">
                                    <div className="space-y-2">
                                        <h2 className="text-2xl font-bold">Why Choose Us?</h2>
                                        <p className="text-gray-500">
                                            Join thousands of satisfied users who trust our platform
                                        </p>
                                    </div>
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-4">
                                            <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                                                <User className="h-6 w-6 text-purple-600" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold">Personal Dashboard</h3>
                                                <p className="text-sm text-gray-500">
                                                    Access your personalized dashboard
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                                                <Lock className="h-6 w-6 text-purple-600" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold">Secure Access</h3>
                                                <p className="text-sm text-gray-500">
                                                    Enhanced security for your account
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Back of the flipping page */}
                            <div
                                className="absolute inset-0 p-8 md:p-12 bg-white flex items-center"
                                style={{
                                    backfaceVisibility: "hidden",
                                    transform: "rotateY(180deg)",
                                }}
                            >
                                {
                                    isFlipped ? (
                                        <div className="w-full space-y-6">
                                            <div className="space-y-2">
                                                <h2 className="text-2xl font-bold">Create Account</h2>
                                                <p className="text-gray-500">
                                                    Fill in your details to get started
                                                </p>
                                            </div>
                                            <div className="space-y-4">
                                                <div className="space-y-2">
                                                    <Label htmlFor="name">Full Name</Label>
                                                    <div className="relative">
                                                        <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                                                        <Input
                                                            id="name"
                                                            placeholder="Enter your name"
                                                            className="pl-10"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="signup-email">Email</Label>
                                                    <div className="relative">
                                                        <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                                                        <Input
                                                            id="signup-email"
                                                            placeholder="Enter your email"
                                                            className="pl-10"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="signup-password">Password</Label>
                                                    <div className="relative">
                                                        <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                                                        <Input
                                                            id="signup-password"
                                                            type="password"
                                                            placeholder="••••••••"
                                                            className="pl-10"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <Button className="w-full">Sign Up</Button>
                                            <p className="text-center text-sm text-gray-500">
                                                Already have an account?{" "}
                                                <button
                                                    onClick={() => setIsFlipped(false)}
                                                    className="text-purple-600 hover:underline font-medium"
                                                >
                                                    Sign In
                                                </button>
                                            </p>
                                        </div>
                                    ) : (
                                        <div className="w-full space-y-6">
                                            <div className="space-y-2">
                                                <h2 className="text-2xl font-bold">Why Choose Us?</h2>
                                                <p className="text-gray-500">
                                                    Join thousands of satisfied users who trust our platform
                                                </p>
                                            </div>
                                            <div className="space-y-6">
                                                <div className="flex items-center gap-4">
                                                    <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                                                        <User className="h-6 w-6 text-purple-600" />
                                                    </div>
                                                    <div>
                                                        <h3 className="font-semibold">Personal Dashboard</h3>
                                                        <p className="text-sm text-gray-500">
                                                            Access your personalized dashboard
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-4">
                                                    <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                                                        <Lock className="h-6 w-6 text-purple-600" />
                                                    </div>
                                                    <div>
                                                        <h3 className="font-semibold">Secure Access</h3>
                                                        <p className="text-sm text-gray-500">
                                                            Enhanced security for your account
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}