import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (!name || !message) {
      alert("Please fill in all fields.");
      return;
    }

    alert(`Thanks, ${name}! Your message has been received.`);

    setName("");
    setMessage("");
  };

  return (
    <section
      id="contact"
      className="max-w-5xl mx-auto px-6 py-24"
    >
      <div className="max-w-xl mx-auto">
        <p className="text-sm font-semibold uppercase tracking-widest text-green-500">
          Contact
        </p>

        <h2 className="mt-3 text-4xl font-bold text-gray-900">
          Let's talk.
        </h2>

        <p className="mt-4 text-gray-500">
          Have a question or just want to say hello?
          Send me a message below.
        </p>

        <div className="mt-8 space-y-4">

          {/* Name */}
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl border border-gray-200 px-4 py-3
            outline-none focus:border-green-500 transition"
          />

          {/* Message */}
          <textarea
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            className="w-full rounded-xl border border-gray-200 px-4 py-3
            outline-none focus:border-green-500 transition resize-none"
          />

          {/* Button */}
          <button
            onClick={handleSubmit}
            className="rounded-full bg-gray-900 px-7 py-3
            text-sm font-medium text-white
            hover:bg-green-500 transition-all duration-300"
          >
            Send Message
          </button>

        </div>
      </div>
    </section>
  );
}

export default Contact;