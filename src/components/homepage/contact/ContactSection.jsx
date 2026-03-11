// @flow strict
import { contactsData } from '../../../utils/data/contactsData';
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import lottieFile from "../../../assets/lottie/contact.json"
import AnimationLottie from "../../helper/animation-lottie";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import ContactForm from './contact-form';
import HoverOnCards from '../../helper/HoverOnCards';
import GlowCard from '../../helper/glow-card';

function ContactSection() {
  return (
  <>


  {/* Section Title */}
<div className="max-w-6xl mx-auto px-6 text-center mb-16">
  <h2 className="text-4xl font-bold tracking-wide text-white">
    Contact Me
  </h2>
</div>

{/* Main Layout */}
<div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

  {/* Lottie Animation */}
  <div className="flex justify-center items-center">
    <div className="w-[70%] lg:w-[80%]">
      <AnimationLottie animationPath={lottieFile} />
    </div>
  </div>

  {/* Right Section */}
  <div className="flex flex-col gap-8">

    {/* Contact Form */}
    <ContactForm />

    {/* Contact Info Card */}
    <HoverOnCards color="rgba(255,0,150,0.8)">
      <GlowCard identifier="contact-info-card">

        <div className="w-full p-6 lg:p-10 text-white backdrop-blur-md">

          {/* Contact Details */}
          <div className="flex flex-col gap-6">

            {/* Email */}
            <div className="flex items-center gap-4 text-sm md:text-lg">
              <MdAlternateEmail
                size={36}
                className="bg-[#8b98a5] p-2 rounded-full text-gray-800 
                hover:bg-[#16f2b3] hover:scale-110 transition-all"
              />
              <a
                href={`mailto:${contactsData.email}`}
                className="hover:text-[#16f2b3] hover:underline break-all"
              >
                {contactsData.email}
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4 text-sm md:text-lg">
              <IoMdCall
                size={36}
                className="bg-[#8b98a5] p-2 rounded-full text-gray-800 
                hover:bg-[#16f2b3] hover:scale-110 transition-all"
              />
              <a
                href={`tel:${contactsData.phone}`}
                className="hover:text-[#16f2b3]"
              >
                {contactsData.phone}
              </a>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4 text-sm md:text-lg">
              <CiLocationOn
                size={36}
                className="bg-[#8b98a5] p-2 rounded-full text-gray-800 
                hover:bg-[#16f2b3] hover:scale-110 transition-all"
              />
              <span>{contactsData.address}</span>
            </div>

          </div>

          {/* Social Icons */}
          <div className="mt-10 flex items-center gap-6">

            <a
              href={contactsData.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoGithub
                size={48}
                className="bg-[#8b98a5] p-3 rounded-full text-gray-800 
                hover:bg-[#16f2b3] hover:scale-110 transition-all"
              />
            </a>

            <a
              href={contactsData.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BiLogoLinkedin
                size={48}
                className="bg-[#8b98a5] p-3 rounded-full text-gray-800 
                hover:bg-[#16f2b3] hover:scale-110 transition-all"
              />
            </a>

            <a
              href={contactsData.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter
                size={48}
                className="bg-[#8b98a5] p-3 rounded-full text-gray-800 
                hover:bg-[#16f2b3] hover:scale-110 transition-all"
              />
            </a>

          </div>

        </div>

      </GlowCard>
    </HoverOnCards>

  </div>
</div>
  
  
  
  
  </>
  );
}

export default ContactSection;


