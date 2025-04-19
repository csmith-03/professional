export default function aiorder() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-black text-white font-sans p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-8 text-center text-indigo-400">AI Order Summarization</h1>
        <p className="text-lg leading-relaxed mb-6 text-gray-300 text-center">
          Leveraging artificial intelligence to generate concise summaries of project orders for project managers, streamlining workflows and enhancing productivity.
        </p>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-4 text-indigo-300">Key Features</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-400">
            <li>AI-powered text summarization via UI Action in ServiceNow</li>
            <li>Integration with existing project management processes.</li>
            <li>Storing of summaries in custom table in ServiceNow so that PMs may revisit. </li>
          </ul>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mt-6">
          <h2 className="text-3xl font-semibold mb-4 text-indigo-300">What I Learned</h2>
          <p className="text-lg leading-relaxed text-gray-300">
            This project taught me how to use Thrive's private GPT model to summarize Change Tasks associated with specific Orders in ServiceNow. I utilized a Script Include to handle the backend logic, a UI Action to trigger the summarization process, and a custom table to store the summaries. These summaries are accessible on the order via a related list, making it easy for users to review them.
          </p>
          <p className="text-lg leading-relaxed mt-4 text-gray-300">
            Writing this code required a deep understanding of ServiceNow's platform capabilities, including scripting, table management, and UI customization. I also gained experience in integrating AI models into enterprise workflows, ensuring the solution was both efficient and user-friendly.
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