import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { useUser } from '@/Context/UserContext';

const KYCVerification = () => {
    const navigate = useNavigate();
    const { user } = useUser();
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        address: '',
        termsAgreed: false,
    });

    // Check authentication
    useEffect(() => {
        const isAuthenticated = localStorage.getItem('token');
        if (!isAuthenticated) {
            navigate('/login');
        }
    }, [navigate]);

    // // Populate known user data
    // useEffect(() => {
    //     const storedName = localStorage.getItem('userName');
    //     const storedEmail = localStorage.getItem('userEmail');

    //     setUserData(prev => ({
    //         ...prev,
    //         name: storedName || '',
    //         email: storedEmail || ''
    //     }));
    // }, []);

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setUserData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        // Validation
        if (!userData.phoneNumber || !userData.address || !userData.termsAgreed) {
            toast.error('Please fill all required fields and agree to terms');
            return;
        }

        try {
            // Create form data to send
            const formData = new FormData();
            formData.append('name', userData.name);
            formData.append('email', userData.email);
            formData.append('phoneNumber', userData.phoneNumber);
            formData.append('address', userData.address);

            // Send email with KYC details
            const response = await fetch('/api/send-kyc-verification', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                toast.success('KYC Verification submitted successfully');
                navigate('/dashboard');
            } else {
                toast.error('Failed to submit KYC Verification');
            }
        } catch (error) {
            console.error('KYC Submission Error:', error);
            toast.error('An error occurred during submission');
        }
    };

    return (
        <div className="container mx-auto p-4">
            <Toaster />
            <Card className="max-w-2xl mx-auto">
                <CardHeader>
                    <CardTitle>KYC Verification</CardTitle>
                    <img
                        src="/path/to/terms-conditions-image.jpg"
                        alt="Terms and Conditions"
                        className="w-full h-48 object-cover rounded-t-lg"
                    />
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <Input
                            name="name"
                            value={userData.name}
                            onChange={handleInputChange}
                            placeholder="Name"
                            disabled
                        />
                        <Input
                            name="email"
                            value={userData.email}
                            onChange={handleInputChange}
                            placeholder="Email"
                            disabled
                        />
                        <Input
                            name="phoneNumber"
                            value={userData.phoneNumber}
                            onChange={handleInputChange}
                            placeholder="Phone Number"
                            required
                        />
                        <Input
                            name="address"
                            value={userData.address}
                            onChange={handleInputChange}
                            placeholder="Address"
                            required
                        />

                        {/* Terms and Conditions Checkbox */}
                        <div className="flex items-center space-x-2">
                            {/* <Checkbox
                                id="terms"
                                checked={userData.termsAgreed}
                                onCheckedChange={(checked) => setUserData(prev => ({
                                    ...prev,
                                    termsAgreed: checked
                                }))}
                            /> */}
                            <label
                                htmlFor="terms"
                                className="text-sm font-medium leading-none"
                            >
                                I agree to all terms and conditions
                            </label>
                        </div>

                        <Button type="submit" className="w-full">
                            Submit KYC Verification
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default KYCVerification;