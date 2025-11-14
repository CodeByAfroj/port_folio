import React from 'react'
import LogoLoop from '../../helper/LogoLoop';
import {
  SiPostman,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiRedux,
  SiTypescript,
} from "react-icons/si";
const Skills = () => {

    const techLogos = [
  { node: <SiPostman />, title: "Postman", href: "https://www.postman.com", color: "#FF6C37" },
  { node: <SiExpress />, title: "Express.js", href: "https://expressjs.com", color: "#FFFFFF" },
  { node: <SiReact />, title: "React", href: "https://react.dev", color: "#61DAFB" },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org", color: "#8CC84B" },
  { node: <SiHtml5 />, title: "HTML5", href: "https://developer.mozilla.org/en-US/docs/Web/HTML", color: "#E34F26" },
  { node: <SiCss3 />, title: "CSS3", href: "https://developer.mozilla.org/en-US/docs/Web/CSS", color: "#1572B6" },
  { node: <SiJavascript />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", color: "#F7DF1E" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com", color: "#38BDF8" },
  { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com", color: "#00ED64" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org", color: "#3178C6" },
  { node: <SiRedux />, title: "Redux", href: "https://redux.js.org", color: "#764ABC" },
];

  return (
    <>
    <div id='skills' className=" relative w-full mt-20">
      <div className="sticky top-10">
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-50 translate-x-1/2 filter blur-3xl  opacity-30"></div>
        <div className="flex items-center justify-center relative">
          <span className="bg-[#251e50] absolute   w-fit text-white px-5 py-3 text-xl rounded-md">
            SKILLS
          </span>
          <span className="w-full h-[2px] bg-[#231e43]"></span>
        </div>
      </div>
              <div className="w-full max-w-6xl mt-18 h-[120px]">
                <LogoLoop
                  logos={techLogos}
                  speed={100}
                  direction="left"
                  logoHeight={60}
                  gap={50}
                  pauseOnHover
                  scaleOnHover
                  fadeOut
                  fadeOutColor="#ffffff"
                />

              </div>
    </div>
    
    
    </>
  )
}

export default Skills



