import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const blogPosts = [
    {
      title: "Microservices Architecture Patterns: A Deep Dive",
      excerpt: "Exploring the most effective patterns for building resilient microservices, including circuit breakers, saga patterns, and event sourcing.",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      tags: ["Microservices", "Architecture", "Design Patterns"]
    },
    {
      title: "Building Scalable APIs: Best Practices from the Trenches",
      excerpt: "Learn how to design APIs that scale to millions of requests while maintaining performance and reliability.",
      date: "Nov 28, 2024", 
      readTime: "12 min read",
      tags: ["API Design", "Scalability", "Performance"]
    },
    {
      title: "Cloud-Native Security: Zero Trust Architecture",
      excerpt: "Implementing zero trust principles in modern cloud architectures to enhance security posture and reduce attack surfaces.",
      date: "Nov 10, 2024",
      readTime: "15 min read", 
      tags: ["Security", "Cloud", "Zero Trust"]
    },
    {
      title: "Event-Driven Architecture: When and How to Use It",
      excerpt: "Understanding the benefits and challenges of event-driven systems, with real-world implementation examples.",
      date: "Oct 25, 2024",
      readTime: "10 min read",
      tags: ["Event-Driven", "Architecture", "Messaging"]
    },
    {
      title: "Database Sharding Strategies for High-Scale Applications", 
      excerpt: "Comprehensive guide to database sharding approaches, trade-offs, and implementation strategies for massive scale.",
      date: "Oct 8, 2024",
      readTime: "14 min read",
      tags: ["Database", "Sharding", "Scale"]
    },
    {
      title: "Observability in Distributed Systems: Metrics, Logs, and Traces",
      excerpt: "Building comprehensive observability into your distributed systems for better monitoring and debugging.",
      date: "Sep 20, 2024", 
      readTime: "11 min read",
      tags: ["Observability", "Monitoring", "Distributed Systems"]
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Tech Blog</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Insights, experiences, and deep dives into modern software architecture,
            system design, and engineering best practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <Card key={index} className="bg-background shadow-card hover:shadow-elegant transition-smooth cursor-pointer group">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-sm text-muted-foreground">{post.date}</span>
                  <span className="text-sm text-primary">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold group-hover:text-primary transition-smooth leading-tight">
                  {post.title}
                </h3>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="inline-block px-3 py-1 text-xs bg-primary/10 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg">
            View All Blog Posts
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;