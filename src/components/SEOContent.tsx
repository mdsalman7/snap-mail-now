import { Card, CardContent } from "@/components/ui/card";
import { Shield, Clock, Zap, Mail, Lock, Smartphone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const SEOContent = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Mail,
      title: t('seo.features.instant.title'),
      description: t('seo.features.instant.description')
    },
    {
      icon: Clock,
      title: t('seo.features.expiring.title'),
      description: t('seo.features.expiring.description')
    },
    {
      icon: Shield,
      title: t('seo.features.private.title'),
      description: t('seo.features.private.description')
    },
    {
      icon: Lock,
      title: t('seo.features.secure.title'),
      description: t('seo.features.secure.description')
    },
    {
      icon: Zap,
      title: t('seo.features.fast.title'),
      description: t('seo.features.fast.description')
    },
    {
      icon: Smartphone,
      title: t('seo.features.mobile.title'),
      description: t('seo.features.mobile.description')
    }
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">{t('seo.title')}</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          {t('seo.description')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {features.map((feature, index) => (
          <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-primary to-primary-glow rounded-lg flex items-center justify-center">
                <feature.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="prose prose-slate max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold mb-4">{t('seo.content.whatIs.title')}</h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {t('seo.content.whatIs.text')}
        </p>

        <h3 className="text-2xl font-bold mb-4">{t('seo.content.whyUse.title')}</h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {t('seo.content.whyUse.text')}
        </p>

        <h3 className="text-2xl font-bold mb-4">{t('seo.content.howWorks.title')}</h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {t('seo.content.howWorks.text')}
        </p>

        <h3 className="text-2xl font-bold mb-4">{t('seo.content.benefits.title')}</h3>
        <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
          <li>{t('seo.content.benefits.list.1')}</li>
          <li>{t('seo.content.benefits.list.2')}</li>
          <li>{t('seo.content.benefits.list.3')}</li>
          <li>{t('seo.content.benefits.list.4')}</li>
          <li>{t('seo.content.benefits.list.5')}</li>
        </ul>
      </div>
    </section>
  );
};

export default SEOContent;