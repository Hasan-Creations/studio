import { furnitureData } from '@/lib/data';
import { FurnitureGrid } from '@/components/furniture-grid';
import { Header } from '@/components/header';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  const sofas = furnitureData.filter(item => item.category === 'sofa');
  const chairs = furnitureData.filter(item => item.category === 'chair');
  const tables = furnitureData.filter(item => item.category === 'table');

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold tracking-tight mb-12 text-center text-primary animate-fadeInUp">
          Discover Our Arty Furniture
        </h1>

        <section id="sofas" className="mb-12 scroll-mt-16 animate-fadeInUp stagger-delay-100">
          <h2 className="text-3xl font-semibold tracking-tight mb-6 text-center">Sofas</h2>
          <FurnitureGrid items={sofas} />
        </section>

        <Separator className="my-12 animate-fadeInUp stagger-delay-200" />

        <section id="chairs" className="mb-12 scroll-mt-16 animate-fadeInUp stagger-delay-300">
          <h2 className="text-3xl font-semibold tracking-tight mb-6 text-center">Chairs</h2>
          <FurnitureGrid items={chairs} />
        </section>

        <Separator className="my-12 animate-fadeInUp stagger-delay-400" />

        <section id="tables" className="mb-12 scroll-mt-16 animate-fadeInUp stagger-delay-500">
          <h2 className="text-3xl font-semibold tracking-tight mb-6 text-center">Tables</h2>
          <FurnitureGrid items={tables} />
        </section>
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
