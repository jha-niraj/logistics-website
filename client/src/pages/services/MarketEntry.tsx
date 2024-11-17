import { RocketIcon } from "lucide-react";

const services = [
    {
        title: 'Product Development',
        description: 'We assist in refining and developing products to meet market-specific requirements and consumer preferences. This includes optimizing features, functionality, and quality to align with target market expectations.'
    },
    {
        title: 'Placement',
        description: 'We help determine the most effective distribution channels for your product, ensuring it reaches the right audience in the most efficient manner. This involves selecting retail partners, online platforms, and logistics solutions.'
    },
    {
        title: 'Branding',
        description: 'We work on creating and adapting brand identities that resonate with local consumers. This includes developing brand messaging, visual elements, and promotional strategies tailored to the new market.'
    },
    {
        title: 'Labeling',
        description: 'We ensure that product labeling meets local regulations and appeals to consumer preferences. This includes translating labels, adjusting design elements, and complying with regulatory requirements.'
    },
    {
        title: 'Adaptation',
        description: 'We customize products to fit the cultural and regulatory standards of the target market. This may involve modifying product features, packaging, and marketing materials to align with local tastes and compliance norms.'
    }
];

interface ServiceSectionProps {
    title: string;
    description: string;
}
const ServiceSection: React.FC<ServiceSectionProps> = ({ title, description }) => {
    return (
        <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}:</h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
    );
};

const MarketEntry = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Left side - Rocket Animation */}
                        <div className="bg-sky-100 p-8 flex items-center justify-center">
                            <RocketIcon />
                        </div>

                        {/* Right side - Content */}
                        <div className="p-8">
                            <h1 className="text-4xl text-center sm:text-left font-bold text-gray-900 mb-6">
                                Market Entry
                            </h1>
                            <p className="text-gray-700 text-center sm:text-left mb-8 leading-relaxed">
                                We offer comprehensive market entry strategies to help businesses navigate the
                                complexities of launching products in new markets.
                            </p>
                            <div className="mb-8 text-center sm:text-left">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                    Our services encompass:
                                </h2>
                                <div className="space-y-6">
                                    {
                                        services.map((service, index) => (
                                            <ServiceSection
                                                key={index}
                                                title={service.title}
                                                description={service.description}
                                            />
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="space-y-4 text-gray-700 text-center sm:text-left">
                                <h3 className="text-xl font-semibold">Specifically, we focus on:</h3>
                                <p className="leading-relaxed">
                                    Market Adaptation and Tailoring of Latin Products for North America: We adjust Latin
                                    products to suit North American consumer preferences and standards. This involves altering
                                    presentation, packaging, and marketing strategies to better appeal to North American
                                    buyers.
                                </p>
                                <p className="leading-relaxed">
                                    Tailoring U.S. Products for International Markets: We adapt U.S. products to meet the needs
                                    and expectations of international markets. This includes modifying product features,
                                    branding, and promotional tactics to ensure successful global expansion and acceptance.
                                </p>
                                <p className="leading-relaxed mt-4">
                                    By leveraging our expertise, businesses can effectively enter new markets and optimize their
                                    products for success in diverse environments.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MarketEntry;