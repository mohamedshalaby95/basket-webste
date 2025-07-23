import { Target, Users, Lightbulb, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To democratize e-commerce by providing powerful, user-friendly tools that enable anyone to build and grow a successful online business."
    },
    {
      icon: Lightbulb,
      title: "Our Vision",
      description: "A world where every entrepreneur has access to professional-grade e-commerce technology, regardless of their technical background or budget."
    },
    {
      icon: Users,
      title: "Our Community",
      description: "We're building a supportive ecosystem of store owners, sharing knowledge, strategies, and celebrating each other's successes."
    },
    {
      icon: Award,
      title: "Our Commitment",
      description: "We're committed to continuous innovation, exceptional support, and helping our customers achieve their business goals."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            About StoreBuilder
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're passionate about empowering entrepreneurs to turn their ideas into thriving online businesses. 
            Founded by e-commerce veterans, we understand the challenges of building an online store.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {values.map((value, index) => (
            <Card key={index} className="bg-background/50 backdrop-blur-sm border-border/50 hover:shadow-card-hover transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <value.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-secondary rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-secondary-foreground mb-6">
            Join Thousands of Successful Store Owners
          </h3>
          <p className="text-xl text-secondary-foreground/80 mb-8 max-w-2xl mx-auto">
            From small startups to enterprise retailers, businesses worldwide trust StoreBuilder 
            to power their online success. Your journey starts here.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-secondary-foreground/70">New Stores Monthly</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">150+</div>
              <div className="text-secondary-foreground/70">Countries Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-secondary-foreground/70">Expert Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;