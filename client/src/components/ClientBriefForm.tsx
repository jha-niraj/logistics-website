import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Building2, Package, Briefcase, Globe, Mail, Phone, MapPin, Star, CheckCircle2 } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import { useUser } from "@/Context/UserContext";
import { BASE_URL } from "@/config";

const ClientBriefForm = () => {
    const [formData, setFormData] = useState({
        clientName: "",
        brandName: "",
        address: "",
        phone: "",
        email: "",
        products: "",
        productOrigin: "",
        objective: "",
        productToExport: "",
        referenceNumber: "",
    });
    const [activeSection, setActiveSection] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { user } = useUser();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleNext = () => {
        setActiveSection(activeSection + 1);
    };
    const handlePrevious = () => {
        setActiveSection(activeSection - 1);
    };
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        setIsSubmitting(true);

        try {
            const response = await fetch(`${BASE_URL}/raterequestform`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user?.token}`
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (data.success) {
                toast.success('Rate REquest Form sent successfully!');
                // Reset form
                setFormData({
                    clientName: "",
                    brandName: "",
                    address: "",
                    phone: "",
                    email: "",
                    products: "",
                    productOrigin: "",
                    objective: "",
                    productToExport: "",
                    referenceNumber: "",
                });
                setActiveSection(0);
            } else {
                toast.error(data.message || 'Failed to send rate request form');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            toast.error('Failed to send rate request form. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const sections = [
        {
            title: "General Information",
            icon: Building2,
            content: (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                        <Label className="flex items-center text-sm font-medium">
                            <Building2 className="mr-2 text-blue-600 w-4 h-4" />
                            Client Name
                        </Label>
                        <Input
                            name="clientName"
                            value={formData.clientName}
                            onChange={handleChange}
                            className="border-gray-300 focus:border-blue-500 transition-all"
                            placeholder="Enter client name"
                        />
                    </div>
                    <div className="space-y-1.5">
                        <Label className="flex items-center text-sm font-medium">
                            <Star className="mr-2 text-yellow-600 w-4 h-4" />
                            Brand Name
                        </Label>
                        <Input
                            name="brandName"
                            value={formData.brandName}
                            onChange={handleChange}
                            className="border-gray-300 focus:border-blue-500 transition-all"
                            placeholder="Enter brand name"
                        />
                    </div>
                    <div className="space-y-1.5">
                        <Label className="flex items-center text-sm font-medium">
                            <MapPin className="mr-2 text-red-600 w-4 h-4" />
                            Address
                        </Label>
                        <Textarea
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="border-gray-300 focus:border-blue-500 transition-all h-24"
                            placeholder="Enter full address"
                        />
                    </div>
                    <div className="space-y-1.5">
                        <Label className="flex items-center text-sm font-medium">
                            <Phone className="mr-2 text-green-600 w-4 h-4" />
                            Phone
                        </Label>
                        <Input
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            className="border-gray-300 focus:border-blue-500 transition-all"
                            placeholder="Enter phone number"
                        />
                    </div>
                    <div className="space-y-1.5">
                        <Label className="flex items-center text-sm font-medium">
                            <Mail className="mr-2 text-purple-600 w-4 h-4" />
                            Email
                        </Label>
                        <Input
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="border-gray-300 focus:border-blue-500 transition-all"
                            placeholder="Enter email address"
                        />
                    </div>
                </div>
            )
        },
        {
            title: "Product Information",
            icon: Package,
            content: (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                        <Label className="flex items-center text-sm font-medium">
                            <Package className="mr-2 text-indigo-600 w-4 h-4" />
                            Products
                        </Label>
                        <Textarea
                            name="products"
                            value={formData.products}
                            onChange={handleChange}
                            className="border-gray-300 focus:border-blue-500 transition-all h-24"
                            placeholder="Describe your products"
                        />
                    </div>
                    <div className="space-y-1.5">
                        <Label className="flex items-center text-sm font-medium">
                            <Globe className="mr-2 text-teal-600 w-4 h-4" />
                            Product Origin
                        </Label>
                        <Input
                            name="productOrigin"
                            value={formData.productOrigin}
                            onChange={handleChange}
                            className="border-gray-300 focus:border-blue-500 transition-all"
                            placeholder="Enter product origin"
                        />
                    </div>
                </div>
            )
        },
        {
            title: "Business Objective",
            icon: Briefcase,
            content: (
                <div className="space-y-1.5">
                    <Label className="flex items-center text-sm font-medium">
                        <Briefcase className="mr-2 text-orange-600 w-4 h-4" />
                        Business Objective
                    </Label>
                    <Textarea
                        name="objective"
                        value={formData.objective}
                        onChange={handleChange}
                        className="border-gray-300 focus:border-blue-500 transition-all h-44"
                        placeholder="Describe your business objectives and goals"
                    />
                </div>
            )
        },
        {
            title: "Export Details",
            icon: Globe,
            content: (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                        <Label className="flex items-center text-sm font-medium">
                            <Globe className="mr-2 text-blue-600 w-4 h-4" />
                            Product to Export
                        </Label>
                        <Input
                            name="productToExport"
                            value={formData.productToExport}
                            onChange={handleChange}
                            className="border-gray-300 focus:border-blue-500 transition-all"
                            placeholder="Enter product for export"
                        />
                    </div>
                    <div className="space-y-1.5">
                        <Label className="flex items-center text-sm font-medium">
                            <CheckCircle2 className="mr-2 text-green-600 w-4 h-4" />
                            Reference Number
                        </Label>
                        <Input
                            name="referenceNumber"
                            value={formData.referenceNumber}
                            onChange={handleChange}
                            className="border-gray-300 focus:border-blue-500 transition-all"
                            placeholder="Enter reference number"
                        />
                    </div>
                </div>
            )
        }
    ];

    return (
        <div className="bg-gray-50 min-h-screen flex items-center justify-center rounded-2xl">
            <Toaster />
            <Card className="w-full max-w-4xl shadow-xl">
                <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-4">
                    <CardTitle className="text-xl font-bold text-center flex items-center justify-center">
                        <Briefcase className="mr-2" /> Client Brief Questionnaire
                    </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                    {/* Section Navigation */}
                    <div className="flex justify-between mb-4 border-b pb-2">
                        {
                            sections.map((section, index) => (
                                <button
                                    key={section.title}
                                    onClick={() => setActiveSection(index)}
                                    className={`
                                    flex items-center px-3 py-2 rounded-lg transition-all text-sm
                                    ${activeSection === index
                                            ? 'bg-blue-500 text-white'
                                            : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}
                                `}
                                >
                                    <section.icon className="mr-2 w-4 h-4" />
                                    {section.title}
                                </button>
                            ))
                        }
                    </div>

                    {/* Dynamic Form Content */}
                    {sections[activeSection].content}

                    {/* Navigation Buttons */}
                    <div className="flex justify-between mt-4 pt-2 border-t">
                        {
                            activeSection > 0 && (
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={handlePrevious}
                                >
                                    Previous
                                </Button>
                            )
                        }
                        {
                            activeSection < sections.length - 1 ? (
                                <Button
                                    type="button"
                                    onClick={handleNext}
                                    className="ml-auto"
                                >
                                    Next
                                </Button>
                            ) : (
                                <form onSubmit={handleSubmit} className="ml-auto">
                                    <Button
                                        type="submit"
                                        className="bg-green-500 hover:bg-green-600"
                                    >
                                        {
                                            isSubmitting ? "Submittng" : "Submit Form"
                                        }
                                    </Button>
                                </form>
                            )
                        }
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default ClientBriefForm;