export default function liquidfiles() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-black text-white font-sans p-8 rounded-lg shadow-lg">
      <div className="max-w-4xl mx-auto">
        <section id="hero" className="text-center">
          <h1 className="text-4xl font-extrabold mb-6 text-white sm:text-5xl sm:mb-8">LiquidFiles Integration</h1>
        </section>
        <p className="text-lg leading-relaxed mb-6 text-gray-300 text-center">
          This project involved the integration of LiquidFiles with Salesforce and ServiceNow. The goal was to automate the generation of file shares in LiquidFiles when Opportunities in Salesforce reached a specific state, and to link these file shares to corresponding orders in ServiceNow.
        </p>
        <div className="bg-gradient-to-br from-gray-900 via-black to-blue-900 p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-8 text-center">Key Features</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-400">
            <li>Trigger in Salesforce to generate file shares when Opportunities hit a specific state.</li>
            <li>Linking file shares to corresponding orders in ServiceNow.</li>
            <li>Scheduled job to clean up old file shares 60 days past the closed date.</li>
            <li>Extensive use of APEX classes in Salesforce for implementation.</li>
          </ul>
        </div>
        <div className="bg-gradient-to-br from-gray-900 via-black to-blue-900 p-6 rounded-lg shadow-lg mt-6">
          <h2 className="text-3xl font-semibold mb-8 text-center">What I Learned</h2>
          <p className="text-lg leading-relaxed text-gray-300">
            This project deepened my understanding of Salesforce's APEX programming language and its integration capabilities with external systems like ServiceNow. I learned how to create efficient triggers and scheduled jobs in Salesforce to automate workflows and maintain data integrity.
          </p>
          <p className="text-lg leading-relaxed mt-4 text-gray-300">
            Additionally, I gained experience in cross-platform integration, ensuring seamless communication between Salesforce and ServiceNow. This project also enhanced my skills in designing scalable and maintainable solutions for enterprise environments.
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