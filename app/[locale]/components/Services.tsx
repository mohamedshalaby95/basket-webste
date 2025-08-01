
import { getTranslations } from "next-intl/server";
import {
  ShoppingCart,
  Palette,
  CreditCard,
  BarChart3,
  BarChartBig,
  Smartphone,
  Shield,
  Truck,
  MessageSquare,
  Globe,
  Package,
  Send,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = async () => {
  const t = await getTranslations("Services");

  const services = [
    {
      icon: ShoppingCart,
      title: t("storeSetup.title"),
      description: t("storeSetup.description"),
    },
    {
      icon: Palette,
      title: t("customDesign.title"),
      description: t("customDesign.description"),
    },
    {
      icon: CreditCard,
      title: t("payment.title"),
      description: t("payment.description"),
    },
    {
      icon: BarChart3,
      title: t("analytics.title"),
      description: t("analytics.description"),
    },
    {
      icon: BarChartBig,
      title: t("salesReports.title"),
      description: t("salesReports.description"),
    },
    {
      icon: Package,
      title: t("orderManagement.title"),
      description: t("orderManagement.description"),
    },
    {
      icon: Send,
      title: t("telegram.title"),
      description: t("telegram.description"),
    },
    {
      icon: Smartphone,
      title: t("mobile.title"),
      description: t("mobile.description"),
    },
    {
      icon: Shield,
      title: t("security.title"),
      description: t("security.description"),
    },
    {
      icon: Truck,
      title: t("shipping.title"),
      description: t("shipping.description"),
    },
    {
      icon: MessageSquare,
      title: t("marketing.title"),
      description: t("marketing.description"),
    },
    {
      icon: Globe,
      title: t("multiLang.title"),
      description: t("multiLang.description"),
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            {t("heading")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("intro")}
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
            <h3 className="text-3xl font-bold mb-4">{t("cta.title")}</h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              {t("cta.description")}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5" />
                <span>{t("cta.perk1")}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageSquare className="h-5 w-5" />
                <span>{t("cta.perk2")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

