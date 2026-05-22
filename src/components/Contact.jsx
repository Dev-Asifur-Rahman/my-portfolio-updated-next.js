import React from "react";
import { Mail, MapPin, Briefcase, Phone, MessageCircle } from "lucide-react";
import toast from "react-hot-toast";

const Contact = () => {
  const handleMail = async(e) =>{
    e.preventDefault()
    toast.success('Toasted')
  }
  return (
    <div
      id="contact"
      className="w-full lg:mt-30 md:mt-25 mt-20 rounded-lg md:rounded-xl glass-bg overflow-hidden"
    >
      <div className="w-full px-4 md:px-8 lg:px-12 py-10 md:py-14">
        <div className="w-full flex flex-col items-center text-center mb-10">
          <p className="uppercase tracking-[6px] text-sm text-gradient mb-3">
            Get In Touch
          </p>

          <h2 className="lg:text-5xl md:text-4xl text-3xl font-bold">
            Contact Me
          </h2>

          <p className="max-w-2xl text-white/60 mt-4 text-sm md:text-base">
            Have a project idea, collaboration opportunity or just want to say
            hi? Feel free to reach out anytime.
          </p>

          <div className="mt-6 w-40 h-[2px] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="glass-bg rounded-3xl p-6 md:p-8">
            <h3 className="text-2xl font-semibold mb-4">
              Let’s Build Something Amazing
            </h3>

            <p className="text-white/60 leading-relaxed">
              I’m always interested in new opportunities, freelance projects and
              creative ideas. Whether you need a modern website, MERN stack app
              or UI implementation, I’d love to hear from you.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex md:flex-row flex-col md:items-center items-start gap-4">
                <div className="h-12 w-12 rounded-full glass-bg flex items-center justify-center">
                  <Mail size={20} />
                </div>

                <div className="">
                  <p className="text-white/50 text-sm">Email</p>
                  <p className="font-medium">asifurrahman.ac@gmail.com</p>
                </div>
              </div>

              <div className="flex md:flex-row flex-col md:items-center items-start gap-4">
                <div className="h-12 w-12 rounded-full glass-bg flex items-center justify-center">
                  <Phone size={20} />
                </div>

                <div>
                  <p className="text-white/50 text-sm">Phone & WhatsApp</p>
                  <p className="font-medium">+880 1783692584</p>
                </div>
              </div>

              <div className="flex md:flex-row flex-col md:items-center items-start gap-4">
                <div className="h-12 w-12 rounded-full glass-bg flex items-center justify-center">
                  <MapPin size={20} />
                </div>

                <div>
                  <p className="text-white/50 text-sm">Location</p>
                  <p className="font-medium">Dhaka, Bangladesh</p>
                </div>
              </div>

              <div className="flex md:flex-row flex-col md:items-center items-start gap-4">
                <div className="h-12 w-12 rounded-full glass-bg flex items-center justify-center">
                  <Briefcase size={20} />
                </div>

                <div>
                  <p className="text-white/50 text-sm">Availability</p>
                  <p className="font-medium">
                    Open for freelance & remote work
                  </p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleMail} className="glass-bg rounded-3xl p-6 md:p-8 space-y-5">
            <div>
              <label className="text-sm text-white/60 mb-2 block">
                Your Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full h-12 rounded-xl bg-white/5 border border-white/10 px-4 outline-none focus:border-white/30 transition-all"
              />
            </div>

            <div>
              <label className="text-sm text-white/60 mb-2 block">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full h-12 rounded-xl bg-white/5 border border-white/10 px-4 outline-none focus:border-white/30 transition-all"
              />
            </div>

            <div>
              <label className="text-sm text-white/60 mb-2 block">
                Message
              </label>

              <textarea
                rows={5}
                placeholder="Write your message..."
                className="w-full rounded-xl bg-white/5 border border-white/5 px-4 py-3 outline-none resize-none focus:border-white/30 transition-all"
              />
            </div>

            <button
              type="submit"
              className="w-full h-12 rounded-xl font-medium  bg-white/5 border border-white/10  hover:scale-[1.02] transition-all duration-300 cursor-pointer"
            >
              <span className="text-gradient">Send Message</span>
            </button>
          </form>
        </div>
      </div>
      <div className="text-center text-[10px] md:text-base text-gradient uppercase mb-1 font-semibold">
        © 2026 Asifur Rahman. All Rights Reserved.
      </div>
    </div>
  );
};

export default Contact;
