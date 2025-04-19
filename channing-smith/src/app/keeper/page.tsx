export default function keeper() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-black text-white font-sans p-8 rounded-lg shadow-lg">
      <div className="max-w-4xl mx-auto">
      <section id="hero" className="text-center">
      <h1 className="text-4xl font-extrabold mb-6 text-white sm:text-5xl sm:mb-8">Keeper Integration</h1>
      </section>
        <p className="text-lg leading-relaxed mb-6 text-gray-300 text-center">
          This project involved the integration of Keeper Security with our internal systems to enhance password management and reporting capabilities. The goal was to provide our clients with a streamlined process for identifying password usage by our service team members, ensuring transparency and security in password management.
        </p>
        
        <div className="bg-gradient-to-br from-gray-900 via-black to-blue-900 p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-8 text-center">Key Features</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-400">
            <li>On-demand reporting to identify password usage by service team members.</li>
            <li>Integration with Keeper Security for secure password management.</li>
            <li>Streamlined process for clients to request and receive detailed reports.</li>
          </ul>
        </div>
        <div className="bg-gradient-to-br from-gray-900 via-black to-blue-900 p-6 rounded-lg shadow-lg mt-6">
          <h2 className="text-3xl font-semibold mb-8 text-center">What I Learned</h2>
          <p className="text-lg leading-relaxed text-gray-300">
            This project enhanced my understanding of secure password management and reporting processes. I learned how to integrate Keeper Security with our internal systems to provide real-time, actionable insights for our clients.
          </p>
          <p className="text-lg leading-relaxed mt-4 text-gray-300">
            Additionally, I gained experience in creating attachable PDF reports in ServiceNow.
          </p>
        </div>
        <div className="text-center mt-8">
          <a
            href="/"
            className="inline-block px-6 py-3 bg-indigo-500 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-400 transition"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}