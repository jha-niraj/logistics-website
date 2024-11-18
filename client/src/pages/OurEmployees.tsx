import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { useState } from "react";
import ceoImage from "@/pages/Images/ceoImage.jpg";
import ReactCardFlip from "react-card-flip";

interface SocialLinks {
    twitter?: string;
    github?: string;
    linkedin?: string;
    email?: string;
}
interface TeamMemberProps {
    name: string;
    role: string;
    image: string;
    bio: string;
    socialLinks: SocialLinks;
}
const TeamMember = ({ name, role, image, bio, socialLinks }: TeamMemberProps) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            className="relative w-full h-[200px] perspective-1000"
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
        >
            <motion.div
                className="w-full h-full relative preserve-3d transition-transform duration-500"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                onMouseEnter={() => setIsFlipped(true)}
                onMouseLeave={() => setIsFlipped(false)}
            >
                <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                    <div className="absolute w-full h-full backface-hidden">
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full">
                            <div className="relative h-3/4">
                                <img
                                    src={ceoImage}
                                    alt={name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="absolute w-full h-full backface-hidden rotate-y-180">
                        <div className="bg-white rounded-2xl shadow-lg p-6 h-full flex flex-col justify-between">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
                                <p className="text-sm text-purple-600 mb-4">{role}</p>
                                <p className="text-gray-600 text-sm">{bio}</p>
                            </div>
                            <div className="flex justify-center gap-4">
                                {socialLinks.twitter && (
                                    <a
                                        href={socialLinks.twitter}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-600 hover:text-purple-600 transition-colors"
                                    >
                                        <Twitter className="h-5 w-5" />
                                    </a>
                                )}
                                {socialLinks.github && (
                                    <a
                                        href={socialLinks.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-600 hover:text-purple-600 transition-colors"
                                    >
                                        <Github className="h-5 w-5" />
                                    </a>
                                )}
                                {socialLinks.linkedin && (
                                    <a
                                        href={socialLinks.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-600 hover:text-purple-600 transition-colors"
                                    >
                                        <Linkedin className="h-5 w-5" />
                                    </a>
                                )}
                                {socialLinks.email && (
                                    <a
                                        href={`mailto:${socialLinks.email}`}
                                        className="text-gray-600 hover:text-purple-600 transition-colors"
                                    >
                                        <Mail className="h-5 w-5" />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </ReactCardFlip>
            </motion.div>
        </div>
    );
}

const teamMembers = [
    {
        name: "Sarah Johnson",
        role: "CEO & Founder",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop",
        bio: "Sarah is a visionary leader with over 15 years of experience in tech innovation. She founded our company with the mission to transform digital experiences.",
        socialLinks: {
            twitter: "https://twitter.com",
            linkedin: "https://linkedin.com",
            email: "sarah@example.com"
        }
    },
    {
        name: "Michael Chen",
        role: "CTO",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
        bio: "Michael leads our technical initiatives with expertise in AI and cloud architecture. He's passionate about building scalable solutions.",
        socialLinks: {
            github: "https://github.com",
            linkedin: "https://linkedin.com",
            email: "michael@example.com"
        }
    },
    {
        name: "Emily Rodriguez",
        role: "Head of Design",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
        bio: "Emily brings creative vision to life through user-centered design. She leads our design team in creating beautiful, functional interfaces.",
        socialLinks: {
            twitter: "https://twitter.com",
            linkedin: "https://linkedin.com",
            email: "emily@example.com"
        }
    },
    {
        name: "David Kim",
        role: "Lead Developer",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop",
        bio: "David is a full-stack developer with a passion for clean code and innovative solutions. He leads our development team with expertise.",
        socialLinks: {
            github: "https://github.com",
            linkedin: "https://linkedin.com",
            twitter: "https://twitter.com"
        }
    },
    {
        name: "Lisa Thompson",
        role: "Product Manager",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
        bio: "Lisa excels at bridging user needs with technical solutions. She ensures our products deliver maximum value to our customers.",
        socialLinks: {
            linkedin: "https://linkedin.com",
            twitter: "https://twitter.com",
            email: "lisa@example.com"
        }
    },
    {
        name: "James Wilson",
        role: "Senior Developer",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop",
        bio: "James specializes in backend architecture and cloud solutions. He brings extensive experience in building scalable systems.",
        socialLinks: {
            github: "https://github.com",
            linkedin: "https://linkedin.com",
            email: "james@example.com"
        }
    }
];
export default function OurEmployees() {
    return (
        <section>
            <div className="min-h-screen bg-gray-50">
                {/* Header Section */}
                <motion.section
                    className="relative overflow-hidden py-20 px-4 bg-white"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="container mx-auto max-w-4xl text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Meet Our Exceptional Team
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                            We're a diverse group of passionate individuals working together to create
                            innovative solutions. Hover over our cards to learn more about each team
                            member.
                        </p>
                    </div>
                    <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(45%_45%_at_50%_50%,#f3e8ff_0,transparent_100%)]" />
                </motion.section>

                {/* Team Members Grid */}
                <section className="px-4">
                    <div className="container mx-auto">
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            {teamMembers.map((member, index) => (
                                <motion.div
                                    key={member.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <TeamMember {...member} />
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>
            </div>
        </section>
    )
}