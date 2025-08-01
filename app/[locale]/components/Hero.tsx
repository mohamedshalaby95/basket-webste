
import { getTranslations } from "next-intl/server";
import { Button } from "@/[locale]/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = async () => {
  const t = await getTranslations("Hero");

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-hero"></div>
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(/assets/hero-ecommerce.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

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
            {t("headlinePart1")}
            <span className="block bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">
              {t("headlineHighlight")}
            </span>
            {t("headlinePart2")}
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            {t("subheading")}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 hover:shadow-elegant transition-all duration-300 text-lg px-8 py-6"
            >
              {t("startBuilding")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-white/30 hover:bg-white/10 text-lg px-8 py-6"
            >
              <Play className="mr-2 h-5 w-5" />
              {t("watchDemo")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
