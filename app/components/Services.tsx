import { 
  ShoppingCart, 
  Palette, 
  CreditCard, 
  BarChart3, 
  Smartphone, 
  Shield,
  Truck,
  MessageSquare,
  Globe
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: ShoppingCart,
      title: "Complete Store Setup",
      description: "Ready-to-use templates, product catalogs, and inventory management systems to get you started instantly."
    },
    {
      icon: Palette,
      title: "Custom Design Tools",
      description: "Drag-and-drop designer with professional themes, custom branding, and mobile-responsive layouts."
    },
    {
      icon: CreditCard,
      title: "Payment Processing",
      description: "Secure payment gateways supporting all major credit cards, PayPal, Apple Pay, and local payment methods."
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Real-time sales tracking, customer behavior analysis, and detailed performance reports to grow your business."
    },
    {
      icon: Smartphone,
      title: "Mobile Optimization",
      description: "Fully responsive designs that look perfect on all devices, with mobile-first shopping experiences."
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "SSL certificates, PCI compliance, GDPR ready, and enterprise-grade security for customer data protection."
    },
    {
      icon: Truck,
      title: "Shipping Integration",
      description: "Automated shipping calculations, label printing, tracking integration with major carriers worldwide."
    },
    {
      icon: MessageSquare,
      title: "Marketing Tools",
      description: "Email campaigns, social media integration, SEO optimization, and customer retention tools built-in."
    },
    {
      icon: Globe,
      title: "Multi-channel Selling",
      description: "Sell across multiple platforms - your website, Amazon, eBay, social media, and marketplaces."
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From store creation to customer acquisition, we provide all the tools and services 
            you need to build, launch, and scale your e-commerce business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 border-border/50 bg-gradient-card"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse-glow transition-all duration-300">
                  <service.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-primary-foreground">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of entrepreneurs who have built successful online stores with our platform. 
              Your success story starts today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5" />
                <span>30-day money-back guarantee</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageSquare className="h-5 w-5" />
                <span>24/7 expert support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;