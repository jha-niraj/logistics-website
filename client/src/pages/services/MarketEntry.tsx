import { RocketIcon } from "lucide-react";

const services = [
    {
        title: 'Product Development',
        description: "We assist in refining and tailoring products to meet market-specific needs, consumer preferences, and local regulations. Our approach focuses on optimizing product features, functionality, and quality to ensure it aligns with the target market's expectations."
    },
    {
        title: 'Placement and Distribution',
        description: 'Identifying the right distribution channels is key to reaching your audience. We help businesses choose the most effective retail partners, online platforms, and logistics solutions to ensure efficient and timely product delivery.'
    },
    {
        title: 'Branding and Market Positioning',
        description: 'A strong brand presence is essential for market success. We work on adapting and creating brand identities that resonate with local consumers, including brand messaging, visual elements, and promotional strategies tailored to the cultural context of the target market.'
    },
    {
        title: 'Labeling and Compliance',
        description: 'Product labeling must meet local legal requirements while appealing to consumers. We assist with translation, design adjustments, and regulatory compliance, ensuring your products are correctly presented and legally certified.'
    },
    {
        title: 'Cultutal and Regulatory Adaptation',
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
        <div className="min-h-screen bg-gray-50 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Left side - Rocket Animation */}
                        <div className="bg-sky-100 p-8 flex items-center justify-center">
                            <RocketIcon />
                        </div>

                        {/* Right side - Content */}
                        <div className="p-8">
                            <div className="flex flex-col items-center justify-center gap-1 mb-6">
                                <h1 className="text-3xl text-center font-semibold text-gray-900">
                                    Market Entry
                                </h1>
                                <p className="text-sm font-medium">
                                    Comprehensive Market Entry Strategies for Global Success
                                </p>
                            </div>
                            <p className="text-gray-700 text-center sm:text-left mb-8 leading-relaxed">
                                We specialize in guiding businesses through the intricacies of entering new markets,
                                ensuring a seamless and successful product launch. Our services are designed to
                                address every aspect of market entry, from product development to localization and distribution.
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