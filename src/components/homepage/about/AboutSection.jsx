// // @flow strict

// import { personalData } from "../../../utils/data/personal-data";




// function AboutSection() {
//   return (
//     <div id="about" className="relative z-50 border-t max-sm:mx-2 mx-12 my-12 lg:my-24 border-[#25213b]">
//       <img
//         src="/section.svg"
//         alt="Hero"
//         width={1572}
//         height={795}
//         className="absolute top-0 -z-10"
//       />

//        <div className="flex justify-center -translate-y-[1px]">
//         <div className="w-3/4">
//           <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
//         </div>
//       </div>

//       <div className="flex justify-center my-10 lg:py-8">
//         <div className="flex  items-center">
//           <span className="w-24 h-[2px] bg-[#1a1443]"></span>
//           <span className="bg-[#1a1443] w-fit text-white p-2 px-1 text-xl rounded-md">
//             About Me
//           </span>
//           <span className="w-24 h-[2px] bg-[#1a1443]"></span>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
//         <div className="order-2 lg:order-1">
//           <p className="font-medium mb-5 ml-12 text-[#16f2b3] text-xl uppercase">
//             Who I am?
//           </p>
//           <p className="text-gray-200 lg:ml-12 text-sm lg:text-lg">
//             {personalData.description}
//           </p>
//         </div>
//         <div className="flex justify-center order-1 lg:order-2">
//           <img
//             src={personalData.profile}
//             width={280}
//             height={280}
//             alt="Afroj Mulani"
//             className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutSection;




// @flow strict

// @flow strict

// import { personalData } from "../../../utils/data/personal-data";
// import { useEffect, useState } from "react";

// function AboutSection() {

//   // AI typing states
//   const [displayText, setDisplayText] = useState("");
//   const [index, setIndex] = useState(0);
//   const [start, setStart] = useState(false);

//   const fullText = personalData.description;
//   const [showLabel, setShowLabel] = useState(false);

//   useEffect(() => {
//   const timer = setTimeout(() => {
//     setShowLabel(true);
//   }, 300); // small delay before revealing

//   return () => clearTimeout(timer);
// }, []);

//   // small thinking delay
//   useEffect(() => {
//     const delay = setTimeout(() => setStart(true), 800);
//     return () => clearTimeout(delay);
//   }, []);

//   // typing effect
//   useEffect(() => {
//     if (!start) return;
//     if (index >= fullText.length) return;

//     const timeout = setTimeout(() => {
//       setDisplayText((prev) => prev + fullText[index]);
//       setIndex((prev) => prev + 1);
//     }, 20 + Math.random() * 30); // realistic typing speed

//     return () => clearTimeout(timeout);
//   }, [index, fullText, start]);

//   return (
//     <div
//       id="about"
//       className="relative z-50 border-t max-sm:mx-2 mx-12 my-12 lg:my-24 border-[#25213b]"
//     >
//       <img
//         src="/section.svg"
//         alt="Hero"
//         width={1572}
//         height={795}
//         className="absolute top-0 -z-10"
//       />

//       {/* TOP LINE */}
//       <div className="flex justify-center -translate-y-[1px]">
//         <div className="w-3/4">
//           <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
//         </div>
//       </div>

//       {/* TITLE */}
//       <div className="flex justify-center my-10 lg:py-8">
//         <div className="flex items-center">
//           <span className="w-24 h-[2px] bg-[#1a1443]"></span>
//           <span className="bg-[#1a1443] text-white p-2 px-2 text-xl rounded-md">
//             About Me
//           </span>
//           <span className="w-24 h-[2px] bg-[#1a1443]"></span>
//         </div>
//       </div>

//       {/* CONTENT */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">

//         {/* LEFT SIDE (AI TEXT) */}
//         <div className="order-2 lg:order-1">

//           <p className="font-medium mb-4 ml-12 text-[#16f2b3] text-xl uppercase">
//             Who I am?
//           </p>

//           <div className="ml-12 max-w-xl">

