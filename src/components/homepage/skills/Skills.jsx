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
  <div id="skills" className="relative w-full mt-20">

  {/* Top Gradient Line */}
  <div className="flex justify-center -translate-y-[1px]">
    <div className="w-3/4">
      <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
    </div>
  </div>

  {/* Section Title */}
  <div className="flex justify-center my-10 lg:py-8">
    <div className="flex items-center gap-3">
      <span className="w-24 h-[2px] bg-[#1a1443]"></span>

      <span className="bg-[#1a1443] text-white py-2 px-5 text-xl rounded-md">
        Skills
      </span>

      <span className="w-24 h-[2px] bg-[#1a1443]"></span>
    </div>
  </div>

  {/* Logo Loop */}
  <div className="w-full max-w-6xl mx-auto mt-16">
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



