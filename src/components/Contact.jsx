import React from "react";
import FadeInFromUp from "./FadeInFromUp";
import emailjs from 'emailjs-com';
import SplitText from "./SpiltText";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    // Send email using EmailJS service
    emailjs.sendForm('service_qxzorbr', 'template_ibb2ecn', e.target, 'Gv-9RXCbjk087ok8b') // 
      .then((result) => {
        console.log('Email Sent:', result.text);
        alert('Your message has been sent!');
        e.target.reset(); // Clear the form after successful send
      }, (error) => {
        console.log('Error:', error.text);
        alert('There was an error sending your message, please try again.');
      });
  };

  return (
    <FadeInFromUp>
     <div className="Contact m-auto text-center justify-center md:mt-20 ">
      
      <SplitText
  text="Have an awesome project idea?"
  className=" text-5xl font-mono text-cyan-500"
  delay={150}
  animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
  animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
  easing="easeOutCubic"
  threshold={0.2}
  rootMargin="-50px"
/>

      <div id="contact" className="min-h-screen flex font-mono text-left justify-center items-center p-10 bg-[radial-gradient(300px_circle_at_20%_250px,#244970,transparent)] md:mt-5">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Left Section */}
          <div className="space-y-6 ml-32">

            <h2 className="text-gray-100 text-2xl font">Let's discuss</h2>

            <p className="text-gray-400">
              Have an awesome idea about a certain project ! have any doubt ? Collaborating with me !, any thing
-- Contact me here, i will Do my Best
            </p>
            
            <button
              onClick={() => window.location.href = "mailto:suchitrasahoo874@gmail.com"}
              className="cursor-pointer border border-cyan-500  text-white font-semibold px-6 py-3 rounded shadow-md hover:shadow-xl hover:scale-110 transition-transform duration-200 ease-in-out">
              Get in touch
            </button>

            <hr className="my-4" />

            
            <div>

              <div className="flex gap-3 mt-2">
                <div>
                  <h4 className="text-gray-300 font-semibold text-lg">Social</h4>
                  <div className="flex gap-4 mt-2">
                    {/* GitHub */}
                    <a
                      href="https://github.com/Suchitra-Sahoo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white transition"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        width="28"
                        height="28"
                      >
                        <path d="M12 0C5.37 0 0 5.38 0 12a12 12 0 008.21 11.43c.6.1.82-.26.82-.58v-2.2c-3.34.73-4-1.64-4-1.64a3.14 3.14 0 00-1.31-1.73c-1.08-.74.08-.73.08-.73a2.5 2.5 0 011.82 1.22 2.57 2.57 0 003.5 1 2.59 2.59 0 01.76-1.62c-2.67-.31-5.47-1.33-5.47-5.9a4.63 4.63 0 011.23-3.22 4.3 4.3 0 01.12-3.17s1-.32 3.3 1.23a11.4 11.4 0 016 0c2.28-1.55 3.28-1.23 3.28-1.23a4.3 4.3 0 01.12 3.17 4.63 4.63 0 011.23 3.22c0 4.59-2.8 5.59-5.48 5.89a2.9 2.9 0 01.83 2.24v3.32c0 .32.22.69.83.58A12 12 0 0024 12c0-6.62-5.38-12-12-12z" />
                      </svg>
                    </a>

                    {/* LinkedIn */}
                    <a
                      href="https://www.linkedin.com/in/suchitra-sahoo-a60a05257/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white transition"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        width="28"
                        height="28"
                      >
                        <path d="M4.98 3.5a2.5 2.5 0 11-.01 5.001 2.5 2.5 0 01.01-5.001zM2.4 9h5.18V21H2.4V9zM9.64 9h4.96v1.71h.07a5.44 5.44 0 014.89-2.69c5.23 0 6.2 3.44 6.2 7.92V21h-5.2v-6.6c0-1.58-.03-3.6-2.2-3.6s-2.54 1.72-2.54 3.49V21H9.64V9z" />
                      </svg>
                    </a>

                    
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <form className="space-y-4" onSubmit={sendEmail}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="user_name"
                placeholder="Your name"
                required
                className="text-gray-300 w-full p-3 border border-gray-700 rounded"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your email"
                required
                className="text-gray-300 w-full p-3 border border-gray-700 rounded"
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject (optional)"
              className="text-gray-300 w-full p-3 border border-gray-700 rounded"
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Enter Your Message . . ."
              required
              className="text-gray-300 w-full p-3 border border-gray-700 rounded resize-none"
            ></textarea>

            <button
              type="submit"
              className="cursor-pointer border border-cyan-500 text-white px-6 py-3 rounded shadow-md hover:shadow-xl hover:scale-110 transition-transform duration-200 ease-in-out"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      </div>
    </FadeInFromUp>
  );
};

export default Contact;
