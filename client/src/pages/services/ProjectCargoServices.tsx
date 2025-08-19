import { motion } from 'framer-motion';
import service3 from "../Images/cargoService.png";

interface ServiceItemProps {
    text: string;
}

const services = [
    'Heavy Lift Project Cargo',
    'Over-Dimensional Cargo Transport',
    'Industrial Equipment Shipping',
    'Construction Machinery Transport',
    'Oil & Gas Equipment Logistics',
    'Power Plant Equipment Transport',
    'Mining Equipment Shipping',
    'Specialized Rigging & Handling'
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

const ProjectCargoServices = () => {
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
                                    src={service3}
                                    alt="Project Cargo Services"
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
                                Project Cargo Services
                            </motion.h1>

                            <motion.p 
                                className="text-gray-700 text-center sm:text-left mb-8 leading-relaxed"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                Handling Project Cargo is a specialized job which calls for expertise and experience in
                                this particular field. U.S. Handle Worldwide Trade, LLC. brings years of experience in
                                managing complex project cargo shipments that require specialized handling, equipment,
                                and logistics coordination.
                            </motion.p>

                            <motion.p 
                                className="text-gray-700 text-center sm:text-left mb-8 leading-relaxed"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                            >
                                Our project cargo services encompass the transportation of oversized, heavy, and high-value
                                equipment for industries such as oil & gas, power generation, construction, and manufacturing.
                                We provide end-to-end project logistics solutions with meticulous planning and execution.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                            >
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Project Cargo Services Include:</h3>
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
                                <h4 className="font-semibold text-blue-900 mb-2">Why Choose Our Project Cargo Services?</h4>
                                <p className="text-blue-800 text-sm">
                                    With extensive experience in handling complex project cargo, we provide customized
                                    solutions for your unique requirements. Our specialized equipment, expert team, and
                                    comprehensive planning ensure safe and timely delivery of your valuable assets.
                                </p>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ProjectCargoServices;
