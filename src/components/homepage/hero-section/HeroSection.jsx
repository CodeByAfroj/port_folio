// // @flow strict

// import { personalData } from "../../../utils/data/personal-data";
// import { HashLink as Link } from "react-router-hash-link";
// import { BsGithub, BsLinkedin } from "react-icons/bs";
// import { FaTwitterSquare } from "react-icons/fa";
// import { MdDownload } from "react-icons/md";
// import { RiContactsFill } from "react-icons/ri";
// import { SiLeetcode } from "react-icons/si";
// import HoverOnCards from "../../helper/HoverOnCards";
// import { FaXTwitter } from "react-icons/fa6";
// import { useEffect, useState } from "react";
// function HeroSection() {
//   const smoothScroll = () => {
//     const element = document.querySelector("#contact");
//     element?.scrollIntoView({ behavior: "smooth" });
//   };
//   const [activeLine, setActiveLine] = useState(0);
//   useEffect(() => {
//   const interval = setInterval(() => {
//     setActiveLine((prev) => (prev + 1) % 6);
//   }, 1000);

//   return () => clearInterval(interval);
// }, []);

//   return (
//     <section className="relative  mt-15 flex flex-col items-center justify-between py-4 lg:py-12">
//       <img
//         src="/hero.svg"
//         alt="Hero"
//         width={1572}
//         height={795}
//         className="absolute -top-[98px] -z-10"
//       />

//       <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
//         <div className="order-2 lg:order-2 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
//           <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
//             Hello, <br />
//             This is{" "}
//             <span className=" text-violet-500">{personalData.name}</span>
//             {` , I'm a Professional `}
//             <span className=" text-[#16f2b3]">{personalData.designation}</span>.
//           </h1>

//           {/* SOCIAL ICONS */}
//           <div className="my-12 flex items-center gap-5">
//             <a
//               href={personalData.github}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="transition-all text-pink-500 hover:scale-125 duration-300"
//             >
//               <BsGithub size={30} />
//             </a>

//             <a
//               href={personalData.linkedIn}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="transition-all text-pink-500 hover:scale-125 duration-300"
//             >
//               <BsLinkedin size={30} />
//             </a>

//             <a
//               href={personalData.leetcode}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="transition-all text-pink-500 hover:scale-125 duration-300"
//             >
//               <SiLeetcode size={30} />
//             </a>

//             <a
//               href={personalData.twitter}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="transition-all text-pink-500 hover:scale-125 duration-300"
//             >
//               <FaXTwitter size={30} />
//             </a>
//           </div>

//           {/* CONTACT + RESUME BUTTONS */}
//           <div className="flex items-center gap-3">
//             <div className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600">
//               <button
//                 onClick={smoothScroll}
//                 to={"#contact"}
//                 className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out md:font-semibold flex items-center gap-1 hover:gap-3"
//               >
//                 <span>Contact me</span>
//                 <RiContactsFill size={16} />
//               </button>
//             </div>

//             <a
//               className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
//               role="button"
//               target="_blank"
//               rel="noopener noreferrer"
//               href={personalData.resume}
//             >
//               <span>Get Resume</span>
//               <MdDownload size={16} />
//             </a>
//           </div>
//         </div>

//         {/* RIGHT SIDE CODE CARD */}
//         <HoverOnCards className="w-full h-full" color="rgba(255,0,150,0.8)">
//           <div className="order-1 lg:order-1 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] transition-all duration-300">
//             <div className="flex flex-row">
//               <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
//               <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
//             </div>

//             <div className="px-4 lg:px-8 py-5">
//               <div className="flex flex-row space-x-2">
//                 <div className="h-3 w-3 rounded-full bg-red-400"></div>
//                 <div className="h-3 w-3 rounded-full bg-orange-400"></div>
//                 <div className="h-3 w-3 rounded-full bg-green-200"></div>
//               </div>
//             </div>

