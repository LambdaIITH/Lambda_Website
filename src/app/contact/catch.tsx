"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // TODO: Replace with Apps Script POST request
    console.log(form);

    alert("Form ready. Waiting for Apps Script integration.");
  };

  return (
    <main className="pt-30 pb-32 px-6 grid-background min-h-screen">

        {/* Title */}
        <div className="max-w-3xl mx-auto text-center mb-16">

        <h2 className="text-primary font-mono text-sm tracking-[0.3em] uppercase mb-4">
          Get In Touch
        </h2>

        <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter text-white">
          Contact Lambda
        </h1>

        <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Whether you have an idea, a collaboration opportunity, or a question about Lambda,
          we'd love to hear from you.
        </p>
        </div>

        <div className="max-w-3xl mx-auto">
            <div className="glass-dropdown rounded-3xl p-10 border border-primary/20">
            <div className="glass-dropdown rounded-3xl p-10 border border-primary/20">
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6 bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl"
                >
                <div>
                    <label className="block mb-2 text-sm">Name</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full bg-transparent border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary"
                      placeholder="Your Name"
                    />
                </div>

                <div>
                    <label className="block mb-2 text-sm">Email</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full bg-transparent border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary"
                      placeholder="you@example.com"
                    />
                </div>

            <div>
                <label className="block mb-2 text-sm">Subject</label>
                <input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary"
                  placeholder="Workshop, Project, Collaboration..."
                />
            </div>

            <div>
                <label className="block mb-2 text-sm">Message</label>
                <textarea
                  name="message"
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary"
                  placeholder="Tell us what's on your mind..."
                />
                </div>

                  <button
                    type="submit"
                    className="bg-primary px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition"
                >
                    Send Message
                  </button>
                </form>
            </div>
            </div>
        </div>
    </main>
  );
}