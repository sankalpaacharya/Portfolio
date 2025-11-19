import { useState } from 'react';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

interface ContactFormProps {
  showName?: boolean;
  showEmail?: boolean;
  captchaSize?: 'compact' | 'normal' | 'invisible';
}

export default function ContactForm({ 
  showName = false, 
  showEmail = false,
  captchaSize = 'normal'
}: ContactFormProps) {
  const [result, setResult] = useState("");
  const [captchaToken, setCaptchaToken] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onHCaptchaChange = (token: string) => {
    setCaptchaToken(token);
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("");

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "bfbc9bbf-12d9-4608-bc47-69f2f893660f");
    formData.append("h-captcha-response", captchaToken);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      console.log("this is fucking test",data);
      setResult(data.success ? "Message sent successfully! 🎉" : "Failed to send message. Please try again.");
      
      if (data.success) {
        (event.target as HTMLFormElement).reset();
        setCaptchaToken("");
      }
    } catch (error) {
        console.log(error);
      setResult("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {showName && (
        <div className="space-y-2">
          <Label htmlFor="name">Name (Optional)</Label>
          <Input 
            id="name"
            name="name" 
            type="text"
            placeholder="Your name"
            className="w-full"
          />
        </div>
      )}

      {showEmail && (
        <div className="space-y-2">
          <Label htmlFor="email">Email (Optional)</Label>
          <Input 
            id="email"
            name="email" 
            type="email"
            placeholder="your.email@example.com"
            className="w-full"
          />
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <textarea
          id="message"
          name="message"
          required
          placeholder="Type your anonymous message here..."
          rows={6}
          className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        />
      </div>

      <div className="flex justify-center">
        <HCaptcha
          sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
          reCaptchaCompat={false}
          onVerify={onHCaptchaChange}
          size={captchaSize}
        />
      </div>

      <Button 
        type="submit" 
        className="w-full" 
        disabled={!captchaToken || isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>

      {result && (
        <p className={`text-sm text-center ${result.includes("success") ? "text-green-500" : "text-destructive"}`}>
          {result}
        </p>
      )}
    </form>
  );
}