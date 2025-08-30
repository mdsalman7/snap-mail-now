import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const FAQSection = () => {
  const { t } = useLanguage();
  
  const faqs = [
    {
      id: "item-1",
      question: t('faq.q1'),
      answer: t('faq.a1')
    },
    {
      id: "item-2",
      question: t('faq.q2'),
      answer: t('faq.a2')
    },
    {
      id: "item-3",
      question: t('faq.q3'),
      answer: t('faq.a3')
    },
    {
      id: "item-4",
      question: t('faq.q4'),
      answer: t('faq.a4')
    }
  ];

  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-12">
      <Card>
        <CardHeader className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <HelpCircle className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold">{t('faq.title')}</h2>
          </div>
          <p className="text-muted-foreground">
            Everything you need to know about our temporary email service
          </p>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id}>
                <AccordionTrigger className="text-left hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </section>
  );
};

export default FAQSection;