"use client";

import { useEffect, useState } from "react";

const GlowCard = ({ children, identifier }) => {


  useEffect(() => {
    const CONTAINER = document.querySelector(`.glow-container-${identifier}`);
    const CARDS = document.querySelectorAll(`.glow-card-${identifier}`);

    const CONFIG = {
      proximity: 40,
      spread: 80,
      blur: 12,
      gap: 32,
      vertical: false,
      opacity: 0,
    };

    const UPDATE = (event) => {
      for (const CARD of CARDS) {
        const RECT = CARD.getBoundingClientRect();
        const ACTIVE =
          event?.x > RECT.left - CONFIG.proximity &&
          event?.x < RECT.right + CONFIG.proximity &&
          event?.y > RECT.top - CONFIG.proximity &&
          event?.y < RECT.bottom + CONFIG.proximity;

        CARD.style.setProperty("--active", ACTIVE ? 1 : CONFIG.opacity);
      }
    };

    document.body.addEventListener("pointermove", UPDATE);

    return () => {
      document.body.removeEventListener("pointermove", UPDATE);
    };
  }, [identifier]);

  return (
    <div className={`glow-container-${identifier} flex justify-center`}>
  
        <div
    
      className="relative w-full p-[2px] rounded-xl transition-all duration-300"
    
    >
       <article
      
        className={`glow-card  glow-card-${identifier} relative rounded-xl p-4 bg-[#101123] text-gray-200 cursor-pointer transition-all border border-[#2a2e5a] hover:border-transparent`}
      >
        {/* Content */}
        <div className="relative z-10">{children}</div>
      </article>
    </div>
    </div>
  );
};

export default GlowCard;
