import React, { useRef, useEffect } from "react";

interface BackgroundVideoProps {
  videoSrc: string;
}

const BackgroundVideo: React.FC<BackgroundVideoProps> = ({ videoSrc }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(error => {
        console.warn("Auto-play was prevented:", error);
      });
    }
  }, [videoSrc]);

  return (
    <div className="absolute inset-0 w-full h-full z-0">
      <video
        ref={videoRef}
        className="absolute object-cover w-full h-full"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </div>
  );
};

export default BackgroundVideo;