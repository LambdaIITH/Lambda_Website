"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbxKtS4S5EMxFkd8vwEj8Q88-9bU7AWb7-DKRzScorKKemd5Z-mlqHJIKT3dp8etPp7h/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    console.log("Message sent successfully!");

    // Optional: Clear the form after submission
    // setFormData({
    //   name: "",
    //   email: "",
    //   phone: "",
    //   subject: "",
    //   message: "",
    // });

  } catch (error) {
    console.error("Error submitting form:", error);
  }
};

  return (
    <div
      className="
        glass-card
        rounded-3xl
        p-8
        relative
        overflow-hidden
        "
    >
      <div className="absolute -top-24 -right-24 size-60 bg-primary/20 rounded-full blur-[90px] animate-morph-blob pointer-events-none" />
      <h2 className="text-3xl font-bold mb-2">
        Send us a Message
      </h2>

      <p className="text-slate-400 mb-8">
        Fill out the form below and we'll get back to you as soon as possible.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Row 1 */}

        <div className="grid md:grid-cols-2 gap-6">

          <div>
            <label className="block mb-2 text-sm text-slate-300">
              Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-all focus:border-primary focus:shadow-[0_0_15px_rgba(148,51,236,0.25)]"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm text-slate-300">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-all focus:border-primary focus:shadow-[0_0_15px_rgba(148,51,236,0.25)]"
            />
          </div>

        </div>

        {/* Row 2 */}

        <div className="grid md:grid-cols-2 gap-6">

          <div>
            <label className="block mb-2 text-sm text-slate-300">
              Phone
            </label>

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 XXXXX XXXXX"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-all focus:border-primary focus:shadow-[0_0_15px_rgba(148,51,236,0.25)]"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm text-slate-300">
              Subject
            </label>

            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="Subject"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-all focus:border-primary focus:shadow-[0_0_15px_rgba(148,51,236,0.25)]"
            />
          </div>

        </div>

        {/* Message */}

        <div>
          <label className="block mb-2 text-sm text-slate-300">
            Message
          </label>

          <textarea
            rows={6}
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Write your message..."
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none resize-none transition-all focus:border-primary focus:shadow-[0_0_15px_rgba(148,51,236,0.25)]"
          />
        </div>

        <button
          type="submit"
          className="
            bg-primary
            text-white
            px-8
            py-3
            rounded-xl
            font-bold
            hover:shadow-[0_0_30px_rgba(148,51,236,0.5)]
            transition-all
            hover:scale-105
            cursor-pointer
          "
        >
          Send Message
        </button>

      </form>
    </div>
  );
}