//             {/* CODE CONTENT */}
//             <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
//               <code className="font-mono text-xs md:text-sm lg:text-base">
//                 {/* YOUR CODE BLOCK KEPT EXACTLY SAME */}
//                 <div className={`blink ${activeLine === 2 ? "text-[#16f2b3]" : ""}`}>
//                   <span className="mr-2 text-pink-500">const</span>
//                   <span className="mr-2 text-white">coder</span>
//                   <span className="mr-2 text-pink-500">=</span>
//                   <span className="text-gray-400">{'{'}</span>
//                 </div>
//                 <div className={activeLine === 1 ? "text-[#16f2b3]" : ""}>
//                   <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
//                   <span className="text-gray-400">{`'`}</span>
//                   <span className="text-amber-300">Afroj Mulani</span>
//                   <span className="text-gray-400">{`',`}</span>
//                 </div>

//                 <div className="ml-4 lg:ml-8 mr-2">
//                   <span className=" text-white">skills:</span>
//                   <span className="text-gray-400">{`['`}</span>
//                   <span className="text-amber-300">React</span>
//                   <span className="text-gray-400">{"', '"}</span>
//                   <span className="text-amber-300">Tailwindcss</span>
//                   <span className="text-gray-400">{"', '"}</span>
//                   <span className="text-amber-300">Redux</span>
//                   <span className="text-gray-400">{"', '"}</span>
//                   <span className="text-amber-300">Express</span>
//                   <span className="text-gray-400">{"', '"}</span>
//                   <span className="text-amber-300">MySql</span>
//                   <span className="text-gray-400">{"', '"}</span>
//                   <span className="text-amber-300">MongoDB</span>
//                   <span className="text-gray-400">{"'],"}</span>
//                 </div>

//                 <div className={activeLine === 2 ? "text-[#16f2b3]" : ""}>
//                   <span className="ml-4 lg:ml-8 mr-2 text-white">hardWorker:</span>
//                   <span className="text-orange-400">true</span>
//                   <span className="text-gray-400">,</span>
//                 </div>

//                 <div className={activeLine === 3 ? "text-[#16f2b3]" : ""}>
//                   <span className="ml-4 lg:ml-8 mr-2 text-white">quickLearner:</span>
//                   <span className="text-orange-400">true</span>
//                   <span className="text-gray-400">,</span>
//                 </div>

//                 <div className={activeLine === 4 ? "text-[#16f2b3]" : ""}>
//                   <span className="ml-4 lg:ml-8 mr-2 text-white">problemSolver:</span>
//                   <span className="text-orange-400">true</span>
//                   <span className="text-gray-400">,</span>
//                 </div>

//                 <div className={activeLine === 5 ? "text-[#16f2b3]" : ""}>
//                   <span className="ml-4 lg:ml-8 mr-2 text-green-400">hireable:</span>
//                   <span className="text-orange-400">function</span>
//                   <span className="text-gray-400">{'() {'}</span>
//                 </div>

//                 <div>
//                   <span className="ml-8 lg:ml-16 mr-2 text-orange-400">return</span>
//                   <span className="text-gray-400">{`(`}</span>
//                 </div>

//                 <div >
//                   <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
//                   <span className="mr-2 text-white">hardWorker</span>
//                   <span className="text-amber-300">&amp;&amp;</span>
//                 </div>

//                 <div>
//                   <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
//                   <span className="mr-2 text-white">problemSolver</span>
//                   <span className="text-amber-300">&amp;&amp;</span>
//                 </div>

//                 <div>
//                   <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
//                   <span className="mr-2 text-white">skills.length</span>
//                   <span className="mr-2 text-amber-300">&gt;=</span>
//                   <span className="text-orange-400">5</span>
//                 </div>

//                 <div>
//                   <span className="ml-8 lg:ml-16 mr-2 text-gray-400">{`);`}</span>
//                 </div>
//                 <div>
//                   <span className="ml-4 lg:ml-8 text-gray-400">{`};`}</span>
//                 </div>
//                 <div>
//                   <span className="text-gray-400">{`};`}</span>
//                 </div>
//               </code>
//             </div>
//           </div>
//         </HoverOnCards>
//       </div>
//     </section>
//   );
// }

// export default HeroSection;


