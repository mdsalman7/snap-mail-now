import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    {
      id: "item-1",
      question: "How long do temporary email addresses last?",
      answer: "You can set the duration anywhere from 10 minutes to 1 hour. Once the time expires, the email address and all received messages are permanently deleted for your privacy."
    },
    {
      id: "item-2",
      question: "Is it safe to use temporary emails for account verification?",
      answer: "Yes, our temporary emails are perfect for account verification. They receive emails in real-time and are automatically deleted after expiration, protecting your privacy."
    },
    {
      id: "item-3",
      question: "Can I extend the duration of my temporary email?",
      answer: "Currently, you need to generate a new email address if you need more time. We're working on an extension feature for future updates."
    },
    {
      id: "item-4",
      question: "Do you store any personal information?",
      answer: "No, we don't require any sign-up or personal information. All emails are stored temporarily in memory and automatically deleted after expiration."
    },
    {
      id: "item-5",
      question: "What types of emails can I receive?",
      answer: "You can receive any type of email including verification emails, newsletters, and notifications. However, we recommend using temporary emails only for non-sensitive communications."
    },
    {
      id: "item-6",
      question: "Can I reply to emails received in my temporary inbox?",
      answer: "Currently, our service is receive-only. You cannot send replies from temporary email addresses. This is by design to maintain privacy and prevent spam."
    },
    {
      id: "item-7",
      question: "How many emails can I receive?",
      answer: "There's no limit to the number of emails you can receive during the active period of your temporary email address."
    },
    {
      id: "item-8",
      question: "Is the service free to use?",
      answer: "Yes, our temporary email service is completely free to use. There are no hidden charges or premium features."
    }
  ];

  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-12">
      <Card>
        <CardHeader className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <HelpCircle className="h-6 w-6 text-primary" />
            <CardTitle className="text-3xl font-bold">Frequently Asked Questions</CardTitle>
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