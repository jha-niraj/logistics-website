import React, { useState, useEffect } from "react";
import CTAButton from "./CTAButton";
// import { ChevronLeft, ChevronRight } from "lucide-react";
import toast from "react-hot-toast";


interface Slide {
  heading: string;
  subtext: string;
}

interface TextCarouselProps {
  slides: Slide[];
  currentSlide: number;
}

const TextCarousel: React.FC<TextCarouselProps> = ({ slides, currentSlide }) => {
  const [animationState, setAnimationState] = useState<
    "entering" | "active" | "exiting"
  >("active");
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [localSlide, setLocalSlide] = useState(currentSlide);

  // Sync local state with prop when it changes
  useEffect(() => {
    if (localSlide !== currentSlide) {
      setDirection("right");
      setAnimationState("exiting");
      setTimeout(() => {
        setLocalSlide(currentSlide);
        setAnimationState("entering");
        setTimeout(() => {
          setAnimationState("active");
        }, 700);
      }, 500);
    }
  }, [currentSlide, localSlide]);

  // const handlePrevious = () => {
  //   if (animationState === "active") {
  //     setDirection("left");
  //     setAnimationState("exiting");
  //     setTimeout(() => {
  //       const newSlide = localSlide === 0 ? slides.length - 1 : localSlide - 1;
  //       setLocalSlide(newSlide);
  //       setAnimationState("entering");
  //       setTimeout(() => {
  //         setAnimationState("active");
  //       }, 700);
  //     }, 500);
  //   }
  // };

  // const handleNext = () => {
  //   if (animationState === "active") {
  //     setDirection("right");
  //     setAnimationState("exiting");
  //     setTimeout(() => {
  //       const newSlide = localSlide === slides.length - 1 ? 0 : localSlide + 1;
  //       setLocalSlide(newSlide);
  //       setAnimationState("entering");
  //       setTimeout(() => {
  //         setAnimationState("active");
  //       }, 700);
  //     }, 500);
  //   }
  // };
  const copyNumber = () => {
    navigator.clipboard.writeText("1-346-202-1929");
    toast.success("Phone number copied!")
  }

  const getAnimationClasses = () => {
    if (animationState === "entering") {
      return direction === "right"
        ? "animate-slide-in-right"
        : "animate-slide-in-left";
    }
    if (animationState === "exiting") {
      return direction === "right"
        ? "animate-slide-out-left"
        : "animate-slide-out-right";
    }
    return "opacity-100";
  };

  return (
    <div className="relative z-10 flex flex-col justify-center items-center h-full w-full px-6 sm:px-12 max-w-6xl mx-auto">
      <div
        className={`text-center transition-all duration-500 ${getAnimationClasses()}`}
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white uppercase tracking-tight leading-tight mb-6 text-shadow">
          {slides[localSlide].heading}
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-6 text-shadow">
          {slides[localSlide].subtext}
        </p>
        <CTAButton text="Call Us" onClick={(copyNumber)} />
      </div>

      <div className="absolute bottom-12 left-0 right-0 flex justify-center space-x-8 z-20">
        {/* <button
          onClick={handlePrevious}
          className="nav-button p-3 rounded-full bg-black/30 backdrop-blur-md text-white hover:bg-black/40 focus:outline-none"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={handleNext}
          className="nav-button p-3 rounded-full bg-black/30 backdrop-blur-md text-white hover:bg-black/40 focus:outline-none"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button> */}
      </div>
    </div>
  );
};

export default TextCarousel;