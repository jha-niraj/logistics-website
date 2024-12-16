import { FaWhatsapp, FaLinkedin, FaEnvelope } from "react-icons/fa";

const socialLinks = [
    {
        id: 1,
        icon: <FaWhatsapp />,
        label: "1-346-202-1929",
        href: "https://wa.me/1234567890",
        color: "bg-green-500",
    },
    {
        id: 2,
        icon: <FaLinkedin />,
        label: "LinkedIn Profile",
        href: "https://www.linkedin.com/company/u-s-handle-worldwide-trade-llc/about/",
        color: "bg-blue-500",
    },
    {
        id: 3,
        icon: <FaEnvelope />,
        label: "krbaeza@ushwt.com",
        href: "mailto:krbaeza@ushwt.com",
        color: "bg-red-500",
    },
];
const SocialIcons = () => {

    return (
        <div className="fixed left-0 top-1/3 transform -translate-y-1/2 z-50">
            {
                socialLinks.map((link, index) => {
                    return (
                        <a href={link.href} target="_blank" className={`h-12 w-12 mb-1 group flex items-center justify-center ${link.color} rounded-full shadow-md`} key={index}>
                            <div className="flex items-center space-x-2 w-full pl-2 pr-2">
                                <span className="text-white flex gap-2 items-center justify-center text-lg transition-all duration-200 relative left-2 flex-shrink-0">
                                    {link.icon}
                                    <span
                                        className={`w-48 pl-4 rounded-tr-lg rounded-br-lg opacity-0 group-hover:opacity-100 transition-all duration-200 ${link.color}`}
                                    >
                                        {link.label}
                                    </span>
                                </span>
                            </div>
                        </a>
                    )
                })
            }
        </div>
    );
};

export default SocialIcons;