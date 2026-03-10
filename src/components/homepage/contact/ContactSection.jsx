// @flow strict
import { contactsData } from '../../../utils/data/contactsData';
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import ContactForm from './contact-form';
import HoverOnCards from '../../helper/HoverOnCards';
import GlowCard from '../../helper/glow-card';

function ContactSection() {
  return (
  <div id="contact" className="relative text-white   -mt-10">



  <div className="max-w-6xl mx-auto px-6 text-center mb-20">
        <h2 className="text-4xl font-bold tracking-wide">
          Contact Me
        </h2>

        <p className="text-gray-400 mt-4 max-w-lg mx-auto">
          Interested in working together or discussing a project?
          Feel free to reach out anytime.
        </p>
      </div>


  <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start mb-10">


    
    <ContactForm />

  < HoverOnCards  color="rgba(255,0,150,0.8)">
    <GlowCard identifier="contact-info-card"> 
           <div className="w-full p-6 lg:p-10 text-white  backdrop-blur-md ">

      <div className="flex flex-col gap-6 lg:gap-9">


        <div className="text-sm md:text-xl flex items-center gap-3">
          <MdAlternateEmail
            className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800"
            size={36}
          />

          <a
            href={`mailto:${contactsData.email}`}
            className="hover:text-[#16f2b3] hover:underline break-all"
          >
            {contactsData.email}
          </a>
        </div>

  
        <div className="text-sm md:text-xl flex items-center gap-3">
          <IoMdCall
            className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800"
            size={36}
          />

          <a
            href={`tel:${contactsData.phone}`}
            className="hover:text-[#16f2b3]"
          >
            {contactsData.phone}
          </a>
        </div>

     
        <div className="text-sm md:text-xl flex items-center gap-3">
          <CiLocationOn
            className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800"
            size={36}
          />

          <span>{contactsData.address}</span>
        </div>

      </div>

   
      <div className="mt-10 lg:mt-16 flex items-center gap-6">

        <a target="_blank" rel="noopener noreferrer" href={contactsData.github}>
          <IoLogoGithub
            className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800"
            size={48}
          />
        </a>

        <a target="_blank" rel="noopener noreferrer" href={contactsData.linkedIn}>
          <BiLogoLinkedin
            className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800"
            size={48}
          />
        </a>

        <a target="_blank" rel="noopener noreferrer" href={contactsData.twitter}>
          <FaXTwitter
            className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800"
            size={48}
          />
        </a>

      </div>

    </div>
    </GlowCard>

  </HoverOnCards>

   

  </div>

</div>
  );
}

export default ContactSection;
