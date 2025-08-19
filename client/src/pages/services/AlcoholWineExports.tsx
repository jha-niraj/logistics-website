import { motion } from 'framer-motion';
import service7 from "../Images/wineService.jpeg";

interface ServiceItemProps {
    text: string;
}

const services = [
    'Wine Export Compliance & Documentation',
    'Alcohol Licensing & Permits',
    'Temperature-Controlled Transportation',
    'Customs Clearance for Beverages',
    'International Wine Distribution',
    'Spirits & Liquor Export Services',
    'Cold Chain Logistics Management',
    'Specialized Packaging Solutions'
];

const ServiceItem: React.FC<ServiceItemProps> = ({ text }) => {
    return (
        <motion.li 
            className="flex items-center space-x-3 text-gray-700"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
        >
            <span className="w-3 h-3 bg-blue-600 rounded-full flex-shrink-0"></span>
            <span>{text}</span>
        </motion.li>
    );
};

const AlcoholWineExports = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
                    className="bg-white rounded-2xl shadow-xl overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Left side - Image */}
                        <motion.div 
                            className="relative h-[400px] md:h-full"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="absolute inset-0">
                                <img
                                    src={service7}
                                    alt="Alcohol and Wine Exports"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
                            </div>
                        </motion.div>

                        {/* Right side - Content */}
                        <motion.div 
                            className="p-8 md:p-12"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <motion.h1 
                                className="text-4xl text-center sm:text-left font-bold text-gray-900 mb-6"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                            >
                                Alcohol and Wine Exports
                            </motion.h1>

                            <motion.p 
                                className="text-gray-700 text-center sm:text-left mb-8 leading-relaxed"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                We specialize in exporting alcohol and wine with precision and care. U.S. Handle Worldwide
                                Trade, LLC. ensures your products reach global destinations swiftly and safely, meeting all
                                international standards and regulations for alcoholic beverage transportation.
                            </motion.p>

                            <motion.p 
                                className="text-gray-700 text-center sm:text-left mb-8 leading-relaxed"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                            >
                                Our expertise in alcohol and wine logistics includes navigating complex regulatory requirements,
                                maintaining proper temperature controls, and ensuring secure packaging. We understand the
                                unique challenges of beverage exports and provide specialized solutions for wineries,
                                distilleries, and beverage distributors.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                            >
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Alcohol & Wine Export Services Include:</h3>
                                <ul className="space-y-3">
                                    {services.map((service, index) => (
                                        <ServiceItem key={index} text={service} />
                                    ))}
                                </ul>
                            </motion.div>

                            <motion.div 
                                className="mt-8 p-6 bg-blue-50 rounded-lg"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                            >
                                <h4 className="font-semibold text-blue-900 mb-2">Why Choose Our Alcohol & Wine Export Services?</h4>
                                <p className="text-blue-800 text-sm">
                                    With deep knowledge of international alcohol regulations and specialized handling
                                    requirements, we ensure your beverages reach their destination in perfect condition.
                                    Trust us to handle your premium products with the care they deserve.
                                </p>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default AlcoholWineExports;
