function Contact() {
    return (
      <div className="flex flex-col items-center justify-center bg-gray-100 p-8 h-screen">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">
          Contact Me
        </h2>
        <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-md">
          <form>
            {/* Name Field */}
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-lg font-medium text-gray-800 mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Enter your name"
              />
            </div>
  
            {/* Email Field */}
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-lg font-medium text-gray-800 mb-2"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Enter your email"
              />
            </div>
  
            {/* Message Field */}
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-lg font-medium text-gray-800 mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                rows={6}
                placeholder="Enter your message"
              ></textarea>
            </div>
  
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-black text-white text-lg font-medium py-3 rounded-lg shadow-md hover:bg-gray-800 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    );
  }
  
  export default Contact;
  