// @flow strict

// import { personalData } from "../../../utils/data/personal-data";
// import { HashLink as Link } from "react-router-hash-link";
// import { BsGithub, BsLinkedin } from "react-icons/bs";
// import { MdDownload } from "react-icons/md";
// import { RiContactsFill } from "react-icons/ri";
// import { SiLeetcode } from "react-icons/si";
// import HoverOnCards from "../../helper/HoverOnCards";
// import { FaXTwitter } from "react-icons/fa6";
// import { useEffect, useState } from "react";

// function HeroSection() {
//   const smoothScroll = () => {
//     const element = document.querySelector("#contact");
//     element?.scrollIntoView({ behavior: "smooth" });
//   };

//   // ✅ NEW INTERPRETER STATE
//   const [currentLine, setCurrentLine] = useState(0);
//   const [errorFixed, setErrorFixed] = useState(false);
//   const [isPaused, setIsPaused] = useState(false);
//   const [finished, setFinished] = useState(false);

//   useEffect(() => {
//     if (finished) return;

//     const interval = setInterval(() => {
//       setCurrentLine((prev) => {

//         // 🔥 STOP at error line
//         if (prev === 9 && !errorFixed && !isPaused) {
//           setIsPaused(true);

//           setTimeout(() => {
//             setErrorFixed(true);
//             setIsPaused(false);
//           }, 1200);

//           return prev;
//         }

//         if (!isPaused) {
//           if (prev >= 13) {
//             clearInterval(interval);
//             setFinished(true);
//             return prev;
//           }
//           return prev + 1;
//         }

//         return prev;
//       });
//     }, 500);

//     return () => clearInterval(interval);
//   }, [errorFixed, isPaused, finished]);

//   const lineStyle = (line) =>
//     finished
//       ? "opacity-100 text-white"
//       : currentLine === line
//         ? "text-[#16f2b3]"
//         : "opacity-40";

//   return (
//     <section className="relative mt-15 flex flex-col items-center justify-between py-4 lg:py-12">
//       <img
//         src="/hero.svg"
//         alt="Hero"
//         width={1572}
//         height={795}
//         className="absolute -top-[98px] -z-10"
//       />

//       <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">

//         {/* LEFT */}
//         <div className="order-2 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
//           <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
//             Hello, <br />
//             This is{" "}
//             <span className="text-violet-500">{personalData.name}</span>
//             {` , I'm a Professional `}
//             <span className="text-[#16f2b3]">{personalData.designation}</span>.
//           </h1>

//           <div className="my-12 flex items-center gap-5">
//             <a href={personalData.github} target="_blank" rel="noreferrer" className="text-pink-500 hover:scale-125 transition">
//               <BsGithub size={30} />
//             </a>
//             <a href={personalData.linkedIn} target="_blank" rel="noreferrer" className="text-pink-500 hover:scale-125 transition">
//               <BsLinkedin size={30} />
//             </a>
//             <a href={personalData.leetcode} target="_blank" rel="noreferrer" className="text-pink-500 hover:scale-125 transition">
//               <SiLeetcode size={30} />
//             </a>
//             <a href={personalData.twitter} target="_blank" rel="noreferrer" className="text-pink-500 hover:scale-125 transition">
//               <FaXTwitter size={30} />
//             </a>
//           </div>

//           <div className="flex items-center gap-3">
//             <div className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full">
//               <button onClick={smoothScroll} className="px-3 md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full text-white flex items-center gap-1">
//                 Contact me <RiContactsFill size={16} />
//               </button>
//             </div>

//             <a href={personalData.resume} target="_blank" rel="noreferrer" className="flex items-center gap-1 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-white">
//               Download Resume <MdDownload size={16} />
//             </a>
//           </div>
//         </div>

//         {/* RIGHT CARD */}
//         <HoverOnCards className="w-full h-full" color="rgba(255,0,150,0.8)">
//           <div className="relative rounded-lg border border-[#1b2c68a0] bg-gradient-to-r from-[#0d1224] to-[#0a0d37]">

//             <div className="px-4 py-5 flex items-center space-x-2 group">

