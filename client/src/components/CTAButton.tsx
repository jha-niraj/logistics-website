
import React from "react";

interface CTAButtonProps {
  text: string;
  onClick: () => void;
}

const CTAButton: React.FC<CTAButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="cta-button mt-8 px-8 py-3 bg-white/10 backdrop-blur-md border border-white/30 rounded-md 
                 text-white font-medium tracking-wide transition-all duration-300 hover:bg-white/20
                 transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none"
    >
      {text}
    </button>
  );
};

export default CTAButton;
