import React from "react";

const Contact = () => {
  return (
    <div className="w-full  bg-white text-gray-800 py-16 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-[#292a62]">
          📬 Let's Get In Touch
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Have a project idea or just want to say hello? Fill out the form below and I'll get back to you as soon as possible.
        </p>

        <form
          action="https://formspree.io/f/{your_form_id}" // Replace this
          method="POST"
          className="grid grid-cols-1 gap-6"
        >
          <div>
            <label className="block mb-2 text-sm font-semibold">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#292a62]"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-semibold">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#292a62]"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-semibold">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#292a62]"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-[#292a62] text-white px-6 py-2 rounded-xl hover:bg-[#1f1f50] transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