//   {/* CLOSE */}
//   <div className="relative flex items-center justify-center h-3 w-3 rounded-full bg-red-400 shadow-inner shadow-black/20 hover:bg-red-500 transition">
//     <span className="absolute text-[9px] font-bold text-black opacity-0 group-hover:opacity-100">
//       ×
//     </span>
//   </div>

//   {/* MINIMIZE */}
//   <div className="relative flex items-center justify-center h-3 w-3 rounded-full bg-yellow-400 shadow-inner shadow-black/20 hover:bg-yellow-500 transition">
//     <span className="absolute text-[9px] font-bold text-black opacity-0 group-hover:opacity-100">
//       −
//     </span>
//   </div>

//   {/* MAXIMIZE */}
//   <div className="relative flex items-center justify-center h-3 w-3 rounded-full bg-green-400 shadow-inner shadow-black/20 hover:bg-green-500 transition">
//     <span className="absolute text-[9px] font-bold text-black opacity-0 group-hover:opacity-100">
//       +
//     </span>
//   </div>

// </div>

//             <div className="border-t-[2px] border-indigo-900 px-4 py-6">

              
//               <code className="font-mono text-xs md:text-sm lg:text-base">

//                 {/* helper */}
//                 {/*
//     use this logic:
//     finished ? full visible : current line highlight : dim
//   */}

//                 <div className={`${finished ? "opacity-100" : currentLine === 0 ? "text-[#16f2b3]" : "opacity-40"}`}>
//                   <span className="mr-2 text-pink-500">const</span>
//                   <span className="mr-2 text-white">coder</span>
//                   <span className="mr-2 text-pink-500">=</span>
//                   <span className="text-gray-400">{'{'}</span>
//                   {currentLine === 0 && <span className="text-green-400 ml-1 animate-pulse">|</span>}
//                 </div>

//                 <div className={`${finished ? "opacity-100" : currentLine === 1 ? "text-[#16f2b3]" : "opacity-40"}`}>
//                   <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
//                   <span className="text-gray-400">'</span>
//                   <span className="text-amber-300">Afroj Mulani</span>
//                   <span className="text-gray-400">',</span>
//                   {currentLine === 1 && <span className="text-green-400 ml-1 animate-pulse">|</span>}
//                 </div>

//                 <div className={`ml-4 lg:ml-8 mr-2 ${finished ? "opacity-100" : currentLine === 2 ? "text-[#16f2b3]" : "opacity-40"}`}>
//                   <span className=" text-white">skills:</span>
//                   <span className="text-gray-400">['</span>
//                   <span className="text-amber-300">React</span>
//                   <span className="text-gray-400">', '</span>
//                   <span className="text-amber-300">Tailwindcss</span>
//                   <span className="text-gray-400">', '</span>
//                   <span className="text-amber-300">Redux</span>
//                   <span className="text-gray-400">', '</span>
//                   <span className="text-amber-300">Express</span>
//                   <span className="text-gray-400">', '</span>
//                   <span className="text-amber-300">MySql</span>
//                   <span className="text-gray-400">', '</span>
//                   <span className="text-amber-300">MongoDB</span>
//                   <span className="text-gray-400">'],</span>
//                   {currentLine === 2 && <span className="text-green-400 ml-1 animate-pulse">|</span>}
//                 </div>

//                 <div className={`${finished ? "opacity-100" : currentLine === 3 ? "text-[#16f2b3]" : "opacity-40"}`}>
//                   <span className="ml-4 lg:ml-8 mr-2 text-white">hardWorker:</span>
//                   <span className="text-orange-400">true</span>,
//                   {currentLine === 3 && <span className="text-green-400 ml-1 animate-pulse">|</span>}
//                 </div>

//                 <div className={`${finished ? "opacity-100" : currentLine === 4 ? "text-[#16f2b3]" : "opacity-40"}`}>
//                   <span className="ml-4 lg:ml-8 mr-2 text-white">quickLearner:</span>
//                   <span className="text-orange-400">true</span>,
//                   {currentLine === 4 && <span className="text-green-400 ml-1 animate-pulse">|</span>}
//                 </div>

