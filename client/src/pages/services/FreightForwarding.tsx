interface ServiceItemProps {
    text: string;
}

const services = [
    'Air Freight (Export / Import Consolidation)',
    'Projects Cargo handling',
    'Perishable Cargo Handling',
    'Clearing and Forwarding',
    'Door to Door Service',
    'Customs clearance and delivery'
];
const ServiceItem: React.FC<ServiceItemProps> = ({ text }) => {
    return (
        <li className="flex items-center space-x-2 text-gray-700">
            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
            <span>{text}</span>
        </li>
    );
};

const FrieghtForwarding = () => {

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Left side - Image */}
                        <div className="relative h-[400px] md:h-full">
                            <div className="absolute inset-0">
                                <img
                                    src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                                    alt="Air Freight"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
                            </div>
                        </div>

                        {/* Right side - Content */}
                        <div className="p-8 md:p-12">
                            <h1 className="text-4xl text-center sm:text-left font-bold text-gray-900 mb-6">
                                Air Freight Services
                            </h1>

                            <p className="text-gray-700 text-center sm:text-left mb-8 leading-relaxed">
                                U.S. Handle Worldwide Trade, LLC. provides professional and comprehensive Air Freight
                                services committed to the safe, reliable and cost effective delivery of your consignment.
                                Our dedicated network of integrated air and ground services, combine to ensure timely
                                customs clearance and delivery for your cargo every time. Freight forwarding is our
                                strength in the market and we are specialist in freight movement of luxurious and
                                general items.
                            </p>

                            <div className="space-y-6">
                                <h2 className="text-xl font-semibold text-gray-900">
                                    Service Offered:
                                </h2>
                                <ul className="space-y-4">
                                    {services.map((service, index) => (
                                        <ServiceItem key={index} text={service} />
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FrieghtForwarding;