//             {/* AI label */}
//             <p className="text-sm text-gray-500 mb-3 font-mono">
//               Generating profile...
//             </p>

//             {/* AI typing text */}
//             <p className="text-gray-200 text-sm lg:text-lg leading-relaxed font-mono">

//               {displayText}

//               {/* blinking cursor */}
//               <span className="inline-block w-[8px] h-[18px] ml-1 bg-[#16f2b3] animate-pulse"></span>

//             </p>

//           </div>
//         </div>

//         {/* RIGHT SIDE (IMAGE) */}
//       <div className="flex justify-center order-1 lg:order-2 relative">

//   {/* glow layers */}
//   <div className="absolute w-72 h-72 bg-violet-600/20 blur-3xl rounded-full"></div>
//   <div className="absolute w-60 h-60 bg-pink-500/20 blur-2xl rounded-full"></div>

//   {/* IMAGE WRAPPER */}
//   <div className="relative group">

//     {/* loading shimmer overlay */}
//     {!start && (
//       <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse z-10"></div>
//     )}

//     <img
//       src={personalData.profile}
//       width={280}
//       height={280}
//       alt="Afroj Mulani"
//       className={`
//         rounded-lg cursor-pointer
//         transition-all duration-700 ease-out

//         ${start 
//           ? "opacity-100 scale-100 blur-0 grayscale hover:grayscale-0 hover:scale-110" 
//           : "opacity-0 scale-95 blur-md grayscale"
//         }
//       `}
//     />

//     {/* subtle border glow on hover */}
//     <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-violet-500/40 transition-all duration-300"></div>

//   </div>

// </div>
//       </div>
//     </div>
//   );
// }

// export default AboutSection;


// @flow strict
// @flow strict

// import { personalData } from "../../../utils/data/personal-data";
// import { useEffect, useState, useRef } from "react";

// function AboutSection() {

//   // VISIBILITY
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef(null);

//   // TEXT AI
//   const [displayText, setDisplayText] = useState("");
//   const [index, setIndex] = useState(0);
//   const [start, setStart] = useState(false);

//   // LABEL
//   const [showLabel, setShowLabel] = useState(false);

//   // IMAGE GENERATION
//   const [imgStep, setImgStep] = useState(0);
//   const [showImage, setShowImage] = useState(false);

//   const fullText = personalData.description;

//   const steps = [
//     "Generating image...",
//     "Rendering layers...",
//     "Enhancing details...",
//     "Finalizing..."
//   ];

//   // 👁 VISIBILITY
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => setIsVisible(entry.isIntersecting),
//       { threshold: 0.4 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   // 🔁 RESET
//   useEffect(() => {
//     if (!isVisible) {
//       setDisplayText("");
//       setIndex(0);
//       setStart(false);
//       setShowImage(false);
//       setImgStep(0);
//       setShowLabel(false);
//     }
//   }, [isVisible]);

//   // 🚀 START
//   useEffect(() => {
//     if (!isVisible) return;

//     const delay = setTimeout(() => {
//       setStart(true);
//       setShowLabel(true);
//     }, 800);

//     return () => clearTimeout(delay);
//   }, [isVisible]);

//   // ✍️ TEXT TYPING
//   useEffect(() => {
//     if (!start || index >= fullText.length) return;

//     const timeout = setTimeout(() => {
//       setDisplayText((prev) => prev + fullText[index]);
//       setIndex((prev) => prev + 1);
//     }, 20 + Math.random() * 30);

//     return () => clearTimeout(timeout);
//   }, [index, fullText, start]);

//   // 🖼 IMAGE GENERATION
//   useEffect(() => {
//     if (!start || !isVisible) return;

//     let i = 0;

//     const interval = setInterval(() => {
//       setImgStep(i);
//       i++;

//       if (i === steps.length) {
//         clearInterval(interval);
//         setTimeout(() => setShowImage(true), 500);
//       }
//     }, 700);

//     return () => clearInterval(interval);
//   }, [start, isVisible]);

