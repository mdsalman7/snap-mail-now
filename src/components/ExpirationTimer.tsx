import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, AlertTriangle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface ExpirationTimerProps {
  expirationTime: Date | null;
  onExpired: () => void;
}

const ExpirationTimer = ({ expirationTime, onExpired }: ExpirationTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<string>("");
  const [isExpired, setIsExpired] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    if (!expirationTime) return;

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = expirationTime.getTime() - now;

      if (distance < 0) {
        setIsExpired(true);
        setTimeLeft("EXPIRED");
        onExpired();
        clearInterval(interval);
        return;
      }

      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft(`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
    }, 1000);

    return () => clearInterval(interval);
  }, [expirationTime, onExpired]);

  if (!expirationTime) return null;

  return (
    <Card className={`w-full max-w-md mx-auto ${isExpired ? 'border-destructive bg-destructive/5' : 'border-warning bg-warning/5'}`}>
      <CardContent className="p-4">
        <div className="flex items-center justify-center gap-2">
          {isExpired ? (
            <AlertTriangle className="h-5 w-5 text-destructive" />
          ) : (
            <Clock className="h-5 w-5 text-warning" />
          )}
          <span className="text-sm font-medium">
            {isExpired ? "Email Expired" : t('timer.expires')}
          </span>
          <span className={`text-lg font-mono font-bold ${isExpired ? 'text-destructive' : 'text-warning'}`}>
            {timeLeft}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default ExpirationTimer;