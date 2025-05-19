
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    title: "How to Optimize Website Performance",
    excerpt: "Learn the best practices for improving the speed and performance of your website.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y29kaW5nfHx8fHx8MTY4ODM3MjQyMg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300",
    date: "May 15, 2023",
    readTime: "5 min read",
    link: "#",
  },
  {
    title: "The Future of Frontend Development",
    excerpt: "Exploring upcoming trends and technologies that will shape the future of frontend development.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8dGVjaHx8fHx8fDE2ODgzNzI0ODg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300",
    date: "April 22, 2023",
    readTime: "6 min read",
    link: "#",
  },
  {
    title: "Building Accessible Web Applications",
    excerpt: "A guide to creating inclusive web experiences that work for everyone.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8ZGVzaWdufHx8fHx8MTY4ODM3MjUzMA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300",
    date: "March 10, 2023",
    readTime: "8 min read",
    link: "#",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-16">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <p className="text-sm font-medium text-portfolio-accent uppercase tracking-wider mb-2">Insights</p>
            <h2 className="text-3xl md:text-4xl font-bold text-portfolio-blue-dark">
              Web Development Tips<br />& Strategies
            </h2>
          </div>
          <Button className="mt-4 md:mt-0 bg-portfolio-accent hover:bg-portfolio-accent/90">
            View All Articles
          </Button>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="group bg-white overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 space-x-4 mb-3">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-portfolio-blue-dark mb-2 group-hover:text-portfolio-accent transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <a 
                  href={post.link} 
                  className="inline-flex items-center text-portfolio-accent font-medium hover:text-portfolio-blue-dark transition-colors"
                >
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
