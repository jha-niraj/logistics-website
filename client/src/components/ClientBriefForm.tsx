import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const ClientBriefForm = () => {
    const [formData, setFormData] = useState({
        // General Information
        clientName: "",
        brandName: "",
        address: "",
        phone: "",
        cell: "",
        email: "",
        website: "",
        socialMedia: "",
        legalRepresentative: "",

        // Product Information
        products: "",
        productOrigin: "",
        tariffRegistration: "",
        corporateColors: "",
        partnersAffiliates: "",
        certifications: "",

        // Business Information
        objective: "",
        competitors: "",
        productPresentation: "",
        requireSamples: "no",
        marketStudies: "",
        paymentContact: "",
        dunsAndBrands: "",
        idCopy: "",

        // Export Information
        productToExport: "",
        referenceNumber: "",
        pgCode: "",
        purchaseName: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
        // Handle form submission
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto py-8 px-4">
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-center">Client Brief Form</CardTitle>
                    <CardDescription className="text-center">
                        Please fill out the fields below to help us better understand your business and needs.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                    {/* General Information */}
                    <div className="space-y-6">
                        <h2 className="text-xl font-semibold">1. General Information</h2>
                        <Separator />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="clientName">Client Name</Label>
                                <Input
                                    id="clientName"
                                    name="clientName"
                                    value={formData.clientName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="brandName">Brand Name</Label>
                                <Input
                                    id="brandName"
                                    name="brandName"
                                    value={formData.brandName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="address">Address</Label>
                                <Textarea
                                    id="address"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="phone">Phone</Label>
                                <Input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="cell">Cell</Label>
                                <Input
                                    id="cell"
                                    name="cell"
                                    type="tel"
                                    value={formData.cell}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email Address</Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="website">Website</Label>
                                <Input
                                    id="website"
                                    name="website"
                                    type="url"
                                    value={formData.website}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="socialMedia">Social Media</Label>
                                <Input
                                    id="socialMedia"
                                    name="socialMedia"
                                    value={formData.socialMedia}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="legalRepresentative">Legal Representative</Label>
                                <Input
                                    id="legalRepresentative"
                                    name="legalRepresentative"
                                    value={formData.legalRepresentative}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Product Information */}
                    <div className="space-y-6">
                        <h2 className="text-xl font-semibold">2. Product Information</h2>
                        <Separator />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="products">Products (with HT - Tariff Fraction)</Label>
                                <Textarea
                                    id="products"
                                    name="products"
                                    value={formData.products}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="productOrigin">Product Origin</Label>
                                <Input
                                    id="productOrigin"
                                    name="productOrigin"
                                    value={formData.productOrigin}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="tariffRegistration">Tariff Registration (IRS)</Label>
                                <Input
                                    id="tariffRegistration"
                                    name="tariffRegistration"
                                    value={formData.tariffRegistration}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="corporateColors">Corporate Colors</Label>
                                <Input
                                    id="corporateColors"
                                    name="corporateColors"
                                    value={formData.corporateColors}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="partnersAffiliates">Partners / Affiliates</Label>
                                <Input
                                    id="partnersAffiliates"
                                    name="partnersAffiliates"
                                    value={formData.partnersAffiliates}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="certifications">Certifications</Label>
                                <Input
                                    id="certifications"
                                    name="certifications"
                                    value={formData.certifications}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Business Information */}
                    <div className="space-y-6">
                        <h2 className="text-xl font-semibold">3. Business Information</h2>
                        <Separator />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="objective">Objective</Label>
                                <Textarea
                                    id="objective"
                                    name="objective"
                                    value={formData.objective}
                                    onChange={handleChange}
                                    placeholder="What do you aim to achieve with our products/services?"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="competitors">Competitors</Label>
                                <Input
                                    id="competitors"
                                    name="competitors"
                                    value={formData.competitors}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="productPresentation">Product Presentation</Label>
                                <Input
                                    id="productPresentation"
                                    name="productPresentation"
                                    value={formData.productPresentation}
                                    placeholder="Physical or Virtual"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label>Do you require Samples?</Label>
                                <RadioGroup
                                    defaultValue="no"
                                    onValueChange={(value) => setFormData({ ...formData, requireSamples: value })}
                                >
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="yes" id="yes" />
                                        <Label htmlFor="yes">Yes</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="no" id="no" />
                                        <Label htmlFor="no">No</Label>
                                    </div>
                                </RadioGroup>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="marketStudies">Market Studies</Label>
                                <Input
                                    id="marketStudies"
                                    name="marketStudies"
                                    type="file"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="paymentContact">Payment Contact</Label>
                                <Input
                                    id="paymentContact"
                                    name="paymentContact"
                                    value={formData.paymentContact}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="dunsAndBrands">DUNS & Brands</Label>
                                <Input
                                    id="dunsAndBrands"
                                    name="dunsAndBrands"
                                    value={formData.dunsAndBrands}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="idCopy">ID Copy</Label>
                                <Input
                                    id="idCopy"
                                    name="idCopy"
                                    type="file"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Export Information */}
                    <div className="space-y-6">
                        <h2 className="text-xl font-semibold">4. Export Information</h2>
                        <Separator />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="productToExport">Product to be Exported</Label>
                                <Input
                                    id="productToExport"
                                    name="productToExport"
                                    value={formData.productToExport}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="referenceNumber">Reference Number</Label>
                                <Input
                                    id="referenceNumber"
                                    name="referenceNumber"
                                    value={formData.referenceNumber}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="pgCode">PG (General Product Code)</Label>
                                <Input
                                    id="pgCode"
                                    name="pgCode"
                                    value={formData.pgCode}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="purchaseName">Purchase Name</Label>
                                <Input
                                    id="purchaseName"
                                    name="purchaseName"
                                    value={formData.purchaseName}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>
                    <Button type="submit" className="w-full">Submit</Button>
                </CardContent>
            </Card>
        </form>
    );
};

export default ClientBriefForm;