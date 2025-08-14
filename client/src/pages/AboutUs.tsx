import { RainbowButton } from "@/components/ui/rainbow-button";
import ShimmerButton from "@/components/ui/shimmer-button";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import aboutUsImage from "./Images/aboutusPage.png";
import { useNavigate } from "react-router-dom";

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
    const navigate = useNavigate();

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
                                    At U.S. Handle Worldwide Trade, LLC, we're here to simplify your global logistics and freight management needs. 
                                    Whether you're just starting to explore international markets or looking to optimize your existing operations, 
                                    we provide reliable, cost-effective solutions that help you get your goods where they need to go—on time and on budget.                                  </p>
                                <p>
                                    Our team of experienced logistics professionals works alongside a trusted network of service providers to offer a full 
                                    range of air, ocean, and ground transportation options, as well as value-added services. We understand the complexities 
                                    of global trade, and our goal is to make it easier for you to navigate the process with confidence.
                                </p>
                                <p>
                                    We combine modern information systems with a practical, hands-on approach to supply chain management, ensuring that your 
                                    shipments are managed efficiently and securely from start to finish. Whether it's trade agreements, taxes, duties, or licensing, 
                                    our International Freight Consultants are here to provide the guidance and support you need to make informed decisions.
                                </p>
                                <p>
                                    At U.S. Handle Worldwide Trade, LLC, we're committed to building long-term, meaningful relationships with our clients. 
                                    We focus on delivering consistent results and providing personalized service that adapts to your specific needs. Our success 
                                    is tied to your success, and we look forward to working together to help your business grow.
                                </p>
                                <p>
                                    Partner with us today and experience how our straightforward, dependable logistics solutions can make a real difference for your business.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Our Vision</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-800">
                                    To be a leading force in shipping and logistics, setting new standards of excellence while empowering women entrepreneurs and fostering long-term
                                    partnerships that drive growth and success in the global marketplace.                                
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Our Mission</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-800">
                                    To provide practical, tailored logistics solutions built on integrity, trust, and a deep understanding of our clients' needs. 
                                    We focus on lasting relationships, employee growth, and empowering women in business, while ensuring every shipment is handled
                                    with precision and care.
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
                                    content="We prioritize meaningful connections with clients, partners, and employees, knowing they're the foundation of exceptional service."
                                />
                                <ValueCard
                                    title="Agility and Responsiveness"
                                    content="We adapt quickly to changing needs, offering flexible solutions with speed and precision."
                                />
                                <ValueCard
                                    title="Trust"
                                    content="We earn it through transparency, respect, and consistently delivering on our promises."
                                />
                                <ValueCard
                                    title="Key to Success"
                                    content="We specialize in small trade consolidations, special projects, oversized cargo, and hazardous consignments. Our advanced dry technology and efficient operations ensure on-time, cost-effective delivery, making us your one-stop logistics partner."
                                />
                                <ValueCard
                                    title="Quality Policy"
                                    content="We are committed to exceeding customer expectations by continually improving our people, processes, systems, and leadership—delivering the highest quality service in every interaction."
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
                            At U.S. Handle Worldwide Trade, LLC, we combine cutting-edge information systems with a comprehensive supply chain management strategy to deliver fast,
                            secure, and efficient logistics solutions worldwide. Whether you&apos;re expanding your business or entering new markets, our innovative approach ensures 
                            your operations are streamlined, adaptable, and tailored to your specific needs. Trust us to optimize your logistics and keep you ahead in today's global marketplace.
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Our Values</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-800">
                            We prioritize meaningful connections with clients, partners, and employees, knowing they're the foundation of exceptional service.
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Agility and Responsiveness</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-800">
                            We adapt quickly to changing needs, offering flexible solutions with speed and precision.
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Trust</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-800">
                            We earn it through transparency, respect, and consistently delivering on our promises.    
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Key to success</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-800">
                            We specialize in small trade consolidations, special projects, oversized cargo, and hazardous consignments. Our advanced dry technology and efficient operations ensure on-time, cost-effective delivery, making us your one-stop logistics partner.
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Quality Policy</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-800">
                            We are committed to exceeding customer expectations by continually improving our people, processes, systems, and leadership—delivering the highest quality service in every interaction.
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>International Freight Consulting</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-800">
                            Our experts guide you through trade agreements, taxes, duties, and licensing, helping you make informed decisions and navigate global trade with confidence.                        
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
                                Partner with us to streamline your logistics, expand your reach, and experience how reliability, flexibility, and innovation can transform your supply chain.                            
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                    onClick={() => navigate("/contactus")}
                                >
                                    <RainbowButton className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                                        Let's grow together
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