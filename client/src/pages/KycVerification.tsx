import React, { useState } from 'react';
import { Download, Eye, FileText, ClipboardCheck, HelpCircle, Upload } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import kycDocument from "@/assets/Corporate KYC (4).pdf";
import ShimmerButton from '@/components/ui/shimmer-button';

// IMPORTANT: Replace this path with your actual PDF file path
const PDF_FILE_PATH = '/path/to/your/kyc-form.pdf';

type Step = {
    id: number;
    title: string;
    description: string;
    details: string[];
    icon: React.ReactNode;
};

const KYCSubmission = () => {
    const [currentStep, setCurrentStep] = useState<number>(1);
    const [showAlert, setShowAlert] = useState<boolean>(false);

    const steps: Step[] = [
        {
            id: 1,
            title: "Download the Form",
            description: "Download our KYC verification form",
            details: [
                "Click the 'Download Form' button below",
                "Save the PDF file to your device",
                "Ensure you have a PDF reader installed"
            ],
            icon: <Download className="h-6 w-6" />,
        },
        {
            id: 2,
            title: "Review Requirements",
            description: "Check required documents",
            details: [
                "Valid government-issued ID (Passport/Driver's License)",
                "Proof of address (Utility bill/Bank statement)",
                "Recent photograph (if required)",
                "Additional documents based on account type"
            ],
            icon: <ClipboardCheck className="h-6 w-6" />,
        },
        {
            id: 3,
            title: "Fill the Form",
            description: "Complete all required fields",
            details: [
                "Fill in all mandatory fields marked with (*)",
                "Ensure all information matches your documents",
                "Sign and date the form where required"
            ],
            icon: <FileText className="h-6 w-6" />,
        },
        {
            id: 4,
            title: "Verify Information",
            description: "Double-check all entries",
            details: [
                "Review all entered information for accuracy",
                "Verify document attachments are clear and valid",
                "Ensure signature is clear and matches your ID",
                "Check form completion status"
            ],
            icon: <HelpCircle className="h-6 w-6" />,
        },
        {
            id: 5,
            title: "Upload the document to this G-Mail",
            description: "contact@ushwt.com",
            details: [],
            icon: <Upload className="h-6 w-6" />
        }
    ];

    const handlePreview = () => {
        // Open PDF in new tab
        window.open(PDF_FILE_PATH, '_blank');
    };

    const handleDownload = () => {
        // Create download link
        const link = document.createElement('a');
        link.href = kycDocument;
        link.download = 'KYC-Verification-Form.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setCurrentStep(2);
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 3000);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-20 px-4 sm:px-6 lg:px-8">
            {
                showAlert && (
                    <div className="fixed top-4 right-4 z-50">
                        <Alert className="bg-green-50 border-green-200">
                            <AlertDescription className="text-green-800">
                                Form downloaded successfully! Please check your downloads folder.
                            </AlertDescription>
                        </Alert>
                    </div>
                )
            }

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
                        KYC Document Submission
                    </h1>
                    <p className="text-xl text-gray-600">
                        Complete your verification in a few simple steps
                    </p>
                </div>

                {/* Steps */}
                <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {
                        steps.map((step) => (
                            <Card
                                key={step.id}
                                className={`transform transition-all duration-200 hover:shadow-lg ${currentStep >= step.id ? 'border-blue-200 bg-blue-50' : 'bg-white'
                                    }`}
                            >
                                <CardHeader>
                                    <div className="flex items-center gap-4">
                                        <div
                                            className={`w-12 h-12 rounded-full flex items-center justify-center ${currentStep >= step.id
                                                ? 'bg-blue-100 text-blue-600'
                                                : 'bg-gray-100 text-gray-400'
                                                }`}
                                        >
                                            {step.icon}
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-gray-500">
                                                Step {step.id}
                                            </p>
                                            <h3 className="font-semibold text-lg">{step.title}</h3>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 mb-4">{step.description}</p>
                                    <ul className="space-y-2">
                                        {
                                            step.details.map((detail, index) => (
                                                <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                                                    <span className="block w-1 h-1 mt-2 rounded-full bg-gray-400" />
                                                    {detail}
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </CardContent>
                            </Card>
                        ))
                    }
                </div>

                {/* Action Card */}
                <Card className="w-full bg-white shadow-xl">
                    <CardHeader>
                        <CardTitle>Download KYC Form</CardTitle>
                        <CardDescription>
                            Preview or download the verification form to get started
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                onClick={handlePreview}
                                variant="outline"
                                className="flex-1 py-6 text-lg hover:bg-gray-50"
                            >
                                <Eye className="h-5 w-5 mr-2" />
                                Preview Form
                            </Button>
                            <ShimmerButton
                                onClick={handleDownload}
                                className="flex-1 text-lg"
                            >
                                <Download className="h-5 w-5 mr-2" />
                                Download Form
                            </ShimmerButton>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default KYCSubmission;