import React, { useEffect, useState } from "react";
import BackgroundVideo from "./BackgroundVideo";
import TextCarousel from "./TextCarousel";

const slides = [
  {
    heading: "We Provide International Air Cargo Services",
    subtext:
      "We provide timely pick up of shipments from the doorstep of customers.",
  },
  {
    heading: "We Provide International Air Cargo Services",
    subtext:
      "We provide timely pick up of shipments from the doorstep of customers.",
  },
  {
    heading: "We Provide International Air Cargo Services",
    subtext:
      "We provide timely pick up of shipments from the doorstep of customers.",
  },
  {
    heading: "We Provide International Air Cargo Services",
    subtext:
      "We provide timely pick up of shipments from the doorstep of customers.",
  },
];

// Two video URLs
const videoUrls = [
  "https://videos.pexels.com/video-files/30899351/13210449_2560_1440_60fps.mp4",
  "https://videos.pexels.com/video-files/30899480/13210349_2560_1440_60fps.mp4"
];

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  // State to track which video is currently showing (0 or 1)
  const [currentVideo, setCurrentVideo] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      const nextSlide = (currentSlide + 1) % slides.length;
      setCurrentSlide(nextSlide);
      
      // Change video every two slides (you can adjust this logic)
      if (nextSlide % 2 === 0) {
        setCurrentVideo((prevVideo) => (prevVideo + 1) % videoUrls.length);
      }
    }, 5000); // Slide changes every 5 seconds

    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black rounded-xl">
      <BackgroundVideo videoSrc={videoUrls[currentVideo]} />
      <TextCarousel slides={slides} currentSlide={currentSlide} />
    </section>
  );
};

export default HeroSection;