//   return (
//     <section
//       ref={sectionRef}
//       id="about"
//       className="relative z-50 border-t border-[#25213b] py-12 lg:py-24"
//     >
//       {/* BACKGROUND */}
//       <img
//         src="/section.svg"
//         alt="Hero"
//         className="absolute top-0 -z-10 w-full"
//       />

//       {/* CONTAINER */}
//       <div className="max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">

//         {/* TOP LINE */}
//         <div className="flex justify-center -translate-y-[1px]">
//           <div className="w-3/4">
//             <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
//           </div>
//         </div>

//         {/* TITLE */}
//         <div className="flex justify-center my-10 lg:py-8">
//           <div className="flex items-center">
//             <span className="w-24 h-[2px] bg-[#1a1443]"></span>
//             <span className="bg-[#1a1443] text-white px-3 py-1 text-xl rounded-md">
//               About Me
//             </span>
//             <span className="w-24 h-[2px] bg-[#1a1443]"></span>
//           </div>
//         </div>

//         {/* CONTENT */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

//           {/* LEFT */}
//           <div className="order-2 lg:order-1">

//             <p className="font-medium mb-4 text-[#16f2b3] text-xl uppercase">
//               Who I am?
//             </p>

//             <div className="mx-auto lg:mx-0 max-w-md lg:max-w-xl">

             

//               {/* TEXT */}
//               <p className="text-gray-200 text-sm lg:text-base xl:text-lg leading-relaxed font-mono">

//                 {displayText}

//                 {start && (
//                   <span className="inline-block w-[8px] h-[18px] ml-1 bg-[#16f2b3] animate-pulse"></span>
//                 )}

//               </p>

//             </div>
//           </div>

//           {/* RIGHT */}
//           <div className="flex justify-center order-1 lg:order-2 relative">

//             {/* GLOW */}
//             <div className="absolute w-72 h-72 bg-violet-600/20 blur-3xl rounded-full"></div>
//             <div className="absolute w-60 h-60 bg-pink-500/20 blur-2xl rounded-full"></div>

//             <div className="relative w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] lg:w-[300px] lg:h-[300px] flex items-center justify-center">

//               {/* GENERATION TEXT */}
//               {!showImage && (
//                 <div className="absolute inset-0 flex flex-col items-center justify-center font-mono text-sm text-gray-400 space-y-2">

//                   {steps.slice(0, imgStep + 1).map((text, i) => (
//                     <p
//                       key={i}
//                       className={`transition-all duration-300 ${
//                         i === imgStep ? "text-[#16f2b3]" : "opacity-40"
//                       }`}
//                     >
//                       {text}
//                     </p>
//                   ))}

//                   <span className="text-[#16f2b3] animate-pulse">|</span>
//                 </div>
//               )}

//               {/* IMAGE */}
//               <img
//                 src={personalData.profile}
//                 alt="Afroj Mulani"
//                 className={`
//                   w-full max-sm:h-full h-90 object-cover rounded-lg absolute
//                   transition-all duration-700 ease-out
//                   ${
//                     showImage
//                       ? "opacity-100 scale-100 blur-0 grayscale hover:grayscale-0 hover:scale-110"
//                       : "opacity-0 scale-95 blur-xl"
//                   }
//                 `}
//               />

//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

// export default AboutSection;



// @flow strict
// @flow strict
import { personalData } from "../../../utils/data/personal-data";
import { useEffect, useState, useRef } from "react";

