// @flow strict
import { contactsData } from '../../../utils/data/contactsData';
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import ContactForm from './contact-form';
import { personalData } from '../../../utils/data/personal-data';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { SiLeetcode } from 'react-icons/si';
function ContactSection() {
  return (
    <section id="contact" className="relative py-14 sm:py-16 lg:py-24 overflow-hidden rounded-2xl">

      {/* Background */}
      <img
        src="/section.svg"
        alt="section"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] max-w-full opacity-40 -z-10 pointer-events-none"
      />

      <div className="absolute top-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-[#16f2b3]/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-pink-500/10 blur-3xl rounded-full"></div>

      <div className="relative max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Let’s Build Something
          </h2>
          <p className="text-gray-400 mt-3 text-sm sm:text-base">
            Choose your way to connect — I’ll respond fast ⚡
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12">

          {/* LEFT */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            {/* CARD */}
            {[{
              icon: <MdAlternateEmail size={28} />,
              title: "Email Me",
              value: contactsData.email,
              link: `mailto:${contactsData.email}`
            }, {
              icon: <IoMdCall size={28} />,
              title: "Call Me",
              value: contactsData.phone,
              link: `tel:${contactsData.phone}`
            }].map((item, i) => (
              <a
                key={i}
                href={item.link}
                className="
                group relative p-4 sm:p-5 rounded-xl sm:rounded-2xl 
                bg-white/5 border border-white/10 
                transition-all duration-300 ease-out backdrop-blur-xl
                hover:-translate-y-1 hover:border-[#16f2b3]/60
                overflow-hidden
                "
              >
                {/* glow sweep */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 
                bg-gradient-to-r from-transparent via-[#16f2b3]/10 to-transparent"></div>

                <div className="relative z-10">
                  <div className="mb-3 text-[#16f2b3] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    {item.icon}
                  </div>

                  <h3 className="text-white text-sm sm:text-base font-semibold transition group-hover:text-[#16f2b3]">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 text-xs mt-1 break-all">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}

            {/* Location */}
            <div className="group relative p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 hover:-translate-y-1 hover:border-[#16f2b3]/60 transition overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-transparent via-[#16f2b3]/10 to-transparent"></div>

              <div className="relative z-10">
                <CiLocationOn size={28} className="mb-3 text-[#16f2b3] group-hover:scale-110 transition" />
                <h3 className="text-white text-sm sm:text-base font-semibold group-hover:text-[#16f2b3]">Location</h3>
                <p className="text-gray-400 text-xs mt-1">{contactsData.address}</p>
              </div>
            </div>

            {/* Social */}
            <div className="group relative p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 hover:-translate-y-1 hover:border-[#16f2b3]/60 transition overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-transparent via-[#16f2b3]/10 to-transparent"></div>

              <div className="relative z-10">
                <h3 className="text-white text-sm sm:text-base font-semibold mb-3 group-hover:text-[#16f2b3]">Socials</h3>
                <div className="my-8 sm:my-10 md:my-12 flex items-center gap-4 sm:gap-5">
                  <a href={personalData.github} target="_blank" rel="noreferrer" className="text-white group-hover:text-[#16f2b3] hover:scale-125 transition">
                    <BsGithub size={40} className="sm:w-[28px] sm:h-[28px] md:w-[30px] md:h-[30px]" />
                  </a>
                  <a href={personalData.linkedIn} target="_blank" rel="noreferrer" className="text-white group-hover:text-[#16f2b3] hover:scale-125 transition">
                    <BsLinkedin size={24} className="sm:w-[28px] sm:h-[28px] md:w-[30px] md:h-[30px]" />
                  </a>
                  <a href={personalData.twitter} target="_blank" rel="noreferrer" className="text-white group-hover:text-[#16f2b3] hover:scale-125 transition">
                    <FaXTwitter size={24} className="sm:w-[28px] sm:h-[28px] md:w-[30px] md:h-[30px]" />
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT */}
          <div>
            <div className="p-4 sm:p-6 lg:p-8 rounded-2xl 
                            bg-gradient-to-br from-white/5 to-white/0 
                            border border-white/10 backdrop-blur-xl">

              <h3 className="text-lg sm:text-xl lg:text-2xl text-white font-semibold mb-5">
                Send a Message
              </h3>

              <ContactForm />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ContactSection;