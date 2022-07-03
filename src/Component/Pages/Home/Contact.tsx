import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-primary">
        <div className="hero-content flex-col md:flex-row-reverse flex-col-reverse">
          <div className="flex items-center justify-center min-h-screen bg-white w-full md:w-2/4 rounded-md">
            <form className="mx-8 space-y-8">
              <div>
                <input
                  type="text"
                  className="w-full p-2 text-sm border-b-2 border-gray-400 outline-none opacity-50 focus:border-blue-400"
                  placeholder="Full Name"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="w-full p-2 text-sm border-b-2 border-gray-400 outline-none opacity-50 focus:border-blue-400"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="w-full p-2 text-sm border-b-2 border-gray-400 outline-none opacity-50 focus:border-blue-400"
                  placeholder="Subject"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  className="w-full p-6 text-sm border-b-2 border-gray-400 rounded-lg outline-none opacity-50 focus:border-blue-400"
                  placeholder="Enter your message"
                ></textarea>
              </div>

              <button className="block w-full px-2 py-4 mt-2 text-white bg-black rounded-full">
                Send Form
              </button>
            </form>
          </div>

          <div className="lg:w-2/4">
            <h1 className="text-5xl font-bold">
              Let us handle your <br></br> project, professionally.
            </h1>
            <p className="py-6">
              With well written codes, we build amazi ng apps for <br></br> all
              platforms, mobile and web apps in general.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