function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);
  const sectionRef = useRef(null);

  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [start, setStart] = useState(false);

  const [imgStep, setImgStep] = useState(0);
  const [showImage, setShowImage] = useState(false);
  const [revealStage, setRevealStage] = useState(0);

  const fullText = personalData.description;

  const steps = [
    "Generating image...",
    "Rendering layers...",
    "Enhancing details...",
    "Finalizing..."
  ];

  // 👁 Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasPlayed) {
          setIsVisible(true);
          setHasPlayed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasPlayed]);

  // 🚀 Start animation
  useEffect(() => {
    if (!isVisible) return;
    const delay = setTimeout(() => setStart(true), 600);
    return () => clearTimeout(delay);
  }, [isVisible]);

  // ✍️ Typing effect
  useEffect(() => {
    if (!start || index >= fullText.length) return;

    const timeout = setTimeout(() => {
      setDisplayText((prev) => prev + fullText[index]);
      setIndex((prev) => prev + 1);
    }, 20);

    return () => clearTimeout(timeout);
  }, [index, fullText, start]);

  // 🖼 Image loading steps
  useEffect(() => {
    if (!start) return;

    let i = 0;
    const interval = setInterval(() => {
      setImgStep(i);
      i++;

      if (i === steps.length) {
        clearInterval(interval);
        setTimeout(() => setShowImage(true), 400);
      }
    }, 600);

    return () => clearInterval(interval);
  }, [start]);

  // ✨ Reveal animation
  useEffect(() => {
    if (!showImage) return;

    setRevealStage(1);
    const t1 = setTimeout(() => setRevealStage(2), 150);
    const t2 = setTimeout(() => setRevealStage(3), 350);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [showImage]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative z-50 border-t border-[#25213b] py-10 sm:py-12 lg:py-20 overflow-hidden"
    >
      {/* Background */}
      <img
        src="/section.svg"
        alt="bg"
        className="absolute top-0 -z-10 w-full opacity-40"
      />

      <div className="max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Title */}
        <div className="flex justify-center my-6 sm:my-10 lg:py-8">
          <div className="flex items-center gap-2 sm:gap-4">
            <span className="w-10 sm:w-20 h-[2px] bg-[#1a1443]" />
            <span className="bg-[#1a1443] text-white px-3 py-1 text-sm sm:text-lg rounded-md">
              About Me
            </span>
            <span className="w-10 sm:w-20 h-[2px] bg-[#1a1443]" />
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">

          {/* LEFT */}
          <div>
            <p className="font-medium mb-3 text-[#16f2b3] text-lg sm:text-xl uppercase">
              Who I am?
            </p>

            <p className="text-gray-200 text-xs sm:text-sm md:text-base lg:text-base xl:text-lg leading-relaxed font-mono">
              {displayText}
              {start && (
                <span className="inline-block w-[6px] h-[16px] ml-1 bg-[#16f2b3] animate-pulse"></span>
              )}
            </p>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center relative w-full">

            {/* Glow */}
            <div className="absolute w-40 h-40 sm:w-60 sm:h-60 bg-violet-600/20 blur-3xl rounded-full"></div>
            <div className="absolute w-32 h-32 sm:w-52 sm:h-52 bg-pink-500/20 blur-2xl rounded-full"></div>

            {/* Image container */}
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 flex items-center justify-center">

              {/* Loading text */}
              {!showImage && (
                <div className="absolute inset-0 flex flex-col items-center justify-center font-mono text-xs sm:text-sm text-gray-400 space-y-1 sm:space-y-2">
                  {steps.slice(0, imgStep + 1).map((text, i) => (
                    <p
                      key={i}
                      className={`transition-all duration-300 ${
                        i === imgStep ? "text-[#16f2b3]" : "opacity-40"
                      }`}
                    >
                      {text}
                    </p>
                  ))}
                  <span className="text-[#16f2b3] animate-pulse">|</span>
                </div>
              )}

              {/* Image */}
              <img
                src={personalData.profile}
                alt="profile"
                className={`
                  w-full h-full object-cover rounded-lg absolute
                  transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]

                  ${
                    !showImage
                      ? "opacity-0 scale-110 blur-2xl"
                      : revealStage === 1
                      ? "opacity-40 scale-105 blur-xl brightness-75"
                      : revealStage === 2
                      ? "opacity-70 scale-102 blur-md brightness-90"
                      : "opacity-100 scale-100 blur-0 brightness-100"
                  }

                  grayscale hover:grayscale-0 hover:scale-105
                `}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;