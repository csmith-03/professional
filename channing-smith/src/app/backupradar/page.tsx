export default function backupradar() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-black text-white font-sans p-8 rounded-lg shadow-lg">
      <div className="max-w-4xl mx-auto">
        <section id="hero" className="text-center">
          <h1 className="text-4xl font-extrabold mb-6 text-white sm:text-5xl sm:mb-8">Backup Radar Integration</h1>
        </section>
        <p className="text-lg leading-relaxed mb-6 text-gray-300 text-center">
          A custom integration to view backup monitoring and reporting for clients inside ServiceNow. This project streamlined the process of identifying backup failures and successes, so that engineers have the data easily accessible to them inside ServiceNow.
        </p>
        <div className="bg-gradient-to-br from-gray-900 via-black to-blue-900 p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-8 text-center">Key Features</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-400">
            <li>Custom table to track backup performance.</li>
            <li>Automated pull of backup jobs per client.</li>
          </ul>
        </div>
        <div className="bg-gradient-to-br from-gray-900 via-black to-blue-900 p-6 rounded-lg shadow-lg mt-6">
          <h2 className="text-3xl font-semibold mb-8 text-center">What I Learned</h2>
          <p className="text-lg leading-relaxed text-gray-300">
            This project enhanced my understanding of scripted REST endpoints and how to integrate external systems with ServiceNow. I  create a custom table to store backup performance data, which allowed for better tracking and reporting of backup jobs.
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