import { Shield, Zap, Clock, Mail, Home } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const { t } = useLanguage();
  
  const quickLinks = [
    { icon: Home, label: t('nav.home'), href: "#top" },
    { icon: Mail, label: t('nav.generator'), href: "#email-generator" },
    { icon: Shield, label: t('nav.privacy'), href: "#privacy" },
    { icon: Clock, label: t('nav.faq'), href: "#faq" },
    { icon: Zap, label: t('nav.blog'), href: "#blog" }
  ];

  return (
    <header className="text-center py-8 px-4 border-b" role="banner">
      {/* Navigation */}
      <nav className="max-w-6xl mx-auto mb-8" role="navigation" aria-label="Main navigation">
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          {quickLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors px-3 py-2 rounded-md hover:bg-muted/50"
            >
              <link.icon className="h-4 w-4" />
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Main Header Content */}
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="p-2 bg-gradient-to-r from-primary to-primary-glow rounded-lg">
            <Zap className="h-6 w-6 text-primary-foreground" />
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            {t('header.title')}
          </h1>
        </div>
        <p className="text-lg text-muted-foreground mb-6">
          {t('header.subtitle')}
        </p>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-primary" />
            <span>No signup required</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-primary" />
            <span>Auto-expiring</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4 text-primary" />
            <span>Instant generation</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;