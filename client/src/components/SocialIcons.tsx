import { motion } from "framer-motion";
import { FaWhatsapp, FaLinkedin, FaEnvelope } from "react-icons/fa";

const SocialIcons = () => {
    const socialLinks = [
        {
            id: 1,
            icon: <FaWhatsapp />,
            label: "+123 456 7890",
            href: "https://wa.me/1234567890",
            color: "bg-green-500",
        },
        {
            id: 2,
            icon: <FaLinkedin />,
            label: "LinkedIn Profile",
            href: "https://linkedin.com/in/example",
            color: "bg-blue-500",
        },
        {
            id: 3,
            icon: <FaEnvelope />,
            label: "email@example.com",
            href: "mailto:email@example.com",
            color: "bg-red-500",
        },
    ];

    return (
        <div className="fixed left-0 top-1/3 transform -translate-y-1/2 z-50">
            {
                socialLinks.map((link) => (
                    <motion.a
                        key={link.id}
                        href={link.href}
                        className={`absolute left-0 flex items-center ${link.color} rounded-full shadow-md`}
                        style={{
                            top: `${(link.id - 1) * 4}rem`,
                            width: "3rem",
                            height: "3rem"
                        }}
                        initial={{
                            width: "3rem",
                            x: 0
                        }}
                        whileHover={{
                            width: "14rem",
                            opacity: 1,
                            x: 0,
                            transition: {
                                type: "tween",
                                duration: 0.3
                            }
                        }}
                    >
                        <div className="flex items-center space-x-2 w-full pl-2 pr-2">
                            <span className="text-white flex gap-2 items-center justify-center text-lg relative left-2 flex-shrink-0">
                                {link.icon}
                                <motion.span
                                    className="text-white"
                                    initial={{
                                        opacity: 0,
                                        x: -10
                                    }}
                                    whileHover={{
                                        opacity: 1,
                                        x: 0,
                                        transition: {
                                            delay: 0.2,
                                            duration: 0.3
                                        }
                                    }}
                                >
                                    {link.label}
                                </motion.span>
                            </span>
                        </div>
                    </motion.a>
                ))
            }
        </div>
    );
};

export default SocialIcons;