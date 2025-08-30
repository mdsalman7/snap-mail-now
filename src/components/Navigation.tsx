import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Home, Mail, Shield, Clock, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Navigation = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { icon: Home, label: t('nav.home'), href: "#top" },
    { icon: Mail, label: t('nav.generator'), href: "#email-generator" },
    { icon: Shield, label: t('nav.privacy'), href: "#privacy" },
    { icon: Clock, label: t('nav.faq'), href: "#faq" },
    { icon: Zap, label: t('nav.blog'), href: "#blog" }
  ];

  const externalLinks = [
    { label: t('nav.external.privacy'), href: "/privacy-policy" },
    { label: t('nav.external.terms'), href: "/terms-of-service" },
    { label: t('nav.external.about'), href: "/about" },
    { label: t('nav.external.contact'), href: "/contact" }
  ];

  return (
    <nav className="w-full max-w-6xl mx-auto px-4 py-6" role="navigation" aria-label="Main navigation">
      <Card>
        <CardHeader>
          <CardTitle className="text-center flex items-center justify-center gap-2">
            <Zap className="h-5 w-5 text-primary" />
            {t('nav.title')}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3 text-primary">{t('nav.quickLinks')}</h3>
              <div className="space-y-2">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors p-2 rounded-md hover:bg-muted/50"
                  >
                    <link.icon className="h-4 w-4" />
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3 text-primary">{t('nav.resources')}</h3>
              <div className="space-y-2">
                {externalLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors p-2 rounded-md hover:bg-muted/50"
                  >
                    <ExternalLink className="h-4 w-4" />
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-6 pt-4 border-t text-center">
            <Button asChild variant="outline">
              <a href="#email-generator" className="inline-flex items-center gap-2">
                <Mail className="h-4 w-4" />
                {t('nav.startNow')}
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </nav>
  );
};

export default Navigation;