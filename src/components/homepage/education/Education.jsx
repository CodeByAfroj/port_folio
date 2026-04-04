// @flow strict

import { educations } from "../../../utils/data/educations";
import { BsPersonWorkspace } from "react-icons/bs";
import lottieFile from '../../../assets/lottie/study.json';
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";
import HoverOnCards from "../../helper/HoverOnCards";

function Education() {
  return (
    <div
      id="education"
      className="relative z-50 border-t my-16 lg:my-24 border-[#25213b] overflow-hidden"
    >

      {/* ✅ optimized background */}
      <img
        src="/section.svg"
        alt="section"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] max-w-full opacity-40 -z-10 pointer-events-none"
      />

      {/* TOP LINE */}
      <div className="flex justify-center">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-[#16f2b3] to-transparent w-full opacity-40" />
        </div>
      </div>

      {/* TITLE */}
      <div className="flex justify-center my-16 px-6">
        <div className="flex items-center w-full max-w-xl">
          <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-[#16f2b3] to-transparent opacity-40"></div>
          <span className="mx-4 text-white text-2xl md:text-3xl font-semibold tracking-wide">
            Education
          </span>
          <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-[#16f2b3] to-transparent opacity-40"></div>
        </div>
      </div>

      {/* ✅ CONTAINER (BIG FIX) */}
      <div className="max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* LEFT */}
          <div className="flex justify-center lg:justify-start">

            {/* ✅ controlled lottie size */}
            <div className="w-[220px] sm:w-[260px] md:w-[300px] lg:w-[340px] transition duration-500 hover:scale-105">
              <AnimationLottie animationPath={lottieFile} />
            </div>

          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-6">

            {educations.map((education) => (
              <HoverOnCards
                key={education.id}
                color="rgba(255,0,150,0.8)"
              >
                <GlowCard identifier={`education-${education.id}`}>

                  {/* blur */}
                  <img
                    src="/blur-23.svg"
                    alt="blur"
                    className="absolute bottom-0 opacity-60 w-full pointer-events-none"
                  />

                  <div className="transition duration-300 hover:-translate-y-1 w-full max-w-xl mx-auto">

  {/* duration + percentage */}
  <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-4">
    <span className="text-[10px] sm:text-xs px-2 sm:px-3 py-1 rounded-full 
                     bg-emerald-400/10 text-emerald-400 
                     border border-emerald-400/20">
      {education.duration}
    </span>

    <span className="text-[10px] sm:text-xs px-2 sm:px-3 py-1 rounded-full 
                     bg-emerald-400/10 text-emerald-400 
                     border border-emerald-400/20">
      {education.percentage}
    </span>
  </div>

  {/* content */}
  <div className="flex items-center gap-3 sm:gap-5 px-4 py-5 sm:py-6">

    {/* icon */}
    <div className="text-violet-400 transition duration-300 hover:scale-110 shrink-0">
      <BsPersonWorkspace className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9" />
    </div>

    {/* text */}
    <div className="min-w-0">
      <p className="text-sm sm:text-base md:text-lg font-semibold text-white uppercase tracking-wide">
        {education.title}
      </p>
      <p className="text-[11px] sm:text-sm text-gray-400 mt-1 truncate">
        {education.institution}
      </p>
    </div>

  </div>

</div>
                </GlowCard>
              </HoverOnCards>
            ))}

          </div>

        </div>
      </div>
    </div>
  );
}

export default Education;