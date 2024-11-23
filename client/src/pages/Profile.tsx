import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ShimmerButton from "@/components/ui/shimmer-button";
import toast, { Toaster } from "react-hot-toast";
import { useUser } from "@/Context/UserContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Profile() {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const { user } = useUser();
    const navigate = useNavigate();

    if(!user) {
        navigate("/signin");
    }

    const handlePasswordInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        // Update the appropriate state based on input name
        if (name === 'currentPassword') {
            setCurrentPassword(value);
        } else if (name === 'newPassword') {
            setNewPassword(value);
        }
    }
    const handlePasswordSubmit = async(e: React.FormEvent) => {
        e.preventDefault()
        if (currentPassword === newPassword) {
            toast.success("Please enter a different password");
            return;
        }
        
        try {
            const response = await axios.put("http://localhost:3002/api/v1/updatepassword", {
                currentPassword,
                newPassword
            }, {
                headers: {
                    Authorization: `Bearer ${user?.token}`
                }
            })
            toast.success(response.data.msg);
            setCurrentPassword("");
            setNewPassword("");
        } catch(err: any) {
            console.log("Failed to update the password: " + err);
            toast.error("Cannot update the Password")
        }
    }

    return (
        <div className="max-w-7xl mx-auto py-10">
            <Toaster />
            <h1 className="text-3xl font-bold mb-6">My Profile</h1>
            <div className="w-full flex flex-col md:flex-row gap-4">
                <Card className="w-full md:w-1/2">
                    <CardHeader className="flex flex-row items-center gap-4">
                        <Avatar className="h-20 w-20">
                            <AvatarImage alt="User avatar" src="https://dummyimage.com/80x80/000/fff&text=AI" />
                            <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div>
                            <CardTitle className="text-2xl">{user?.name}</CardTitle>
                            <p className="text-muted-foreground">{user?.email}</p>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" value={user?.email} readOnly />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="company">Company</Label>
                                <Input id="company" value="Global Logistics Inc." readOnly />
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card className="w-full md:w-1/2">
                    <CardHeader>
                        <CardTitle>Change Password</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handlePasswordSubmit} className="space-y-4">
                            <div className="grid gap-2">
                                <Label htmlFor="current-password">Current Password</Label>
                                <Input
                                    id="current-password"
                                    name="currentPassword"
                                    type="password"
                                    value={currentPassword}
                                    onChange={handlePasswordInputChange}
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="new-password">New Password</Label>
                                <Input
                                    id="new-password"
                                    name="newPassword"
                                    type="password"
                                    value={newPassword}
                                    onChange={handlePasswordInputChange}
                                    required
                                />
                            </div>
                            <ShimmerButton type="submit">Change Password</ShimmerButton>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

