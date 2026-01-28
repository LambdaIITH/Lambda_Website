export default function Terms() {
  return (
    <div className="py-[10vh] md:py-[10vw] min-h-screen bg-linear-to-br from-[#16001F] to-[#010101] px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-white">Terms of Use</h1>
        <p className="text-gray-300 mb-8">Last updated: Jan 17th, 2026</p>

        <div className="space-y-8 text-gray-200">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p>
              Welcome to Lambda IITH, the official software development club of
              IIT Hyderabad. By accessing or using our software, including but
              not limited to IITH Dashboard, you agree to comply with and be
              bound by these Terms of Use. Our software is designed to
              streamline campus life by offering features such as cab pooling,
              real-time transport and mess schedules, and lost-and-found item
              management.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Eligibility</h2>
            <p>
              To register and use authentication-based services in the IITH
              Dashboard, you must be a registered student, faculty member, or
              staff of IIT Hyderabad. However, several services that do not
              require authentication, such as bus timings and maps, are
              accessible to all users without registration or login.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Acceptable Use</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                You agree to use our software for lawful and ethical purposes
                only.
              </li>
              <li>
                You shall not engage in any activity that disrupts, harms, or
                compromises the integrity of the platform or its users.
              </li>
              <li>
                Unauthorized access, data scraping, reverse engineering, or any
                form of exploitation is strictly prohibited.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Content Ownership</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Any content you submit remains your property. However, by
                submitting it, you grant Lambda IITH a non-exclusive,
                royalty-free license to use, distribute, and display it for
                operational purposes.
              </li>
              <li>
                Lambda IITH reserves the right to remove any content deemed
                inappropriate or in violation of these terms.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Privacy Policy</h2>
            <p>
              Your use of our software is also governed by our Privacy Policy,
              which outlines how we collect, use, and protect your data. We are
              committed to maintaining user privacy and security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              6. Limitation of Liability
            </h2>
            <p>
              Lambda IITH is not responsible for any direct, indirect, or
              incidental damages arising from the use of our software. We do not
              guarantee uninterrupted or error-free operation of our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Modifications</h2>
            <p>
              We reserve the right to update these terms at any time. Continued
              use of our software after changes implies acceptance of the
              updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. Contact</h2>
            <p>
              For any questions, support, or concerns regarding these terms,
              contact us at support@iith.dev or visit our contact page at
              iith.dev/contact-us.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
