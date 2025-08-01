// import { Check, Star, Zap } from "lucide-react";
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
// } from "@/[locale]/components/ui/card";
// import { Button } from "@/[locale]/components/ui/button";

// const Pricing = () => {
//   const plans = [
//     {
//       name: "Starter",
//       price: "600 EGP",
//       period: "/month",
//       description: "Perfect for new entrepreneurs and small businesses",
//       features: [
//         "Up to 100 products",
//         "Subdomain",
//         "Basic themes",
//         "Payment processing",
//         "Order management",
//         "Mobile responsive",
//         "SSL certificate",
//         "Basic analytics",
//         "Basic SEO optimization",
//       ],
//       popular: false,
//       cta: "Start Free Trial",
//     },
//     {
//       name: "Professional",
//       price: "850 EGP",
//       period: "/month",
//       description: "Ideal for growing businesses and established stores",
//       features: [
//         "Up to 1,000 products",
//         "Custom domain",
//         "Basic themes",
//         "Payment processing",
//         "Inventory management",
//         "Priority support",
//         "Professional SEO optimization",
//         "Advanced analytics",
//       ],
//       popular: true,
//       cta: "Start Free Trial",
//     },
//     {
//       name: "Enterprise",
//       price: "1200 EGP",
//       period: "/month",
//       description: "For large businesses and high-volume stores",
//       features: [
//         "Unlimited products",
//         "Custom design & development",
//         "Payment processing",
//         "Advanced inventory & warehouse",
//         "API access & integrations",
//         "Advanced reporting suite",
//         "Custom integrations",
//         "immediately support",
//         "Professional SEO optimization",
//         "Advanced analytics",
//         "Marketing automation",
//       ],
//       popular: false,
//       cta: "Contact Sales",
//     },
//   ];

//   return (
//     <section id="pricing" className="py-20 bg-background">
//       <div className="container mx-auto px-4 lg:px-6">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
//             Simple, Transparent Pricing
//           </h2>
//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//             Choose the perfect plan for your business. All plans include a 14-day free trial
//             and 30-day money-back guarantee.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
//           {plans.map((plan, index) => (
//             <Card
//               key={index}
//               className={`relative hover:shadow-elegant transition-all duration-300 ${
//                 plan.popular
//                   ? 'border-primary shadow-glow scale-105'
//                   : 'border-border/50 hover:-translate-y-2'
//               } bg-gradient-card`}
//             >
//               {plan.popular && (
//                 <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
//                   <div className="bg-gradient-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
//                     <Star className="h-4 w-4" />
//                     <span>Most Popular</span>
//                   </div>
//                 </div>
//               )}
              
//               <CardHeader className="text-center pb-8 pt-8">
//                 <CardTitle className="text-2xl font-bold text-foreground mb-2">
//                   {plan.name}
//                 </CardTitle>
//                 <div className="mb-4">
//                   <span className="text-5xl font-bold text-foreground">{plan.price}</span>
//                   <span className="text-xl text-muted-foreground">{plan.period}</span>
//                 </div>
//                 <p className="text-muted-foreground">
//                   {plan.description}
//                 </p>
//               </CardHeader>
              
//               <CardContent className="space-y-6">
//                 <ul className="space-y-4">
//                   {plan.features.map((feature, featureIndex) => (
//                     <li key={featureIndex} className="flex items-center space-x-3">
//                       <Check className="h-5 w-5 text-primary flex-shrink-0" />
//                       <span className="text-foreground">{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
                
//                 <Button
//                   className={`w-full py-6 text-lg font-semibold ${
//                     plan.popular
//                       ? 'bg-gradient-primary hover:shadow-glow'
//                       : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
//                   } transition-all duration-300`}
//                 >
//                   {plan.cta}
//                   {plan.popular && <Zap className="ml-2 h-5 w-5" />}
//                 </Button>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         {/* Additional Info */}
//         <div className="mt-16 text-center">
//           <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-primary-foreground">
//             <h3 className="text-3xl font-bold mb-4">
//               All Plans Include
//             </h3>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
//               <div className="flex flex-col items-center">
//                 <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
//                   <Check className="h-6 w-6" />
//                 </div>
//                 <h4 className="font-semibold mb-2">14-Day Free Trial</h4>
//                 <p className="text-primary-foreground/80 text-sm">
//                   Test all features risk-free
//                 </p>
//               </div>
//               <div className="flex flex-col items-center">
//                 <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
//                   <Check className="h-6 w-6" />
//                 </div>
//                 <h4 className="font-semibold mb-2">No Setup Fees</h4>
//                 <p className="text-primary-foreground/80 text-sm">
//                   Get started immediately
//                 </p>
//               </div>
//               <div className="flex flex-col items-center">
//                 <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
//                   <Check className="h-6 w-6" />
//                 </div>
//                 <h4 className="font-semibold mb-2">Cancel Anytime</h4>
//                 <p className="text-primary-foreground/80 text-sm">
//                   No long-term commitments
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Pricing;

"use client";

import { useTranslations } from "next-intl";
import { Check, Star, Zap } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/[locale]/components/ui/card";
import { Button } from "@/[locale]/components/ui/button";

const Pricing = () => {
  const t = useTranslations("Pricing");
  const plans = t.raw("plans") as {
    name: string;
    price: string;
    period: string;
    description: string;
    features: string[];
    cta: string;
  }[];

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            {t("title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => {
            const isPopular = index === 1; // You can flag this in JSON if you prefer
            return (
              <Card
                key={index}
                className={`relative hover:shadow-elegant transition-all duration-300 ${
                  isPopular
                    ? "border-primary shadow-glow scale-105"
                    : "border-border/50 hover:-translate-y-2"
                } bg-gradient-card`}
              >
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                      <Star className="h-4 w-4" />
                      <span>{t("mostPopular")}</span>
                    </div>
                  </div>
                )}

                <CardHeader className="text-center pb-8 pt-8">
                  <CardTitle className="text-2xl font-bold text-foreground mb-2">
                    {plan.name}
                  </CardTitle>
                  <div className="mb-4">
                    <span className="text-5xl font-bold text-foreground">
                      {plan.price}
                    </span>
                    <span className="text-xl text-muted-foreground">
                      {plan.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{plan.description}</p>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center space-x-3 rtl:space-x-reverse"
                      >
                        <Check className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full py-6 text-lg font-semibold ${
                      isPopular
                        ? "bg-gradient-primary hover:shadow-glow"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    } transition-all duration-300`}
                  >
                    {plan.cta}
                    {isPopular && <Zap className="ml-2 h-5 w-5" />}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-primary-foreground">
            <h3 className="text-3xl font-bold mb-4">{t("allPlansInclude")}</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <Check className="h-6 w-6" />
                </div>
                <h4 className="font-semibold mb-2">{t("trial.title")}</h4>
                <p className="text-primary-foreground/80 text-sm">
                  {t("trial.desc")}
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <Check className="h-6 w-6" />
                </div>
                <h4 className="font-semibold mb-2">{t("noSetup.title")}</h4>
                <p className="text-primary-foreground/80 text-sm">
                  {t("noSetup.desc")}
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <Check className="h-6 w-6" />
                </div>
                <h4 className="font-semibold mb-2">{t("cancel.title")}</h4>
                <p className="text-primary-foreground/80 text-sm">
                  {t("cancel.desc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
