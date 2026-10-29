
import React, { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    setIsSubmitting(true);
    setStatus("");

    try {
      const response = await fetch("https://forminit.com/f/ppvygtmuwz1", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setStatus("Message sent successfully!");
      form.reset();
    } catch (error) {
      setStatus("Unable to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      name="contact"
      className="contact w-full bg-gradient-to-b from-black to-gray-800 text-white scroll-mt-20"
    >
      <div className="max-w-screen-lg mx-auto px-6 py-12 flex flex-col w-full">
        <div className="pb-6">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>

          <p className="py-6 text-gray-300">
            Submit the form below to get in touch with me.
          </p>
        </div>

        <div className="flex justify-center">
          <form
            id="contact-form"
            onSubmit={handleSubmit}
            method="POST"
            encType="multipart/form-data"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="fi-sender-fullName"
              placeholder="Enter your name"
              required
              className="p-3 bg-transparent border-2 border-gray-500 rounded-md text-white focus:outline-none focus:border-cyan-500"
            />

            <input
              type="email"
              name="fi-sender-email"
              placeholder="Enter your email"
              required
              className="my-4 p-3 bg-transparent border-2 border-gray-500 rounded-md text-white focus:outline-none focus:border-cyan-500"
            />

            <textarea
              name="fi-text-message"
              placeholder="Enter your message"
              rows="6"
              required
              className="p-3 bg-transparent border-2 border-gray-500 rounded-md text-white focus:outline-none focus:border-cyan-500 resize-y"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 my-6 mx-auto flex items-center rounded-md hover:scale-105 duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {status && (
              <p
                className="text-center mb-4"
                role="status"
                aria-live="polite"
              >
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
