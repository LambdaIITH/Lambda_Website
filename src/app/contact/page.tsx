import ContactInfo from "@/components/contact-components/ContactInfo";
import ContactForm from "@/components/contact-components/ContactForm";

export default function ContactPage() {
  return (
    <main className="relative pt-30 pb-32 px-6 grid-background min-h-screen">
      <div className="absolute inset-0 hero-glow pointer-events-none" />

      {/* Title */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-primary font-mono text-sm tracking-[0.3em] uppercase mb-4">
          Get In Touch
        </h2>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter text-white">
          Contact Lambda
        </h1>

        <p className="text-slate-400 max-w-2xl mx-auto">
          Have an idea, want to collaborate, conduct a workshop,
          or simply reach out? We'd love to hear from you.
        </p>
      </div>

      {/* Two-column layout */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8 items-start">

        <ContactInfo />

        <div className="lg:col-span-2">
          <ContactForm />
        </div>

      </div>

    </main>
  );
}