import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Copy, Mail, RefreshCw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

interface EmailGeneratorProps {
  onEmailGenerated: (email: string, duration: number) => void;
  generatedEmail: string | null;
  isGenerating: boolean;
}

const EmailGenerator = ({ onEmailGenerated, generatedEmail, isGenerating }: EmailGeneratorProps) => {
  const [selectedDuration, setSelectedDuration] = useState("10");
  const { toast } = useToast();
  const { t } = useLanguage();

  const generateEmail = () => {
    const domains = ["tempmail.com", "10minutemail.net", "disposable.email"];
    const randomDomain = domains[Math.floor(Math.random() * domains.length)];
    const randomId = Math.random().toString(36).substring(2, 15);
    const email = `${randomId}@${randomDomain}`;
    
    onEmailGenerated(email, parseInt(selectedDuration));
  };

  const copyToClipboard = async () => {
    if (generatedEmail) {
      await navigator.clipboard.writeText(generatedEmail);
      toast({
        title: t('generator.copied'),
        description: "Email address has been copied to your clipboard.",
        duration: 2000,
      });
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-soft">
      <CardHeader className="text-center pb-4">
        <CardTitle className="text-2xl font-bold flex items-center justify-center gap-2">
          <Mail className="h-6 w-6 text-primary" />
          {t('generator.title')}
        </CardTitle>
        <p className="text-muted-foreground">
          {t('generator.description')}
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-col sm:flex-row gap-4 items-end">
          <div className="flex-1">
            <label className="text-sm font-medium mb-2 block">{t('generator.duration')}</label>
            <Select value={selectedDuration} onValueChange={setSelectedDuration}>
              <SelectTrigger>
                <SelectValue placeholder="Select duration" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10">10 {t('generator.minutes')}</SelectItem>
                <SelectItem value="30">30 {t('generator.minutes')}</SelectItem>
                <SelectItem value="60">60 {t('generator.minutes')}</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button 
            variant="hero" 
            size="lg" 
            onClick={generateEmail}
            disabled={isGenerating}
            className="w-full sm:w-auto min-w-[140px]"
          >
            {isGenerating ? (
              <>
                <RefreshCw className="h-4 w-4 animate-spin mr-2" />
                {t('generator.generating')}
              </>
            ) : (
              <>
                <Mail className="h-4 w-4 mr-2" />
                {t('generator.generate')}
              </>
            )}
          </Button>
        </div>

        {generatedEmail && (
          <div className="bg-muted rounded-lg p-4 animate-fade-in">
            <label className="text-sm font-medium mb-2 block">Your Temporary Email</label>
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="flex-1 p-3 bg-background border rounded-md font-mono text-sm break-all">
                {generatedEmail}
              </div>
              <Button 
                variant="copy" 
                size="sm" 
                onClick={copyToClipboard}
                className="w-full sm:w-auto"
              >
                <Copy className="h-4 w-4 mr-1" />
                {t('generator.copy')}
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default EmailGenerator;