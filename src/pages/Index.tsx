import { useState } from "react";
import Header from "@/components/Header";
import EmailGenerator from "@/components/EmailGenerator";
import ExpirationTimer from "@/components/ExpirationTimer";
import EmailInbox from "@/components/EmailInbox";
import BlogSection from "@/components/BlogSection";
import FAQSection from "@/components/FAQSection";
import SEOContent from "@/components/SEOContent";
import LanguageSelector from "@/components/LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { t } = useLanguage();
  const [generatedEmail, setGeneratedEmail] = useState<string | null>(null);
  const [expirationTime, setExpirationTime] = useState<Date | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isExpired, setIsExpired] = useState(false);

  const handleEmailGenerated = (email: string, duration: number) => {
    setIsGenerating(true);
    
    // Simulate generation delay
    setTimeout(() => {
      setGeneratedEmail(email);
      setExpirationTime(new Date(Date.now() + duration * 60 * 1000));
      setIsExpired(false);
      setIsGenerating(false);
    }, 1000);
  };

  const handleExpired = () => {
    setIsExpired(true);
    setTimeout(() => {
      setGeneratedEmail(null);
      setExpirationTime(null);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      <Header />
      
      <main className="container mx-auto px-4 pb-8 space-y-6">
        <EmailGenerator 
          onEmailGenerated={handleEmailGenerated}
          generatedEmail={generatedEmail}
          isGenerating={isGenerating}
        />
        
        {expirationTime && (
          <ExpirationTimer 
            expirationTime={expirationTime}
            onExpired={handleExpired}
          />
        )}
        
        <EmailInbox 
          generatedEmail={generatedEmail}
          isExpired={isExpired}
        />
      </main>
      
      <SEOContent />
      <BlogSection />
      <FAQSection />
      
      <footer className="text-center py-6 text-sm text-muted-foreground border-t">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>{t('footer.privacy')}</p>
          <LanguageSelector />
        </div>
      </footer>
    </div>
  );
};

export default Index;
