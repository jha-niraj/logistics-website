import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaGlobe } from 'react-icons/fa';
import { BsRobot } from 'react-icons/bs';
import { GrUserExpert } from "react-icons/gr";
import ShimmerButton from "@/components/ui/shimmer-button";
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import contactImage from "@/pages/Images/contactPageImage.avif";
import toast, { Toaster } from "react-hot-toast";
import { BASE_URL } from '@/config';

const ContactUs = () => {
    const copyNumber = () => {
        navigator.clipboard.writeText("1-346-202-1929");
        toast.success("Phone Number Copied")
    }

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState<Boolean>(false);
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setIsSubmitting(true);
        try {
            const response = await fetch(`${BASE_URL}/contactform`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message
                })
            });

            const data = await response.json();

            if (data.success) {
                toast.success('Message sent successfully!');
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            } else {
                toast.error(data.message || 'Failed to send message');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            toast.error('Failed to send message. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="w-full flex flex-col gap-4 sm:gap-0 py-20">
            <Toaster />
            <div className="min-h-screen ">
                <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="grid md:grid-cols-2">
                        <section
                            className="flex flex-col sm:flex-row rounded-lg gap-10 items-center justify-around w-full bg-cover bg-center relative"
                            style={{ backgroundImage: `url(${contactImage})` }}
                        >
                            <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm rounded-lg"></div>
                            <div className="relative text-white p-8 sm:p-16">
                                <h2 className="text-3xl font-bold mb-8 text-center sm:text-left">Let's get in touch</h2>
                                <p className="mb-8 text-center sm:text-left">
                                    We're open for any suggestion or just to have a chat
                                </p>
                                <div className="space-y-6">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
                                            <FaMapMarkerAlt className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="font-semibold">Address:</p>
                                            <p className="text-blue-100">13501 Katy Freeway Houston, TX 77079 USA</p>
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
                                        <Instagram size={20} />
                                    </Link>
                                    <Link to="#" className="bg-blue-600 p-2 rounded-lg hover:scale-110 transition-all duration-300">
                                        <Facebook size={20} />
                                    </Link>
                                    <Link to="#" className="bg-blue-600 p-2 rounded-lg hover:scale-110 transition-all duration-300">
                                        <Twitter size={20} />
                                    </Link>
                                    <Link to="#" className="bg-blue-600 p-2 rounded-lg hover:scale-110 transition-all duration-300">
                                        <Linkedin size={20} />
                                    </Link>
                                </div>
                            </div>
                        </section>
                        <div className="p-8">
                            <h2 className="text-3xl font-bold text-gray-800 mb-8">Get in touch</h2>
                            {
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                            <input
                                                type="text"
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                placeholder="Name"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                            <input
                                                type="email"
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                placeholder="Email"
                                                value={formData.email}
                                                required
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Subject"
                                            value={formData.subject}
                                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                        <textarea
                                            rows={4}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Message"
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        ></textarea>
                                    </div>
                                    <ShimmerButton
                                        type="submit"
                                        className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium"
                                    >
                                        {
                                            isSubmitting ? "Sending Message" : "Sent Message"
                                        }
                                    </ShimmerButton>
                                </form>
                            }
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
                        <ShimmerButton className='w-full sm:w-auto'>Start chat(Coming Soon...)</ShimmerButton>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center gap-4 rounded-2xl  p-6'>
                    <h1 className="text-2xl font-semibold">Have more doubts?</h1>
                    <div className="flex flex-col gap-4 p-4 rounded-2xl items-center justify-center shadow-2xl" onClick={copyNumber}>
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