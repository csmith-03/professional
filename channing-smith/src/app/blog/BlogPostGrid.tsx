const blogPosts = [
  {
    title: "What I've learned from my first year as a software developer",
    description: "Reflections on my first year in the industry, including challenges faced and lessons learned.",
    link: "/blog/motivation",
  },
  
];

export default function BlogPostGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 sm:px-8">
      {blogPosts.map((post, index) => (
        <div key={index} className="relative group border border-gray-700 rounded-lg overflow-hidden shadow-lg">
          
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-2 text-indigo-400">{post.title}</h3>
            <p className="text-sm text-gray-400 mb-4">{post.description}</p>
            <a
              href={post.link}
              className="text-indigo-400 hover:text-indigo-300 underline"
            >
              Read More
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}