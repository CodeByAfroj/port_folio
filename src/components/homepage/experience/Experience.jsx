import { experiences } from "../../../utils/data/experience";
import { BsPersonWorkspace } from "react-icons/bs";
import experience from '../../../assets/lottie/code.json';
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";
import HoverOnCards from "../../helper/HoverOnCards";

function Experience() {
  return (
    <section id="experience" className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">

      {/* Background */}
      <div className="absolute top-0 left-0 w-48 sm:w-72 h-48 sm:h-72 bg-cyan-400/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-48 sm:w-72 h-48 sm:h-72 bg-violet-500/20 blur-3xl rounded-full"></div>

      {/* Title */}
      <div className="flex justify-center mb-12 sm:mb-16 px-4">
        <div className="flex items-center w-full max-w-xl">
          <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-40"></div>
          <span className="mx-3 sm:mx-4 text-white text-xl sm:text-2xl lg:text-3xl font-semibold">
            Experience
          </span>
          <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-40"></div>
        </div>
      </div>

      {/* Layout */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

        {/* LEFT - Timeline */}


         <div className="flex justify-center lg:justify-end mt-6 lg:mt-0">

          {/* ✅ controlled size */}
          <div className="w-[200px] sm:w-[260px] md:w-[300px] lg:w-[80%] 
                          hover:scale-105 transition duration-500">
            <AnimationLottie animationPath={experience} />
          </div>

        </div>

        <div className="relative">

          {/* ✅ Hide line on small screens */}
          <div className="hidden sm:block absolute left-4 top-0 w-[2px] h-full 
                          bg-gradient-to-b from-transparent via-cyan-400 to-transparent opacity-40">
          </div>

          <div className="flex flex-col gap-8 sm:gap-10 lg:gap-12">

            {experiences.map((exp) => (
              <div key={exp.id} className="relative flex items-start gap-4 sm:gap-6 group">

                {/* Node */}
                <div className="relative z-10 shrink-0">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-cyan-400 
                                  flex items-center justify-center 
                                  shadow-[0_0_15px_#22d3ee] sm:shadow-[0_0_20px_#22d3ee]
                                  group-hover:scale-110 transition">
                    <BsPersonWorkspace className="text-black text-sm sm:text-base" />
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 min-w-0">
                  <HoverOnCards color="rgba(0,200,255,0.7)">
                    <GlowCard identifier={`experience-${exp.id}`}>

                      <div className="p-4 sm:p-5 transition duration-300 hover:-translate-y-1">

                        {/* Duration */}
                        <span className="text-[10px] sm:text-xs px-2 sm:px-3 py-1 rounded-full 
                                         bg-cyan-400/10 text-cyan-400 
                                         border border-cyan-400/20">
                          {exp.duration}
                        </span>

                        {/* Content */}
                        <div className="mt-2 sm:mt-3">
                          <p className="text-sm sm:text-lg font-semibold text-white uppercase leading-snug">
                            {exp.title}
                          </p>
                          <p className="text-xs sm:text-sm text-gray-400 mt-1">
                            {exp.company}
                          </p>
                        </div>

                      </div>

                    </GlowCard>
                  </HoverOnCards>
                </div>

              </div>
            ))}

          </div>
        </div>

        {/* RIGHT - Animation */}
       
      </div>
    </section>
  );
}

export default Experience;