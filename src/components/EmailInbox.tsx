import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Inbox, Mail, User, Calendar } from "lucide-react";

interface Email {
  id: string;
  from: string;
  subject: string;
  content: string;
  receivedAt: Date;
  isRead: boolean;
}

interface EmailInboxProps {
  generatedEmail: string | null;
  isExpired: boolean;
}

const EmailInbox = ({ generatedEmail, isExpired }: EmailInboxProps) => {
  const [emails, setEmails] = useState<Email[]>([]);
  const [selectedEmail, setSelectedEmail] = useState<Email | null>(null);

  // Mock email data for demonstration
  useEffect(() => {
    if (generatedEmail && !isExpired) {
      const mockEmails: Email[] = [
        {
          id: "1",
          from: "verification@service.com",
          subject: "Please verify your email address",
          content: "Thank you for signing up! Please click the link below to verify your email address and complete your registration.",
          receivedAt: new Date(Date.now() - 2 * 60 * 1000),
          isRead: false,
        },
        {
          id: "2",
          from: "welcome@newapp.io",
          subject: "Welcome to our platform!",
          content: "Welcome aboard! We're excited to have you join our community. Here's what you can do next to get started...",
          receivedAt: new Date(Date.now() - 5 * 60 * 1000),
          isRead: false,
        },
      ];

      // Simulate receiving emails over time
      const timer = setTimeout(() => {
        setEmails(mockEmails);
      }, 2000);

      return () => clearTimeout(timer);
    } else if (isExpired) {
      setEmails([]);
      setSelectedEmail(null);
    }
  }, [generatedEmail, isExpired]);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const markAsRead = (email: Email) => {
    setEmails(prev => prev.map(e => 
      e.id === email.id ? { ...e, isRead: true } : e
    ));
    setSelectedEmail({ ...email, isRead: true });
  };

  if (!generatedEmail) {
    return (
      <Card className="w-full max-w-4xl mx-auto">
        <CardContent className="p-8 text-center">
          <Inbox className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground">Generate an email address to start receiving messages</p>
        </CardContent>
      </Card>
    );
  }

  if (isExpired) {
    return (
      <Card className="w-full max-w-4xl mx-auto border-destructive bg-destructive/5">
        <CardContent className="p-8 text-center">
          <Mail className="h-12 w-12 text-destructive mx-auto mb-4" />
          <p className="text-destructive font-medium">Email address has expired</p>
          <p className="text-muted-foreground">All messages have been permanently deleted</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Inbox className="h-5 w-5" />
          Inbox
          {emails.length > 0 && (
            <Badge variant="secondary">{emails.filter(e => !e.isRead).length} new</Badge>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Email List */}
          <div className="space-y-2">
            {emails.length === 0 ? (
              <div className="text-center py-8">
                <Mail className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                <p className="text-muted-foreground">No emails yet</p>
                <p className="text-sm text-muted-foreground">New messages will appear here automatically</p>
              </div>
            ) : (
              emails.map((email) => (
                <div
                  key={email.id}
                  onClick={() => markAsRead(email)}
                  className={`p-3 border rounded-lg cursor-pointer transition-colors hover:bg-muted/50 ${
                    selectedEmail?.id === email.id ? 'bg-accent border-primary' : ''
                  } ${!email.isRead ? 'bg-primary/5 border-primary/20' : ''}`}
                >
                  <div className="flex items-start justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium truncate">{email.from}</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {formatTime(email.receivedAt)}
                    </div>
                  </div>
                  <h4 className={`font-medium mb-1 line-clamp-1 ${!email.isRead ? 'font-semibold' : ''}`}>
                    {email.subject}
                  </h4>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {email.content}
                  </p>
                  {!email.isRead && (
                    <Badge variant="default" className="mt-2 text-xs">New</Badge>
                  )}
                </div>
              ))
            )}
          </div>

          {/* Email Content */}
          <div className="lg:block">
            {selectedEmail ? (
              <div className="p-4 border rounded-lg bg-background mt-4 lg:mt-0">
                <div className="border-b pb-4 mb-4">
                  <h3 className="font-semibold text-lg mb-2">{selectedEmail.subject}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <User className="h-4 w-4" />
                    <span>From: {selectedEmail.from}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                    <Calendar className="h-4 w-4" />
                    <span>{selectedEmail.receivedAt.toLocaleString()}</span>
                  </div>
                </div>
                <div className="prose prose-sm max-w-none">
                  <p className="text-foreground leading-relaxed whitespace-pre-wrap">{selectedEmail.content}</p>
                  <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                    <h4 className="font-medium mb-2">Email Details</h4>
                    <div className="text-sm space-y-1">
                      <p><span className="font-medium">Message ID:</span> {selectedEmail.id}</p>
                      <p><span className="font-medium">Received:</span> {selectedEmail.receivedAt.toLocaleString()}</p>
                      <p><span className="font-medium">Status:</span> {selectedEmail.isRead ? 'Read' : 'Unread'}</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="hidden lg:block p-8 border rounded-lg bg-muted/20 text-center">
                <Mail className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                <p className="text-muted-foreground">Select an email to read</p>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EmailInbox;