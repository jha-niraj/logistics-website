import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import carousalImage1 from "./Images/carousalImage1.png";
import carousalImage2 from "./Images/carousalImage2.png";
import carousalImage3 from "./Images/carousalImage3.png";
import { useEffect, useState } from "react";

const HomePage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Sample images - replace with your actual image URLs
    const slides = [
        carousalImage1,
        carousalImage2,
        carousalImage3
    ];

    // Auto-slide effect
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 3000);

        return () => clearInterval(timer);
    }, []);

    // Manual navigation
    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    return (
        <section>
            <section>
                <div className="relative w-full h-[80vh] overflow-hidden">
                    {/* Images */}
                    <div
                        className="flex transition-transform duration-500 ease-out h-full"
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className="w-full h-full flex-shrink-0 relative"
                            >
                                <img
                                    src={slide}
                                    alt={`Slide ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                                {/* Optional overlay to ensure text visibility */}
                                <div className="absolute inset-0 bg-black/20"></div>

                                {/* Text content */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                                    <h2 className="text-4xl font-bold mb-4">
                                        We Provide International Air Cargo Services
                                    </h2>
                                    <p className="text-xl">
                                        We provide timely pick up of shipments from the doorstep of customers
                                    </p>
                                    <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                                        CALL US NOW
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation dots */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 rounded-full transition-colors duration-300 ${currentSlide === index ? 'bg-white' : 'bg-white/50'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>

                    {/* Optional: Previous/Next buttons */}
                    <button
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/30 hover:bg-white/50 transition-colors"
                        onClick={() => goToSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1)}
                    >
                        <span className="sr-only">Previous</span>
                        ←
                    </button>
                    <button
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/30 hover:bg-white/50 transition-colors"
                        onClick={() => goToSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1)}
                    >
                        <span className="sr-only">Next</span>
                        →
                    </button>
                </div>
            </section>
            <section>
                {/* About Us */}
            </section>
            <section>
                {/* Our Experience */}
            </section>
            <section>
                {/* From the Desk of CEO */}
            </section>
            <section>
                {/* Features and Services */}
            </section>
            <section>
                {/* Faq's */}
            </section>
            <section>
                {/* Rate your Experience */}
            </section>
        </section>
    )
}

export default HomePage;