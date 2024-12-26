import axios from "axios";
import { useState } from "react";

const apiURL = "http://localhost:3000/";

interface IContactProps {
  name: string;
  email: string;
  message: string;
}

function Contact() {
  const [formData, setFormData] = useState<IContactProps>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState<string | null>(null);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission
    setIsSubmitting(true);
    setResponseMessage(null);

    try {
      const response = await axios.post(`${apiURL}send-mail`, formData);
      if (response.data) {
        setResponseMessage("The message was sent successfully!");
        console.log("The message was sent successfully.");
      }
    } catch (error) {
      console.error("There was an error in reaching the API:", error);
      setResponseMessage("Failed to send the message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-4 md:p-8 h-screen">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 md:mb-8">
        Contact Me
      </h2>
      <div className="w-full max-w-md md:max-w-2xl bg-white p-6 md:p-8 rounded-lg shadow-md">
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-4 md:mb-6">
            <label
              htmlFor="name"
              className="block text-base md:text-lg font-medium text-gray-800 mb-2"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-3 md:p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          {/* Email Field */}
          <div className="mb-4 md:mb-6">
            <label
              htmlFor="email"
              className="block text-base md:text-lg font-medium text-gray-800 mb-2"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 md:p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {/* Message Field */}
          <div className="mb-4 md:mb-6">
            <label
              htmlFor="message"
              className="block text-base md:text-lg font-medium text-gray-800 mb-2"
            >
              Your Message
            </label>
            <textarea
              id="message"
              className="w-full p-3 md:p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              rows={4}
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-red-500 text-white text-base md:text-lg font-medium py-2 md:py-3 rounded-lg shadow-md hover:bg-gray-800 transition duration-300"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
        {responseMessage && (
          <p className="mt-4 text-center text-lg font-medium text-gray-700">
            {responseMessage}
          </p>
        )}
      </div>
    </div>
  );
}

export default Contact;
