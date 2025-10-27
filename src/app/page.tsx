export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 text-center">
      <div className="p-8 rounded-2xl shadow-md bg-white max-w-lg">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Lambda — IIT Hyderabad
        </h1>
        <p className="text-gray-600 mb-6">
          Welcome to Lambda's official site. This page is under construction —
          exciting things are on the way.
        </p>
        <div className="flex items-center justify-center space-x-4">
          <a
            href="#"
            className="px-4 py-2 bg-black text-white rounded-xl hover:bg-gray-800 transition"
          >
            Learn More
          </a>
          <a
            href="#"
            className="px-4 py-2 border border-gray-400 text-gray-700 rounded-xl hover:bg-gray-100 transition"
          >
            Contact Us
          </a>
        </div>
      </div>

      <footer className="absolute bottom-4 text-gray-400 text-sm">
        © {new Date().getFullYear()} Lambda · IIT Hyderabad
      </footer>
    </main>
  );
}
