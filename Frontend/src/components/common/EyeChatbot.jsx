import React, { useEffect, useRef, useState } from "react";

const EyeChatbot = () => {
  const eyeRef = useRef(null);
  const pupilRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    if (!eyeRef.current || !pupilRef.current) return;

    const eye = eyeRef.current.getBoundingClientRect();
    const pupil = pupilRef.current;

    // center of eye
    const eyeCenterX = eye.left + eye.width / 2;
    const eyeCenterY = eye.top + eye.height / 2;

    // vector from eye center to cursor
    const dx = position.x - eyeCenterX;
    const dy = position.y - eyeCenterY;

    // distance limit for pupil movement
    const maxDistance = eye.width / 4;

    // calculate angle and distance
    const angle = Math.atan2(dy, dx);
    const distance = Math.min(maxDistance, Math.hypot(dx, dy));

    // set pupil position
    const pupilX = distance * Math.cos(angle);
    const pupilY = distance * Math.sin(angle);

    pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
  }, [position]);

  return (
    <div className="fixed bottom-8 right-8 flex items-center justify-center z-50">
      <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center shadow-lg border-2 border-purple-500 relative">
        {/* Eye */}
        <div
          ref={eyeRef}
          className="w-10 h-10 bg-white rounded-full flex items-center justify-center relative"
        >
          {/* Pupil */}
          <div
            ref={pupilRef}
            className="w-4 h-4 bg-black rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-50"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default EyeChatbot;
