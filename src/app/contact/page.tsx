import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { WHATSAPP_NUMBER } from '@/lib/data';
import Link from 'next/link';
import { Phone } from 'lucide-react';

export default function ContactPage() {
   const whatsappUrl = WHATSAPP_NUMBER && WHATSAPP_NUMBER !== '1234567890'
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello Arty Furniture, I'd like to inquire about your products.")}`
    : '#'; // Fallback link if number is not configured

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold tracking-tight mb-8 text-center text-primary">
          Contact Us
        </h1>
        <div className="max-w-xl mx-auto text-center space-y-6">
          <p className="text-lg text-foreground">
            Have questions about our furniture or need help placing an order? We'd love to hear from you!
          </p>
          <p className="text-muted-foreground">
            The easiest way to get in touch for orders or specific product inquiries is through WhatsApp. Click the button below to start a chat.
          </p>
          <div>
            <Button asChild size="lg" disabled={whatsappUrl === '#'}>
              <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-5 w-5" /> Chat on WhatsApp
              </Link>
            </Button>
            {whatsappUrl === '#' && (
                 <p className="text-sm text-destructive mt-2">WhatsApp contact is currently unavailable.</p>
             )}
          </div>
           <p className="text-muted-foreground pt-4">
            For general inquiries, you can also reach us via email (though WhatsApp is preferred for faster responses on products):
            <br />
            <a href="mailto:info@artyfurniture.example.com" className="text-primary hover:underline">
              info@artyfurniture.example.com
            </a>
          </p>
           <p className="text-muted-foreground">
            Our (Placeholder) Showroom Address:
            <br />
            123 Art Street, Design City, DC 12345
          </p>

        </div>
      </main>
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-6 mt-12">
      <div className="container mx-auto px-4 text-center text-sm">
        © {new Date().getFullYear()} Arty Furniture. All rights reserved.
      </div>
    </footer>
  );
}
