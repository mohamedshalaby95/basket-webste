
"use client";

import { useTranslations } from "next-intl";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/[locale]/components/ui/accordion";

const FAQ = () => {
  const t = useTranslations("FAQ");
  const faqs = t.raw("faqs") as { question: string; answer: string }[];

  return (
    <section id="faqs" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            {t("title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("subtitle")}
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

        <div className="mt-16 text-center">
          <div className="bg-secondary rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-secondary-foreground mb-4">
              {t("stillHaveQuestions")}
            </h3>
            <p className="text-xl text-secondary-foreground/80 mb-8 max-w-2xl mx-auto">
              {t("stillHaveQuestionsDesc")}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-gradient-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:shadow-glow transition-all duration-300">
                {t("contactSupport")}
              </button>
              <button className="border border-secondary-foreground/20 text-secondary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-secondary-foreground/10 transition-all duration-300">
                {t("scheduleDemo")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
