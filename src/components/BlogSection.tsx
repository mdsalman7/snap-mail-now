import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight } from "lucide-react";

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Why Temporary Email Addresses Are Essential for Privacy",
      excerpt: "Learn how disposable emails protect your personal information and reduce spam in your primary inbox.",
      author: "Privacy Expert",
      date: "2024-01-15",
      category: "Privacy",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "The Complete Guide to Email Testing for Developers",
      excerpt: "Best practices for testing email functionality without cluttering your real email accounts.",
      author: "Tech Team",
      date: "2024-01-10",
      category: "Development",
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "Understanding Email Security: Encryption vs Privacy",
      excerpt: "Explore the difference between email encryption and privacy protection in modern digital communication.",
      author: "Security Team",
      date: "2024-01-05",
      category: "Security",
      readTime: "6 min read"
    }
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Latest from Our Blog</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Stay informed about email privacy, security best practices, and the latest updates to our temporary email service.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <Card key={post.id} className="hover:shadow-lg transition-shadow cursor-pointer group">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <Badge variant="secondary">{post.category}</Badge>
                <span className="text-sm text-muted-foreground">{post.readTime}</span>
              </div>
              <CardTitle className="group-hover:text-primary transition-colors">
                {post.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-4 text-primary font-medium group-hover:gap-3 transition-all">
                <span>Read more</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;