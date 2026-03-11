"use client";
import { isValidEmail } from "../../../utils/check-email";
import { useState, useRef } from "react";
import { TbMailForward } from "react-icons/tb";
import { toast } from "react-toastify";
import HoverOnCards from "../../helper/HoverOnCards";
import emailjs from "@emailjs/browser";
import GlowCard from "../../helper/glow-card";

function ContactForm() {
  const form = useRef();

  const [error, setError] = useState({
    email: false,
    required: false,
  });

  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const formData = new FormData(form.current);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    if (!name || !email || !message) {
      setError({ email: false, required: true });
      return false;
    }

    if (!isValidEmail(email)) {
      setError({ email: true, required: false });
      return false;
    }

    setError({ email: false, required: false });
    return true;
  };

  const handleSendMail = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      setIsLoading(true);

      await emailjs.sendForm(
        "service_72innvp",       
        "template_ky4sprs",       
        form.current,
        "AzJoOdr0Op4yVhRHu"    
      );

      toast.success("Message sent successfully!");
      form.current.reset();

    } catch (error) {
      console.error(error);
      toast.error("Failed to send message!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
<div className="relative z-50">

  <HoverOnCards color="rgba(255,0,150,0.8)">
    
    <GlowCard identifier="contact-card">

      <div className="relative w-full p-1 lg:p-10 text-white">

        <form
          ref={form}
          onSubmit={handleSendMail}
          className="flex flex-col gap-4"
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="bg-[#1f2937] border border-[#374151] 
            focus:border-pink-500 outline-none 
            px-4 py-3 rounded-lg transition-all"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="bg-[#1f2937] border border-[#374151] 
            focus:border-pink-500 outline-none 
            px-4 py-3 rounded-lg transition-all"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            className="bg-[#1f2937] border border-[#374151] 
            focus:border-pink-500 outline-none 
            px-4 py-3 rounded-lg transition-all"
          />

          {error.required && (
            <p className="text-red-400 text-sm text-center">
              All fields are required!
            </p>
          )}

          {error.email && (
            <p className="text-red-400 text-sm text-center">
              Invalid email address!
            </p>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="flex items-center justify-center gap-2 
            bg-gradient-to-r from-pink-500 to-violet-600 
            px-6 py-3 rounded-full font-semibold
            transition-all hover:scale-105 active:scale-95"
          >
            {isLoading ? "Sending..." : (
              <>
                Send Message
                <TbMailForward size={20} />
              </>
            )}
          </button>

        </form>

      </div>

    </GlowCard>

  </HoverOnCards>

</div>
  );
}

export default ContactForm;