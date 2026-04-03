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
      className="relative z-50 border-t my-16 lg:my-24 border-[#25213b]"
    >
      {/* Background */}
      <img
        src="/section.svg"
        alt="section"
        width={1572}
        height={795}
        className="absolute top-0 -z-10 opacity-40"
      />

      {/* Top Gradient Line */}
      <div className="flex justify-center">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-[#16f2b3] to-transparent w-full opacity-40" />
        </div>
      </div>

      {/* 🔥 Improved Title */}
      <div className="flex justify-center my-16 px-6">
        <div className="flex items-center w-full max-w-xl">

          <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-[#16f2b3] to-transparent opacity-40"></div>

          <span className="mx-4 text-white text-2xl md:text-3xl font-semibold tracking-wide">
            Education
          </span>

          <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-[#16f2b3] to-transparent opacity-40"></div>

        </div>
      </div>

      {/* Content */}
      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

          {/* Left Animation */}
          <div className="flex justify-center items-start">
            <div className="w-3/4 h-3/4 transition duration-500 hover:scale-105">
              <AnimationLottie animationPath={lottieFile} />
            </div>
          </div>

          {/* Right Cards */}
          <div>
            <div className="flex flex-col gap-6">

              {educations.map((education) => (
                <HoverOnCards
                  key={education.id}
                  color="rgba(255,0,150,0.8)"
                >
                  <GlowCard identifier={`education-${education.id}`}>

                    {/* Blur Background */}
                    <img
                      src="/blur-23.svg"
                      alt="blur"
                      width={1080}
                      height={200}
                      className="absolute bottom-0 opacity-70"
                    />

                    {/* Card Content */}
                    <div className="transition duration-300 hover:-translate-y-1">

                      {/* Duration Tag */}
                      <div className="flex justify-center mt-4">
                        <span className="text-xs px-3 py-1 rounded-full 
                                         bg-[#16f2b3]/10 text-[#16f2b3] 
                                         border border-[#16f2b3]/20">
                          {education.duration}
                        </span>
                      </div>

                      {/* Main Info */}
                      <div className="flex items-center gap-6 px-4 py-6">

                        {/* Icon */}
                        <div className="text-violet-400 transition duration-300 hover:scale-110">
                          <BsPersonWorkspace size={34} />
                        </div>

                        {/* Text */}
                        <div>
                          <p className="text-lg font-semibold text-white uppercase tracking-wide">
                            {education.title}
                          </p>
                          <p className="text-sm text-gray-400 mt-1">
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
    </div>
  );
}

export default Education;