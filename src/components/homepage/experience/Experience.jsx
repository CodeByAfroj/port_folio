import { experiences } from "../../../utils/data/experience";
import { BsPersonWorkspace } from "react-icons/bs";
import experience from '../../../assets/lottie/code.json';
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";
import HoverOnCards from "../../helper/HoverOnCards";

function Experience() {
  return (
    <section id="experience" className="relative py-24 overflow-hidden">

      {/* 🔥 Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-400/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-violet-500/20 blur-3xl rounded-full"></div>

      {/* Title */}
      <div className="flex justify-center mb-20 px-6">
        <div className="flex items-center w-full max-w-xl">
          <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-40"></div>
          <span className="mx-4 text-white text-3xl font-semibold">
            Experience
          </span>
          <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-40"></div>
        </div>
      </div>

      {/* Layout */}
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT - Timeline */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-4 top-0 w-[2px] h-full 
                          bg-gradient-to-b from-transparent via-cyan-400 to-transparent opacity-40">
          </div>

          <div className="flex flex-col gap-12">

            {experiences.map((exp) => (
              <div key={exp.id} className="relative flex items-start gap-6 group">

                {/* Node */}
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-full bg-cyan-400 
                                  flex items-center justify-center 
                                  shadow-[0_0_20px_#22d3ee]
                                  group-hover:scale-110 transition">
                    <BsPersonWorkspace className="text-black" />
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1">
                  <HoverOnCards color="rgba(0,200,255,0.7)">
                    <GlowCard identifier={`experience-${exp.id}`}>

                      <div className="p-5 transition duration-300 hover:-translate-y-1">

                        {/* Duration Tag */}
                        <span className="text-xs px-3 py-1 rounded-full 
                                         bg-cyan-400/10 text-cyan-400 
                                         border border-cyan-400/20">
                          {exp.duration}
                        </span>

                        {/* Content */}
                        <div className="mt-3">
                          <p className="text-lg font-semibold text-white uppercase">
                            {exp.title}
                          </p>
                          <p className="text-gray-400 text-sm mt-1">
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
        <div className="flex justify-center">
          <div className="w-[80%] hover:scale-105 transition duration-500">
            <AnimationLottie animationPath={experience} />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Experience;