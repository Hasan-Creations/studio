import { furnitureData } from '@/lib/data';
import { FurnitureGrid } from '@/components/furniture-grid';
import { Header } from '@/components/header';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold tracking-tight mb-8 text-center text-primary">
          Discover Our Arty Furniture
        </h2>
        <FurnitureGrid items={furnitureData} />
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
