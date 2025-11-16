import { experiences } from "../../../utils/data/experience";
import { BsPersonWorkspace } from "react-icons/bs";
import experience from '../../../assets/lottie/code.json';
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";
import HoverOnCards from "../../helper/HoverOnCards";

function Experience() {
  return (
    <div id="experience" className="relative z-50 border-t max-sm:mx-2 mx-12 my-12 lg:my-24 border-[#25213b]">
      
      <img
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      {/* Section Heading */}
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] text-white p-2 px-5 text-xl rounded-md">
            Experiences
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {/* Main Section */}
      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          
          {/* Lottie */}
          <div className="flex justify-center items-start">
            <div className="w-full h-full">
              <AnimationLottie animationPath={experience} />
            </div>
          </div>

          {/* Cards */}
          <div className="flex flex-col gap-6">
            {experiences.map((exp) => (
              <HoverOnCards key={exp.id} color="rgba(0,200,255,0.7)">
                <GlowCard identifier={`experience-${exp.id}`}>
                  <div className="relative p-4 overflow-hidden rounded-xl">

                    <img
                      src="/blur-23.svg"
                      alt="blur"
                      className="absolute bottom-0 left-0 w-full opacity-80 pointer-events-none"
                    />

                    <div className="flex justify-center mb-2">
                      <p className="text-xs sm:text-sm text-[#16f2b3]">
                        {exp.duration}
                      </p>
                    </div>

                    <div className="flex items-center gap-x-6">
                      <div className="text-violet-500 transition-all duration-300 hover:scale-125">
                        <BsPersonWorkspace size={36} />
                      </div>

                      <div>
                        <p className="text-base sm:text-xl mb-1 font-medium uppercase">
                          {exp.title}
                        </p>
                        <p className="text-sm sm:text-base">{exp.company}</p>
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

export default Experience;
