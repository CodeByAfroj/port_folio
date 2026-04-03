// @flow strict
import { contactsData } from '../../../utils/data/contactsData';
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import ContactForm from './contact-form';

function ContactSection() {
  return (
    <section id="contact" className="relative py-24 overflow-hidden">

      {/* 🔥 Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0f172a] to-black"></div>

      <div className="absolute top-0 left-0 w-72 h-72 bg-[#16f2b3]/20 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-500/20 blur-3xl rounded-full animate-pulse"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white">
            Let’s Build Something
          </h2>
          <p className="text-gray-400 mt-4 text-lg">
            Choose your way to connect — I’ll respond fast ⚡
          </p>
        </div>

        {/* Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* LEFT — CONTACT OPTIONS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            {/* Email Card */}
            <a
              href={`mailto:${contactsData.email}`}
              className="group p-6 rounded-2xl bg-white/5 border border-white/10 
                         hover:border-[#16f2b3] hover:scale-[1.03] 
                         transition duration-300 backdrop-blur-xl"
            >
              <MdAlternateEmail size={40}
                className="mb-4 text-[#16f2b3] group-hover:scale-110 transition" />
              <h3 className="text-white text-lg font-semibold">Email Me</h3>
              <p className="text-gray-400 text-sm break-all">
                {contactsData.email}
              </p>
            </a>

            {/* Call Card */}
            <a
              href={`tel:${contactsData.phone}`}
              className="group p-6 rounded-2xl bg-white/5 border border-white/10 
                         hover:border-[#16f2b3] hover:scale-[1.03] 
                         transition duration-300 backdrop-blur-xl"
            >
              <IoMdCall size={40}
                className="mb-4 text-[#16f2b3] group-hover:scale-110 transition" />
              <h3 className="text-white text-lg font-semibold">Call Me</h3>
              <p className="text-gray-400 text-sm">
                {contactsData.phone}
              </p>
            </a>

            {/* Location */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
              <CiLocationOn size={40} className="mb-4 text-[#16f2b3]" />
              <h3 className="text-white text-lg font-semibold">Location</h3>
              <p className="text-gray-400 text-sm">
                {contactsData.address}
              </p>
            </div>

            {/* Social */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
              <h3 className="text-white text-lg font-semibold mb-4">
                Socials
              </h3>

              <div className="flex gap-4">
                <a href={contactsData.github} target="_blank">
                  <IoLogoGithub className="text-2xl text-gray-300 hover:text-[#16f2b3] transition" />
                </a>
                <a href={contactsData.linkedIn} target="_blank">
                  <BiLogoLinkedin className="text-2xl text-gray-300 hover:text-[#16f2b3] transition" />
                </a>
                <a href={contactsData.twitter} target="_blank">
                  <FaXTwitter className="text-2xl text-gray-300 hover:text-[#16f2b3] transition" />
                </a>
              </div>
            </div>

          </div>

          {/* RIGHT — FORM EXPERIENCE */}
          <div className="relative">

            <div className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 
                            border border-white/10 backdrop-blur-xl
                            shadow-[0_0_40px_rgba(22,242,179,0.1)]">

              <h3 className="text-2xl text-white font-semibold mb-6">
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