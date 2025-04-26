import { Header } from '@/components/header';

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto space-y-6 text-center text-lg text-foreground animate-fadeInUp">
           <h1 className="text-4xl font-bold tracking-tight mb-8 text-center text-primary">
            About Arty Furniture
          </h1>
          <p>
            Welcome to Arty Furniture, where artistry meets comfort. We believe that furniture should be more than just functional; it should be a statement piece, a reflection of your personality, and a source of joy in your everyday life.
          </p>
          <p className="stagger-delay-100 animate-fadeInUp">
            Founded with a passion for unique design and quality craftsmanship, Arty Furniture curates a collection of distinctive sofas, chairs, tables, and more. Each item is chosen for its artistic merit, quality materials, and ability to transform a space.
          </p>
          <p className="stagger-delay-200 animate-fadeInUp">
            Our mission is to bring you furniture that inspires creativity and conversation. We collaborate with talented designers and artisans who share our vision for blending form and function beautifully.
          </p>
          <p className="stagger-delay-300 animate-fadeInUp">
            Explore our collection and discover pieces that resonate with your style. Ordering is simple – just find something you love and reach out via WhatsApp to begin the conversation. We're here to help you create a home that truly feels like you.
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
```