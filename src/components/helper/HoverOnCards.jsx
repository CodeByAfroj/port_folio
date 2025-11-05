import React, { useState } from "react";

const HoverOnCards = ({ children, className = "" ,color=""}) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const reset = () => {
    setHovering(false);
    setPos({ x: 0, y: 0 });
  };

  return (
    <div
      onMouseMove={handleMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={reset}
      className={`relative p-[1px] rounded-xl transition-all duration-400 ${className}`}
      style={{
        background: hovering
          ? `radial-gradient( 400px circle at ${pos.x}px ${pos.y}px, ${color || 'rgba(0,200,255,.7)'}, transparent 80%)`
          : "transparent",
      }}
    >
      <div className=" rounded-xl   shadow-lg">
        {children}
      </div>
    </div>
  );
};

export default HoverOnCards;
