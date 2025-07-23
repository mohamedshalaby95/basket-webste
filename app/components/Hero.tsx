import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "../../public/assets/hero-ecommerce.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(/assets/hero-ecommerce.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float"></div>
      <div
        className="absolute top-40 right-20 w-32 h-32 bg-accent/20 rounded-full animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-40 left-20 w-16 h-16 bg-primary-glow/20 rounded-full animate-float"
        style={{ animationDelay: "4s" }}
      ></div>

      <div className="relative z-10 container mx-auto px-4 lg:px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Launch Your
            <span className="block bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">
              Dream Store
            </span>
            in Minutes
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Transform your business ideas into thriving online stores with our
            powerful, easy-to-use e-commerce platform. No coding required.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 hover:shadow-elegant transition-all duration-300 text-lg px-8 py-6"
            >
              Start Building Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-white/30  hover:bg-white/10 text-lg px-8 py-6"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">10,000+</div>
              <div className="text-white/80">Active Stores</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">$50M+</div>
              <div className="text-white/80">Revenue Generated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">99.9%</div>
              <div className="text-white/80">Uptime</div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;