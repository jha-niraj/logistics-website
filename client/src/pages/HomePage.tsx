import { Mail, MessageCircle } from 'lucide-react';
import ShimmerButton from "@/components/ui/shimmer-button";
import carousalImage5 from "./Images/bulk_cargo_import.jpg";
import carousal1 from "./Images/carousal1.webp";
import carousal2 from "./Images/carousal2.webp";
import { useEffect, useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import AnimatedSection from "@/components/AnimatedSection";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import ceoimage from "./Images/ceoImage.jpg";
import service1 from "./Images/warehouseService.png";
import service2 from "./Images/Air freightService.png";
import service3 from "./Images/cargoService.png";
import service4 from "./Images/trainService.jpeg";
import service6 from "./Images/waterFreightService.png";
import service7 from "./Images/wineService.jpeg";
import toast, { Toaster } from "react-hot-toast";
import SocialIcons from '@/components/SocialIcons';
import { BASE_URL } from '@/config';

const faqData = [
    {
        id: "item-1",
        question: "What is US Freight Service?",
        answer: "US Freight Service refers to the shipping and transportation of goods within the United States, including domestic freight services, freight shipping methods, and delivery times."
    },
    {
        id: "item-2",
        question: "How do I track my shipment?",
        answer: "You can track your shipment by entering your tracking number on our website or through our customer service portal for real-time updates."
    },
    {
        id: "item-3",
        question: "What are your business hours?",
        answer: "Our business hours are Monday to Friday from 9:00 AM to 6:00 PM (Eastern Standard Time). We are closed on weekends and major holidays."
    },
    {
        id: "item-4",
        question: "What types of freight do you handle?",
        answer: "We handle various types of freight, including LTL (Less-than-Truckload), FTL (Full Truckload), expedited, refrigerated, and international shipments."
    },
    {
        id: "item-5",
        question: "How can I get a quote for shipping?",
        answer: "To get a quote, you can fill out the 'Get a Quote' form on our website or contact our customer support team for a personalized estimate based on your shipping needs."
    }
];
// const experiences = [
//     {
//         icon: Clock,
//         title: "7 Years of Experience",
//         description: "Our team brings over two decades of expertise in the field, ensuring top-tier solutions for your business.",
//         image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80"
//     },
//     {
//         icon: Building2,
//         title: "22 Years of Company Creation",
//         description: "Since the company's founding, we have been delivering high-quality services to businesses worldwide.",
//         image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
//     }
// ];
const services = [
    {
        title: "AIR FREIGHT SERVICES",
        description: "U.S. Handle Worldwide Trade, LLC. provides professional and comprehensive Air Freight services committed to the safe, reliable and cost-effective delivery of your consignment.",
        image: service2
    },
    {
        title: "SEA FREIGHT SERVICES",
        description: "U.S. Handle Worldwide Trade, LLC. provides a highly cost-effective method of transporting a range of large, heavy or normal loads.",
        image: service6
    },
    {
        title: "TRAIN FREIGHT SERVICES",
        description: "U.S. Handle Worldwide Trade, LLC. provides a highly cost-effective method of transporting a range of large, heavy or normal loads.",
        image: service4
    },
    {
        title: "PROJECT CARGO SERVICES",
        description: "Handling Project Cargo is a specialized job which calls for expertise and experience in this particular field.",
        image: service3
    },
    {
        title: "ALCOHOL AND WINE EXPORTS",
        description: "We specialize in exporting alcohol and wine with precision and care. We ensure your products reach global destinations swiftly and safely, meeting all international standards.",
        image: service7
    },
    {
        title: "LUXURY VEHICLE EXPORT & IMPORT",
        description: "We provide premium logistics for the export and import of high-value vehicles. We ensure your luxury cars are handled with utmost care, reaching their destination safely and on time.",
        image: carousal1
    },
    {
        title: "WAREHOUSING SERVICES",
        description: "Warehousing is an extremely dynamic Logistics service, wherein each client demands a tailor-made solution for his/her business model.",
        image: service1
    },
];

const HomePage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    //@ts-ignore
    const [currentIndex, setCurrentIndex] = useState(0);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        comments: '',
        agreeToTerms: false
    });
    const [isSubmitting, setIsSubmitting] = useState<Boolean>(false);
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formData.agreeToTerms) {
            toast.error('Please agree to the terms and conditions');
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch(`${BASE_URL}/feedbackform`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    comments: formData.comments
                })
            });

            const data = await response.json();

            if (data.success) {
                toast.success('Message sent successfully!');
                // Reset form
                setFormData({
                    name: '',
                    email: '',
                    comments: '',
                    agreeToTerms: false
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

    const inputVariants = {
        focus: { scale: 1.02 },
        blur: { scale: 1 }
    };
    const slides = [
        carousal1,
        carousal2,
        service6,
    ];
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 3000);

        return () => clearInterval(timer);
    }, []);
    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };
    const copyNumber = () => {
        navigator.clipboard.writeText("1-346-202-1929");
        toast.success("Phone Number Copied")
    }

    return (
        <section className="py-24">
            <Toaster />
            <SocialIcons />
            <motion.div
                className="w-full mx-auto mb-16 relative h-[80vh] rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <div
                    className="flex transition-transform duration-500 ease-out h-full -z-10"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    {
                        slides.map((slide, index) => (
                            <div
                                key={index}
                                className="w-full h-full flex-shrink-0 relative"
                            >
                                <img
                                    src={slide}
                                    alt={`Slide ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/20"></div>
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                                    <h2 className="text-4xl font-bold mb-4 text-center">
                                        We Provide International Air Cargo Services
                                    </h2>
                                    <p className="text-xl text-center">
                                        We provide timely pick up of shipments from the doorstep of customers
                                    </p>
                                    <ShimmerButton onClick={copyNumber} className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                                        Call us Now
                                    </ShimmerButton>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {
                        slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 rounded-full transition-colors duration-300 ${currentSlide === index ? 'bg-white' : 'bg-white/50'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))
                    }
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="w-full mx-auto mt-20 mb-16"
            >
                <div className="flex flex-col items-center gap-6">
                    <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-6">
                        Welcome to U.S. Handle Worldwide Trade, LLC.
                    </h2>
                    <div className="flex flex-col md:flex-row w-full gap-10">
                        <motion.img
                            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80"
                            alt="Logistics Operations"
                            className="rounded-lg shadow-xl w-full md:w-1/2 h-[400px] flex items-center my-auto justify-center object-cover"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        />
                        <div className="md:w-1/2">
                            <div className="space-y-4 text-gray-600 text-center leading-relaxed">
                                <p>
                                    Founded on July 1, 2018, U.S. Handle Worldwide Trade, LLC is a woman-owned business driven by a vision of growth,
                                    innovation, and excellence. Located in Houston, TX—a global trade hub—we specialize in providing seamless and
                                    comprehensive logistics solutions designed to meet the demands of today's fast-paced and competitive marketplace.
                                </p>
                                <p>
                                    In an ever-changing world, partnering with a knowledgeable and reliable logistics provider is essential. At U.S.
                                    Handle Worldwide Trade, we pride ourselves on our industry expertise and commitment to offering tailored,
                                    cost-effective solutions. We offer a wide range of services, including air, ocean, ground, railroad, truck,
                                    and value-added logistics, as well as warehousing and project cargo handling.
                                </p>
                                <p>
                                    Our team of experienced professionals works alongside trusted service providers to ensure your supply chain operates
                                    smoothly, from the initial stages to final delivery. We invest in state-of-the-art technology, optimized processes,
                                    and the development of our people to provide the highest quality service possible.
                                </p>
                                <p>
                                    Join us in building a long-term partnership where reliability, flexibility, and innovation come together to drive success
                                    in your global logistics needs.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
            {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="w-full mx-auto mt-20 mb-16"
            >
                <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
                    Our Experience
                </h2>
                <div className="flex flex-col md:flex-row justify-center gap-8">
                    {
                        experiences.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                whileHover={{ scale: 1.05 }}
                                className="bg-white rounded-xl shadow-lg overflow-hidden max-w-sm w-full"
                            >
                                <motion.img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-48 object-cover"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.3 }}
                                />
                                <div className="p-6">
                                    <div className="flex items-center gap-4 mb-4">
                                        <item.icon className="w-8 h-8 text-blue-600" />
                                        <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                                </div>
                            </motion.div>
                        ))
                    }
                </div>
            </motion.div> */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="max-w-7xl mx-auto mt-20 mb-16"
            >
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <AnimatedSection className="lg:w-1/2">
                        <motion.img
                            src={ceoimage}
                            alt="CEO Portrait"
                            className="rounded-lg shadow-xl w-full h-[500px] object-cover"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        />
                    </AnimatedSection>
                    <AnimatedSection className="lg:w-1/2">
                        <h2 className="text-3xl lg:text-4xl text-center font-bold text-gray-900 mb-6">
                            Message from the CEO
                        </h2>
                        <div className="space-y-4 text-gray-600 leading-relaxed">
                            <motion.p
                                className="font-medium text-center text-lg max-w-56 rounded-2xl mx-auto shadow-lg text-black dark:text-white"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                Karla Regina Baeza
                            </motion.p>
                            <motion.div
                                className="flex items-center justify-center gap-2 mt-6"
                                whileHover={{ scale: 1.05 }}
                            >
                                <Mail className="w-5 h-5 text-blue-600" />
                                <a href="mailto:krbaeza@ushwt.com" className="text-blue-600 hover:text-blue-700 font-medium">
                                    krbaeza@ushwt.com
                                </a>
                            </motion.div>
                            <p className="text-center">
                                As the founder and CEO, I bring over 25 years of experience in International Trade, and I'm passionate
                                about helping businesses navigate the complexities of the global marketplace. Since launching my company
                                in 2018, we’ve focused on delivering innovative, reliable, and cost-effective logistics solutions that
                                empower our clients to grow and succeed.
                            </p>
                            <p className="text-center">
                                We understand that every business is unique, which is why we offer personalized services designed to meet
                                your specific needs. Whether you're managing complex project cargo, expanding into new markets, or streamlining
                                your supply chain, we're here to support your success every step of the way.
                            </p>
                            <p className="text-center">
                                Our team is committed to excellence, constantly investing in technology, processes, and training to ensure that
                                we deliver the best results. I look forward to working with you and helping your business achieve its goals.
                            </p>
                            <p className='text-center'>
                                Thank you for choosing U.S. Handle Worldwide Trade.
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="max-w-7xl mx-auto mt-12 mb-16"
            >
                <iframe className="w-full rounded-2xl" height={600} src="https://www.youtube.com/embed/275HREEbiLg?si=0mqeu5PbPjWuatBx" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="max-w-7xl mx-auto mt-20 mb-16"
            >
                <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
                    Our Services
                </h2>
                <div className="">
                    <div className="flex justify-between items-center gap-8">
                        <div className="flex-1 overflow-hidden">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                                    initial={{ x: 1000 }}
                                    animate={{ x: -currentIndex * 33.33 + '%' }}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                >
                                    {
                                        services.map((service, index) => (
                                            <motion.div
                                                key={index}
                                                className="w-full bg-white rounded-xl shadow-lg overflow-hidden"
                                                whileHover={{ y: -10 }}
                                            >
                                                <motion.img
                                                    src={service.image}
                                                    alt={service.title}
                                                    className="w-full h-48 object-cover"
                                                    whileHover={{ scale: 1.1 }}
                                                    transition={{ duration: 0.3 }}
                                                />
                                                <div className="p-6">
                                                    <h3 className="text-lg text-center font-semibold text-gray-900 mb-3">
                                                        {service.title}
                                                    </h3>
                                                    <p className="text-gray-600 text-center mb-4">
                                                        {service.description}
                                                    </p>
                                                    {/* <motion.button
                                                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                                                        whileHover={{ x: 10 }}
                                                    >
                                                        Read More
                                                        <ChevronRight className="w-4 h-4" />
                                                    </motion.button> */}
                                                </div>
                                            </motion.div>
                                        ))
                                    }
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="max-w-7xl mx-auto mt-20 mb-16"
            >
                <div className="flex flex-col lg:flex-row gap-10 w-full justify-around">
                    <div className="flex flex-col gap-4 w-full lg:w-1/3">
                        <Badge className="w-12">FAQ</Badge>
                        <h1 className="font-medium text-4xl">What would you like to know about U.S Handle Worldwide Trade LLC?</h1>
                        <Link to="mailto:thecoderzofficial@gmail.com">
                            <Button className="flex gap-2"><MessageCircle /> Talk to us</Button>
                        </Link>
                    </div>
                    <div className="w-full lg:w-2/3">
                        <Accordion type="multiple" className="gap-3 rounded-lg flex flex-col">
                            {faqData.map((faq) => (
                                <AccordionItem key={faq.id} value={faq.id} className="rounded-lg">
                                    <AccordionTrigger className="text-left px-6">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="px-6">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="max-w-3xl mx-auto mt-20 mb-16"
            >
                <AnimatedSection>
                    <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
                        Rate Your Experience
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                Name
                            </label>
                            <motion.input
                                type="text"
                                id="name"
                                required
                                variants={inputVariants}
                                whileFocus="focus"
                                animate="blur"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Email
                            </label>
                            <motion.input
                                type="email"
                                id="email"
                                required
                                variants={inputVariants}
                                whileFocus="focus"
                                animate="blur"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                        <div>
                            <label htmlFor="comments" className="block text-sm font-medium text-gray-700 mb-1">
                                Additional Comments
                            </label>
                            <motion.textarea
                                id="comments"
                                rows={4}
                                variants={inputVariants}
                                whileFocus="focus"
                                animate="blur"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                value={formData.comments}
                                onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                id="terms"
                                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                checked={formData.agreeToTerms}
                                onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
                            />
                            <label htmlFor="terms" className="text-sm text-gray-600">
                                I agree to terms and conditions
                            </label>
                        </div>
                        <ShimmerButton
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                        >
                            {
                                isSubmitting ? "Submitting Feedback" : "Submit Feedback"
                            }
                        </ShimmerButton>
                    </form>
                </AnimatedSection>
            </motion.div>
        </section>
    )
}

export default HomePage;