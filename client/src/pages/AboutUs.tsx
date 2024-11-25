import { RainbowButton } from "@/components/ui/rainbow-button";
import ShimmerButton from "@/components/ui/shimmer-button";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import aboutUsImage from "./Images/aboutusPage.png";

interface ValueProps {
    title: string;
    content: string;
}

const ValueCard: React.FC<ValueProps> = ({ title, content }) => (
    <div>
        <h3 className="font-semibold mb-2">{title}</h3>
        <p className="text-gray-800">{content}</p>
    </div>
)

const AboutUs = () => {
    return (
        <div className="min-h-screen py-24">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="max-w-7xl mx-auto bg-blue-600 text-white rounded-2xl py-16"
            >
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">About U.S. Handle Worldwide Trade, LLC</h1>
                    <p className="text-xl text-white">Your trusted partner in global freight management</p>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="max-w-6xl mx-auto py-3 space-y-12"
            >
                <div className="mx-auto py-8 space-y-8">
                    <div className="w-full rounded-lg overflow-hidden">
                        <img
                            src={aboutUsImage}
                            alt="Colorful shipping containers stacked on a cargo ship"
                            className="object-cover"
                        />
                    </div>
                    <main className="grid gap-8">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text center sm:text-left">About S.S. Nordic Worldwide Trade LLC</CardTitle>
                            </CardHeader>
                            <CardContent className="prose dark:prose-invert flex flex-col gap-4">
                                <p>
                                    Welcome to S.S. Nordic Worldwide Trade LLC, a distinguished leader in global freight management.
                                </p>
                                <p>
                                    S.S. Nordic Worldwide Trade LLC serves as your trusted partner for maritime import and export logistics, empowering your supply chain with innovative solutions tailored to meet the demands of today&apos;s competitive global market. We operate as a valuable network of independent representatives and logistics experts, delivering key offshore service products, providing a unique bridge for moving people and other related services on a global scale.
                                </p>
                                <p>
                                    Our integrated approach combines state-of-the-art technology systems with comprehensive supply chain management, guaranteeing swift, secure, and efficient delivery of your global activities. Whether you are starting new markets or expanding your reach, our solutions provide cost-effective and practical solutions that enhance your operational flexibility.
                                </p>
                                <p>
                                    As International Freight Consultants, we offer strategic guidance on trade agreements, duties, taxes, and licensing requirements, facilitating informed decisions in international transactions. Committed to your success, we envision expanding our market presence and building enduring partnerships across the globe.
                                </p>
                                <p>
                                    Partner with S.S. Nordic Worldwide Trade LLC and elevate your logistics experience. Discover how our expertise and dedication can streamline your global operations and drive growth.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Our Vision</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-800">
                                    Our vision is to establish ourselves as a leader in the shipping and logistics industry by achieving global standards in professionalism of service, and thereby becoming an indispensable partner to our clients in their business growth and wealth creation.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Our Mission</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-800">
                                    Our mission is to deliver best of class services and solutions to all shipping and logistics requirements of our clients while offering exceptional value for their money. Which should be accomplished in the marketplace. Our aim is not only to provide exceptional customer satisfaction but also to establish long-term mutually beneficial relationships with our clients so that based on it we be considered as a valuable building up tool for parties. We will strive to operate responsibly both for our clients and for our employees. To others we shall will be to provide careers and satisfactory work environment and experience.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Our Values</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <ValueCard
                                    title="Strong Relationships"
                                    content="We believe relationships are at the heart of all success and we understand how important it is to develop strong relationships across all areas of our business, from our employees to our customers, our partners and all our associates."
                                />
                                <ValueCard
                                    title="Agility and Responsiveness"
                                    content="We believe relationships are at the heart of all success and we understand how important it is to develop strong relationships across all areas of our business, from our employees to our customers, our partners and all our associates."
                                />
                                <ValueCard
                                    title="Trust"
                                    content="Trust is everything in any business relationship and we know how difficult it is to earn trust of our clients and more importantly, to maintain and cherish it for a very long time. As a small entity system we take a humble building up of understanding between our customers respect."
                                />
                                <ValueCard
                                    title="Key to Success"
                                    content="We manage consolidation of all small trade moves and we fully equipped to handle special projects, oversized cargo and hazardous consignments. We have dry technology operation capability to a location towards and the cost effectiveness to deliver on our promise efficiently. As a one-stop shop with complete Logistics Solution, Customs and team with all operational cargo movement has freight forwarding and customs clearance. We have the right answers, to the right place, at the right time everything on to offer timely clearance and execution of services on time every time."
                                />
                                <ValueCard
                                    title="Quality Policy"
                                    content="We serve with utmost care! At S.S Nordic Pty Ltd LLC 'Nordic Worldwide Trade, LLC.' it is dedicated to provide services to exceed the expectations of our valued customers. S.S. Nordic Worldwide Trade, LLC. is also committed to 'continual improvement' in its Service Quality through a system focus on People, Process, Systems & Leadership."
                                />
                            </CardContent>
                        </Card>
                    </main>
                </div>
                <Card>
                    <CardHeader>
                        <CardTitle>Our Approach</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-800">
                            Our strategy integrates cutting-edge information systems with comprehensive supply chain management to ensure fast, secure, and efficient deliveries across the globe. Whether you're expanding your business or entering new markets, we offer innovative logistics solutions tailored to your needs.
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>International Freight Consulting</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-800">
                            As your trusted International Freight Consultants, we provide expert advice on trade agreements, taxes, duties, and licensing. We empower you to make informed decisions that enhance your operational efficiency in global markets.
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Partner with Us</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="bg-white rounded-xl transition-shadow">
                            <p className="text-gray-700 leading-relaxed mb-8">
                                Partner with U.S. Handle Worldwide Trade, LLC to elevate your logistics operations and achieve seamless international trade. Our expertise in freight management and dedication to excellence make us the perfect partner for your business growth.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                >
                                    <RainbowButton className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                                        Contact Us
                                    </RainbowButton>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                >
                                    <ShimmerButton>
                                        Download Brochure
                                    </ShimmerButton>
                                </motion.div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    )
}

export default AboutUs;