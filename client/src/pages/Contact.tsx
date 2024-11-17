import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaGlobe } from 'react-icons/fa';
import { BsRobot } from 'react-icons/bs';
import { GrUserExpert } from "react-icons/gr";
import ShimmerButton from "@/components/ui/shimmer-button";
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactUs = () => {
    const [messageSent, setMessageSent] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setMessageSent(true);
    };

    return (
        <section className="w-full flex flex-col gap-4 sm:gap-0">
            <div className="min-h-screen p-4 md:p-8">
                <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="grid md:grid-cols-2">
                        {/* Left Side - Contact Info */}
                        <div className="bg-gradient-to-br from-sky-800 via-sky-600 to-sky-200 p-8 text-white">
                            <h2 className="text-3xl font-bold mb-8">Let's get in touch</h2>
                            <p className="mb-8 text-white">
                                We're open for any suggestion or just to have a chat
                            </p>
                            <div className="space-y-6">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
                                        <FaMapMarkerAlt className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="font-semibold">Address:</p>
                                        <p className="text-blue-100">13501 Katy Freeway Suite 1625 US.</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
                                        <FaPhone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="font-semibold">Phone:</p>
                                        <p className="text-blue-100">+1-346-202-1929</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
                                        <FaEnvelope className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="font-semibold">Email:</p>
                                        <p className="text-blue-100">contact@ushwt.com</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
                                        <FaGlobe className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="font-semibold">Website:</p>
                                        <p className="text-blue-100">www.ushwt.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-6 w-full pt-10 items-center justify-center sm:justify-start">
                                <Link to="#" className="bg-blue-600 p-2 rounded-lg hover:scale-110 transition-all duration-300">
                                    <Instagram className="" size={20} />
                                </Link>
                                <Link to="#" className="bg-blue-600 p-2 rounded-lg hover:scale-110 transition-all duration-300">
                                    <Facebook className="hover:" size={20} />
                                </Link>
                                <Link to="#" className="bg-blue-600 p-2 rounded-lg hover:scale-110 transition-all duration-300">
                                    <Twitter className="hover:" size={20} />
                                </Link>
                                <Link to="#" className="bg-blue-600 p-2 rounded-lg hover:scale-110 transition-all duration-300">
                                    <Linkedin className="hover:" size={20} />
                                </Link>
                            </div>
                        </div>
                        {/* Right Side - Contact Form */}
                        <div className="p-8">
                            <h2 className="text-3xl font-bold text-gray-800 mb-8">Get in touch</h2>
                            {messageSent ? (
                                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                                    <p className="font-medium">Your message was sent, thank you!</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">FULL NAME</label>
                                            <input
                                                type="text"
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                placeholder="Name"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">EMAIL ADDRESS</label>
                                            <input
                                                type="email"
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                placeholder="Email"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">SUBJECT</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Subject"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">MESSAGE</label>
                                        <textarea
                                            rows={4}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Message"
                                        ></textarea>
                                    </div>
                                    <ShimmerButton
                                        type="submit"
                                        className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium"
                                    >
                                        Send Message
                                    </ShimmerButton>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <section className="flex flex-col sm:flex-row max-w-6xl mx-auto gap-10 sm:gap-48 items-center justify-between">
                <div className='flex flex-col items-center justify-center gap-4 bg-sky-100 rounded-2xl p-6'>
                    <h1 className="text-2xl font-semibold">Talk to our AI assistant</h1>
                    <div className="flex flex-col gap-4 p-4 rounded-2xl bg-white items-center justify-center shadow-2xl">
                        <BsRobot className="" size={48} />
                        <p className='text-center text-black'>Need quick assistant? Chat with out smart bot for instant support!</p>
                        <ShimmerButton className='w-full sm:w-auto'>Start chat</ShimmerButton>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center gap-4 rounded-2xl  p-6'>
                    <h1 className="text-2xl font-semibold">Have more doubts?</h1>
                    <div className="flex flex-col gap-4 p-4 rounded-2xl items-center justify-center shadow-2xl">
                        <GrUserExpert className="" size={48} />
                        <p className='text-center text-black'>Reach out to our experts for detailed support.</p>
                        <ShimmerButton className='w-full sm:w-auto'>Ask our Experts</ShimmerButton>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default ContactUs;