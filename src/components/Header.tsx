import { Shield, Zap, Clock } from "lucide-react";

const Header = () => {
  return (
    <header className="text-center py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="p-2 bg-gradient-to-r from-primary to-primary-glow rounded-lg">
            <Zap className="h-6 w-6 text-primary-foreground" />
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            TempMail Pro
          </h1>
        </div>
        <p className="text-lg text-muted-foreground mb-6">
          Instant disposable email addresses for privacy and security
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