//                 <div className={`${finished ? "opacity-100" : currentLine === 5 ? "text-[#16f2b3]" : "opacity-40"}`}>
//                   <span className="ml-4 lg:ml-8 mr-2 text-white">problemSolver:</span>
//                   <span className="text-orange-400">true</span>,
//                   {currentLine === 5 && <span className="text-green-400 ml-1 animate-pulse">|</span>}
//                 </div>

//                 <div className={`${finished ? "opacity-100" : currentLine === 6 ? "text-[#16f2b3]" : "opacity-40"}`}>
//                   <span className="ml-4 lg:ml-8 mr-2 text-green-400">hireable:</span>
//                   <span className="text-orange-400">function</span>
//                   <span className="text-gray-400">() {'{'}</span>
//                   {currentLine === 6 && <span className="text-green-400 ml-1 animate-pulse">|</span>}
//                 </div>

//                 <div className={`${finished ? "opacity-100" : currentLine === 7 ? "text-[#16f2b3]" : "opacity-40"}`}>
//                   <span className="ml-8 lg:ml-16 mr-2 text-orange-400">return</span>
//                   <span className="text-gray-400">(</span>
//                   {currentLine === 7 && <span className="text-green-400 ml-1 animate-pulse">|</span>}
//                 </div>

//                 <div className={`${finished ? "opacity-100" : currentLine === 8 ? "text-[#16f2b3]" : "opacity-40"}`}>
//                   <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
//                   <span className="mr-2 text-white">hardWorker</span>
//                   <span className="text-amber-300">&amp;&amp;</span>
//                   {currentLine === 8 && <span className="text-green-400 ml-1 animate-pulse">|</span>}
//                 </div>

//                 {/* ✅ FIXED ERROR LINE */}
//                 <div className={`${finished ? "opacity-100" : currentLine === 9 ? "text-[#16f2b3]" : "opacity-40"}`}>
//                   <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
//                   <span className="mr-2 text-white">problemSolver</span>

//                   {/* SHOW ERROR ONLY WHEN POINTER IS HERE */}
//                   {currentLine === 9 && !errorFixed && (
//                     <span className="text-red-500 ml-2 animate-pulse">❌</span>
//                   )}

//                   {/* AFTER FIX */}
//                   {errorFixed && (
//                     <span className="text-amber-300">&amp;&amp;</span>
//                   )}

//                   {currentLine === 9 && <span className="text-green-400 ml-1 animate-pulse">|</span>}
//                 </div>

//                 <div className={`${finished ? "opacity-100" : currentLine === 10 ? "text-[#16f2b3]" : "opacity-40"}`}>
//                   <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
//                   <span className="mr-2 text-white">skills.length</span>
//                   <span className="mr-2 text-amber-300">&gt;=</span>
//                   <span className="text-orange-400">5</span>
//                   {currentLine === 10 && <span className="text-green-400 ml-1 animate-pulse">|</span>}
//                 </div>

//                 <div className={`${finished ? "opacity-100" : currentLine === 11 ? "text-[#16f2b3]" : "opacity-40"}`}>
//                   <span className="ml-8 lg:ml-16 text-gray-400">);</span>
//                 </div>

//                 <div className={`${finished ? "opacity-100" : currentLine === 12 ? "text-[#16f2b3]" : "opacity-40"}`}>
//                   <span className="ml-4 lg:ml-8 text-gray-400">{"};"}</span>
//                 </div>

//                 <div className={`${finished ? "opacity-100" : currentLine === 13 ? "text-[#16f2b3]" : "opacity-40"}`}>
//                   <span className="text-gray-400">{"};"}</span>
//                 </div>

//                 {/* RESULT */}
//                 {finished && (
//                   <div className="mt-4 text-green-400 font-bold animate-pulse">
//                     → hireable: true ✅
//                   </div>
//                 )}

//               </code>
              
//             </div>
//           </div>
//         </HoverOnCards>
//       </div>
//     </section>
//   );
// }

