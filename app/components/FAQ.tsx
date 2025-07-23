import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How quickly can I set up my online store?",
      answer: "You can have a fully functional online store up and running in less than 30 minutes. Our intuitive setup wizard guides you through product uploads, payment configuration, and store customization. Most users complete their basic setup during their first session."
    },
    {
      question: "Do I need technical skills to use StoreBuilder?",
      answer: "Not at all! StoreBuilder is designed for entrepreneurs of all technical backgrounds. Our drag-and-drop interface, pre-built templates, and guided setup process make it easy for anyone to create a professional online store without coding knowledge."
    },
    {
      question: "What payment methods are supported?",
      answer: "We support all major payment processors including Stripe, PayPal, Square, and over 100 local payment gateways worldwide. Your customers can pay with credit cards, debit cards, digital wallets (Apple Pay, Google Pay), bank transfers, and buy-now-pay-later options."
    },
    {
      question: "Can I use my own domain name?",
      answer: "Yes! All paid plans include custom domain support. You can either connect an existing domain or purchase a new one through our platform. We'll handle all the technical setup including SSL certificates and DNS configuration."
    },
    {
      question: "Is there a transaction fee?",
      answer: "We don't charge transaction fees on any of our plans. You only pay the standard processing fees from your chosen payment provider (typically 2.9% + 30¢ per transaction). This means more money stays in your pocket."
    },
    {
      question: "How does the 14-day free trial work?",
      answer: "Your free trial includes access to all features of your chosen plan. No credit card required to start. You can build your store, add products, and test everything. If you're not satisfied, simply don't upgrade and your trial will end automatically."
    },
    {
      question: "Can I change my plan later?",
      answer: "Absolutely! You can upgrade or downgrade your plan at any time from your dashboard. Changes take effect immediately, and we'll pro-rate any billing differences. There are no penalties for changing plans."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We offer 24/7 support via live chat and email. Starter plan users get email support with response within 24 hours. Professional and Enterprise users get priority support with faster response times. Enterprise customers also get a dedicated account manager."
    },
    {
      question: "Can I sell digital products?",
      answer: "Yes! Our platform supports both physical and digital product sales. For digital products, we provide secure download links, license key generation, and automatic delivery upon payment. You can sell ebooks, software, courses, music, and more."
    },
    {
      question: "Is my store mobile-friendly?",
      answer: "All our themes are fully responsive and mobile-optimized. Your store will look great and function perfectly on smartphones, tablets, and desktops. We also provide mobile-specific features like one-click checkout and mobile payment options."
    },
    {
      question: "How secure is the platform?",
      answer: "Security is our top priority. We provide SSL certificates, PCI DSS compliance, regular security audits, DDoS protection, and encrypted data storage. Customer payment information is never stored on our servers - it goes directly to secure payment processors."
    },
    {
      question: "Can I integrate with other tools?",
      answer: "Yes! We offer integrations with popular tools including Google Analytics, Facebook Pixel, Mailchimp, Klaviyo, QuickBooks, inventory management systems, and hundreds of apps through our marketplace. Enterprise plans include custom API access."
    }
  ];

  return (
    <section id="faqs" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Got questions? We've got answers. Here are the most common questions about 
            building and running your online store with StoreBuilder.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-background/80 backdrop-blur-sm rounded-lg border border-border/50 px-6"
              >
                <AccordionTrigger className="text-left hover:text-primary transition-colors duration-200 py-6">
                  <span className="font-semibold text-lg">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Still have questions CTA */}
        <div className="mt-16 text-center">
          <div className="bg-secondary rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-secondary-foreground mb-4">
              Still Have Questions?
            </h3>
            <p className="text-xl text-secondary-foreground/80 mb-8 max-w-2xl mx-auto">
              Our support team is here to help. Get in touch and we'll answer 
              any questions about building your online store.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-gradient-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:shadow-glow transition-all duration-300">
                Contact Support
              </button>
              <button className="border border-secondary-foreground/20 text-secondary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-secondary-foreground/10 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;