import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Blogs = () => {
  const blogPosts = [
    {
      title: "10 Essential E-commerce Trends to Watch in 2024",
      excerpt: "Discover the latest trends shaping online retail, from AI-powered personalization to sustainable shopping experiences.",
      author: "Sarah Chen",
      date: "Dec 15, 2023",
      readTime: "5 min read",
      category: "Trends",
      image: "🚀"
    },
    {
      title: "How to Optimize Your Product Pages for Maximum Conversions",
      excerpt: "Learn proven strategies to turn browsers into buyers with compelling product descriptions, images, and social proof.",
      author: "Mike Rodriguez",
      date: "Dec 12, 2023",
      readTime: "8 min read",
      category: "Optimization",
      image: "📈"
    },
    {
      title: "The Complete Guide to E-commerce SEO",
      excerpt: "Master the art of search engine optimization for online stores and drive organic traffic to your products.",
      author: "Emma Thompson",
      date: "Dec 10, 2023",
      readTime: "12 min read",
      category: "SEO",
      image: "🔍"
    },
    {
      title: "Building Customer Loyalty in the Digital Age",
      excerpt: "Discover effective strategies to create lasting relationships with your customers and increase lifetime value.",
      author: "David Park",
      date: "Dec 8, 2023",
      readTime: "6 min read",
      category: "Marketing",
      image: "❤️"
    },
    {
      title: "Mobile Commerce: Designing for the Smartphone Generation",
      excerpt: "Learn how to create seamless mobile shopping experiences that drive sales and customer satisfaction.",
      author: "Lisa Wang",
      date: "Dec 5, 2023",
      readTime: "7 min read",
      category: "Mobile",
      image: "📱"
    },
    {
      title: "From Zero to First Sale: A Beginner's Journey",
      excerpt: "Follow along as we document a complete beginner's journey from store setup to their first successful sale.",
      author: "Alex Johnson",
      date: "Dec 1, 2023",
      readTime: "10 min read",
      category: "Case Study",
      image: "🎯"
    }
  ];

  const categories = ["All", "Trends", "Optimization", "SEO", "Marketing", "Mobile", "Case Study"];

  return (
    <section id="blogs" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            E-commerce Insights & Tips
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay ahead of the curve with expert insights, proven strategies, and actionable tips 
            to grow your online business.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button 
              key={category}
              variant={category === "All" ? "default" : "outline"}
              className={category === "All" ? "bg-gradient-primary" : ""}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 bg-background/80 backdrop-blur-sm border-border/50"
            >
              <CardHeader className="space-y-4">
                <div className="text-6xl text-center">{post.image}</div>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                  {post.title}
                </h3>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                </div>
                <Button 
                  variant="ghost" 
                  className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-200"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-secondary rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-secondary-foreground mb-4">
            Stay Updated with E-commerce Insights
          </h3>
          <p className="text-xl text-secondary-foreground/80 mb-8 max-w-2xl mx-auto">
            Get the latest tips, trends, and strategies delivered to your inbox. 
            Join 50,000+ entrepreneurs who trust our insights.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <div className="flex-1 w-full">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg border border-border/50 bg-background/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-300 px-8">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;