// export default HeroSection;


// @flow strict

import { personalData } from "../../../utils/data/personal-data";
import { HashLink as Link } from "react-router-hash-link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";
import HoverOnCards from "../../helper/HoverOnCards";
import { FaXTwitter } from "react-icons/fa6";
import { useEffect, useState } from "react";

function HeroSection() {
  const smoothScroll = () => {
    const element = document.querySelector("#contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const [currentLine, setCurrentLine] = useState(0);
  const [errorFixed, setErrorFixed] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (finished) return;

    const interval = setInterval(() => {
      setCurrentLine((prev) => {

        if (prev === 9 && !errorFixed && !isPaused) {
          setIsPaused(true);

          setTimeout(() => {
            setErrorFixed(true);
            setIsPaused(false);
          }, 1200);

          return prev;
        }

        if (!isPaused) {
          if (prev >= 13) {
            setFinished(true);
            return prev;
          }
          return prev + 1;
        }

        return prev;
      });
    }, 700); // ✅ smoother

    return () => clearInterval(interval);
  }, [errorFixed, isPaused, finished]);

  const lineStyle = (line) =>
    finished
      ? "opacity-100 text-white"
      : currentLine === line
        ? "text-[#16f2b3]"
        : "opacity-40";

  return (
    <section className="relative mt-12 sm:mt-14 lg:mt-16 flex flex-col items-center justify-between py-6 sm:py-8 lg:py-12 overflow-hidden">

      {/* ✅ responsive background */}
      <img
        src="/hero.svg"
        alt="Hero"
        className="absolute -top-[80px] sm:-top-[90px] lg:-top-[98px] left-1/2 -translate-x-1/2 w-[1000px] sm:w-[1200px] lg:w-[1400px] max-w-none opacity-70 -z-10 pointer-events-none"
      />

      {/* ✅ container added (NO structure change, just wrapper) */}
      <div className="w-full max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-10">

          {/* LEFT */}
          <div className="order-2 flex flex-col items-start justify-center p-2 pb-16 sm:pb-20 md:pb-10 lg:pt-10">

            <h1 className="text-2xl sm:text-3xl font-bold leading-9 sm:leading-10 text-white md:font-extrabold lg:text-[2.4rem] xl:text-[2.6rem] lg:leading-[3.2rem] xl:leading-[3.5rem]">
              Hello, <br />
              This is{" "}
              <span className="text-violet-500">{personalData.name}</span>
              {` , I'm a Professional `}
              <span className="text-[#16f2b3]">{personalData.designation}</span>.
            </h1>

            <div className="my-8 sm:my-10 md:my-12 flex items-center gap-4 sm:gap-5">
              <a href={personalData.github} target="_blank" rel="noreferrer" className="text-pink-500 hover:scale-125 transition">
                <BsGithub size={24} className="sm:w-[28px] sm:h-[28px] md:w-[30px] md:h-[30px]" />
              </a>
              <a href={personalData.linkedIn} target="_blank" rel="noreferrer" className="text-pink-500 hover:scale-125 transition">
                <BsLinkedin size={24} className="sm:w-[28px] sm:h-[28px] md:w-[30px] md:h-[30px]" />
              </a>
              <a href={personalData.leetcode} target="_blank" rel="noreferrer" className="text-pink-500 hover:scale-125 transition">
                <SiLeetcode size={24} className="sm:w-[28px] sm:h-[28px] md:w-[30px] md:h-[30px]" />
              </a>
              <a href={personalData.twitter} target="_blank" rel="noreferrer" className="text-pink-500 hover:scale-125 transition">
                <FaXTwitter size={24} className="sm:w-[28px] sm:h-[28px] md:w-[30px] md:h-[30px]" />
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full">
                <button onClick={smoothScroll} className="px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-[#0d1224] rounded-full text-white flex items-center gap-1 text-sm sm:text-base">
                  Contact me <RiContactsFill size={16} />
                </button>
              </div>

              <a href={personalData.resume} target="_blank" rel="noreferrer" className="flex items-center gap-1 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 text-white text-sm sm:text-base">
                Download Resume <MdDownload size={16} />
              </a>
            </div>
          </div>

          {/* RIGHT CARD */}
          <HoverOnCards className="w-full h-full" color="rgba(255,0,150,0.8)">
            <div className="relative rounded-lg border border-[#1b2c68a0] bg-gradient-to-r from-[#0d1224] to-[#0a0d37]">

              {/* mac buttons unchanged */}
              <div className="px-4 py-5 flex items-center space-x-2 group">
                <div className="relative flex items-center justify-center h-3 w-3 rounded-full bg-red-400 shadow-inner shadow-black/20 hover:bg-red-500 transition">
                  <span className="absolute text-[9px] font-bold text-black opacity-0 group-hover:opacity-100">×</span>
                </div>
                <div className="relative flex items-center justify-center h-3 w-3 rounded-full bg-yellow-400 shadow-inner shadow-black/20 hover:bg-yellow-500 transition">
                  <span className="absolute text-[9px] font-bold text-black opacity-0 group-hover:opacity-100">−</span>
                </div>
                <div className="relative flex items-center justify-center h-3 w-3 rounded-full bg-green-400 shadow-inner shadow-black/20 hover:bg-green-500 transition">
                  <span className="absolute text-[9px] font-bold text-black opacity-0 group-hover:opacity-100">+</span>
                </div>
              </div>

              {/* code block */}
              <div className="border-t-[2px] border-indigo-900 px-3 sm:px-4 py-4 sm:py-6 overflow-x-auto">

                <code className="font-mono text-[10px] sm:text-xs md:text-sm lg:text-sm xl:text-base break-words">

            
                <div className={`${finished ? "opacity-100" : currentLine === 0 ? "text-[#16f2b3]" : "opacity-40"}`}>
                  <span className="mr-2 text-pink-500">const</span>
                  <span className="mr-2 text-white">coder</span>
                  <span className="mr-2 text-pink-500">=</span>
                  <span className="text-gray-400">{'{'}</span>
                  {currentLine === 0 && <span className="text-green-400 ml-1 animate-pulse">|</span>}
                </div>

                <div className={`${finished ? "opacity-100" : currentLine === 1 ? "text-[#16f2b3]" : "opacity-40"}`}>
                  <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                  <span className="text-gray-400">'</span>
                  <span className="text-amber-300">Afroj Mulani</span>
                  <span className="text-gray-400">',</span>
                  {currentLine === 1 && <span className="text-green-400 ml-1 animate-pulse">|</span>}
                </div>

                <div className={`ml-4 lg:ml-8 mr-2 ${finished ? "opacity-100" : currentLine === 2 ? "text-[#16f2b3]" : "opacity-40"}`}>
                  <span className=" text-white">skills:</span>
                  <span className="text-gray-400">['</span>
                  <span className="text-amber-300">React</span>
                  <span className="text-gray-400">', '</span>
                  <span className="text-amber-300">Tailwindcss</span>
                  <span className="text-gray-400">', '</span>
                  <span className="text-amber-300">Redux</span>
                  <span className="text-gray-400">', '</span>
                  <span className="text-amber-300">Express</span>
                  
                  <span className="text-gray-400">',<br /></span>
                  
                  <span className="text-amber-300"><span className="text-gray-400">'</span>MySql</span>
                  <span className="text-gray-400">', '</span>
                  <span className="text-amber-300">MongoDB</span>
                  <span className="text-gray-400">'],</span>
                  {currentLine === 2 && <span className="text-green-400 ml-1 animate-pulse">|</span>}
                </div>

                <div className={`${finished ? "opacity-100" : currentLine === 3 ? "text-[#16f2b3]" : "opacity-40"}`}>
                  <span className="ml-4 lg:ml-8 mr-2 text-white">hardWorker:</span>
                  <span className="text-orange-400">true</span>,
                  {currentLine === 3 && <span className="text-green-400 ml-1 animate-pulse">|</span>}
                </div>

                <div className={`${finished ? "opacity-100" : currentLine === 4 ? "text-[#16f2b3]" : "opacity-40"}`}>
                  <span className="ml-4 lg:ml-8 mr-2 text-white">quickLearner:</span>
                  <span className="text-orange-400">true</span>,
                  {currentLine === 4 && <span className="text-green-400 ml-1 animate-pulse">|</span>}
                </div>

                <div className={`${finished ? "opacity-100" : currentLine === 5 ? "text-[#16f2b3]" : "opacity-40"}`}>
                  <span className="ml-4 lg:ml-8 mr-2 text-white">problemSolver:</span>
                  <span className="text-orange-400">true</span>,
                  {currentLine === 5 && <span className="text-green-400 ml-1 animate-pulse">|</span>}
                </div>

                <div className={`${finished ? "opacity-100" : currentLine === 6 ? "text-[#16f2b3]" : "opacity-40"}`}>
                  <span className="ml-4 lg:ml-8 mr-2 text-green-400">hireable:</span>
                  <span className="text-orange-400">function</span>
                  <span className="text-gray-400">() {'{'}</span>
                  {currentLine === 6 && <span className="text-green-400 ml-1 animate-pulse">|</span>}
                </div>

                <div className={`${finished ? "opacity-100" : currentLine === 7 ? "text-[#16f2b3]" : "opacity-40"}`}>
                  <span className="ml-8 lg:ml-16 mr-2 text-orange-400">return</span>
                  <span className="text-gray-400">(</span>
                  {currentLine === 7 && <span className="text-green-400 ml-1 animate-pulse">|</span>}
                </div>

                <div className={`${finished ? "opacity-100" : currentLine === 8 ? "text-[#16f2b3]" : "opacity-40"}`}>
                  <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                  <span className="mr-2 text-white">hardWorker</span>
                  <span className="text-amber-300">&amp;&amp;</span>
                  {currentLine === 8 && <span className="text-green-400 ml-1 animate-pulse">|</span>}
                </div>

                {/* ✅ FIXED ERROR LINE */}
                <div className={`${finished ? "opacity-100" : currentLine === 9 ? "text-[#16f2b3]" : "opacity-40"}`}>
                  <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                  <span className="mr-2 text-white">problemSolver</span>

                  {/* SHOW ERROR ONLY WHEN POINTER IS HERE */}
                  {currentLine === 9 && !errorFixed && (
                    <span className="text-red-500 ml-2 animate-pulse">❌</span>
                  )}

                  {/* AFTER FIX */}
                  {errorFixed && (
                    <span className="text-amber-300">&amp;&amp;</span>
                  )}

                  {currentLine === 9 && <span className="text-green-400 ml-1 animate-pulse">|</span>}
                </div>

                <div className={`${finished ? "opacity-100" : currentLine === 10 ? "text-[#16f2b3]" : "opacity-40"}`}>
                  <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                  <span className="mr-2 text-white">skills.length</span>
                  <span className="mr-2 text-amber-300">&gt;=</span>
                  <span className="text-orange-400">5</span>
                  {currentLine === 10 && <span className="text-green-400 ml-1 animate-pulse">|</span>}
                </div>

                <div className={`${finished ? "opacity-100" : currentLine === 11 ? "text-[#16f2b3]" : "opacity-40"}`}>
                  <span className="ml-8 lg:ml-16 text-gray-400">);</span>
                </div>

                <div className={`${finished ? "opacity-100" : currentLine === 12 ? "text-[#16f2b3]" : "opacity-40"}`}>
                  <span className="ml-4 lg:ml-8 text-gray-400">{"};"}</span>
                </div>

                <div className={`${finished ? "opacity-100" : currentLine === 13 ? "text-[#16f2b3]" : "opacity-40"}`}>
                  <span className="text-gray-400">{"};"}</span>
                </div>

                {/* RESULT */}
                {finished && (
                  <div className="mt-4 text-green-400 font-bold animate-pulse">
                    → hireable: true ✅
                  </div>
                )}

              
                </code>

              </div>
            </div>
          </HoverOnCards>

        </div>
      </div>
    </section>
  );
}

export default HeroSection;