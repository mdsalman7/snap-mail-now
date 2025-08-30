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
      
      <main className="container mx-auto px-4 pb-8 space-y-6" id="email-generator">
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
      
      <section id="privacy">
        <SEOContent />
      </section>
      <section id="blog">
        <BlogSection />
      </section>
      <section id="faq">
        <FAQSection />
      </section>
      
      <footer className="border-t mt-12">
        <div className="container mx-auto px-4 py-8">
          {/* Footer Resources */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-4 text-primary">{t('nav.resources')}</h3>
              <div className="space-y-2">
                <a href="/privacy-policy" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t('nav.external.privacy')}
                </a>
                <a href="/terms-of-service" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t('nav.external.terms')}
                </a>
                <a href="/about" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t('nav.external.about')}
                </a>
                <a href="/contact" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t('nav.external.contact')}
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-primary">Features</h3>
              <div className="space-y-2">
                <a href="#email-generator" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  Email Generator
                </a>
                <a href="#privacy" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacy Protection
                </a>
                <a href="#faq" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  Help & Support
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-primary">Learn More</h3>
              <div className="space-y-2">
                <a href="#blog" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  Blog & Updates
                </a>
                <a href="#privacy" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  How It Works
                </a>
                <a href="#faq" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-primary">SnapMailNow</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Free temporary email service for privacy protection and secure communications.
              </p>
              <LanguageSelector />
            </div>
          </div>
          
          {/* Copyright */}
          <div className="pt-6 border-t text-center">
            <p className="text-sm text-muted-foreground">{t('footer.privacy')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
