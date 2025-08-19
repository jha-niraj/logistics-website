import { motion } from 'framer-motion';
import service1 from "../Images/warehouseService.png";

interface ServiceItemProps {
    text: string;
}

const services = [
    'Climate-Controlled Storage Solutions',
    'Inventory Management Systems',
    'Pick & Pack Services',
    'Cross-Docking Operations',
    'Order Fulfillment Services',
    'Distribution Center Management',
    'Specialized Storage for Hazardous Goods',
    '24/7 Security & Monitoring'
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

const WarehousingServices = () => {
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
                                    src={service1}
                                    alt="Warehousing Services"
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
                                Warehousing Services
                            </motion.h1>

                            <motion.p 
                                className="text-gray-700 text-center sm:text-left mb-8 leading-relaxed"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                Warehousing is an extremely dynamic logistics service, wherein each client demands a
                                tailor-made solution for his/her business model. U.S. Handle Worldwide Trade, LLC.
                                provides flexible and scalable warehousing solutions designed to meet your specific
                                storage and distribution requirements.
                            </motion.p>

                            <motion.p 
                                className="text-gray-700 text-center sm:text-left mb-8 leading-relaxed"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                            >
                                Our state-of-the-art warehousing facilities are equipped with modern technology and
                                managed by experienced professionals. We offer comprehensive storage solutions including
                                inventory management, order processing, and distribution services to optimize your
                                supply chain efficiency.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                            >
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Warehousing Services Include:</h3>
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
                                <h4 className="font-semibold text-blue-900 mb-2">Why Choose Our Warehousing Services?</h4>
                                <p className="text-blue-800 text-sm">
                                    Our flexible warehousing solutions are designed to scale with your business needs.
                                    With advanced inventory management systems and strategic locations, we help optimize
                                    your supply chain while reducing costs and improving efficiency.
                                </p>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default WarehousingServices;
