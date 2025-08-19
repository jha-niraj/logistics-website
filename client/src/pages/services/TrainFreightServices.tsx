import { motion } from 'framer-motion';
import service4 from "../Images/trainService.jpeg";

interface ServiceItemProps {
    text: string;
}

const services = [
    'Intermodal Rail Transportation',
    'Bulk Cargo Rail Services',
    'Container Rail Transport',
    'Cross-Country Rail Freight',
    'Rail-to-Truck Transfer Services',
    'Heavy Equipment Rail Transport',
    'Raw Materials Transportation',
    'Rail Freight Tracking & Monitoring'
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

const TrainFreightServices = () => {
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
                                    src={service4}
                                    alt="Train Freight Services"
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
                                Train Freight Services
                            </motion.h1>

                            <motion.p 
                                className="text-gray-700 text-center sm:text-left mb-8 leading-relaxed"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                U.S. Handle Worldwide Trade, LLC. provides a highly cost-effective method of transporting
                                a range of large, heavy or normal loads via rail freight. Our train freight services offer
                                an environmentally friendly and economical solution for long-distance transportation
                                across the continental United States.
                            </motion.p>

                            <motion.p 
                                className="text-gray-700 text-center sm:text-left mb-8 leading-relaxed"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                            >
                                Rail transportation is ideal for bulk commodities, heavy machinery, and containerized goods.
                                Our extensive rail network connections and partnerships with major railroads ensure reliable
                                and timely delivery of your cargo while reducing transportation costs and environmental impact.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                            >
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Train Freight Services Include:</h3>
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
                                <h4 className="font-semibold text-blue-900 mb-2">Why Choose Our Train Freight Services?</h4>
                                <p className="text-blue-800 text-sm">
                                    Rail freight offers superior cost-effectiveness for long-distance transportation while
                                    being environmentally sustainable. Our rail solutions provide reliable transit times
                                    and can handle large volumes, making it perfect for industrial and commercial shipments.
                                </p>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default TrainFreightServices;
