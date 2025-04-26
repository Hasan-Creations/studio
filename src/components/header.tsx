import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sofa, Armchair, Table } from 'lucide-react'; // Using appropriate icons

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center mx-auto px-4">
        <Link href="/" className="flex items-center space-x-2 mr-6">
          {/* Replace with a proper logo if available */}
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary">
             <path d="M10 2v7.31"/>
             <path d="M14 9.31V2"/>
             <path d="M5.03 14.3A9 9 0 0 0 18.97 14.3"/>
             <path d="M4.5 12.5a8.5 8.5 0 1 1 15 0"/>
             <path d="M3 20h18"/>
             <path d="M18 20c0-2.76-2-5-4.5-5s-4.5 2.24-4.5 5"/>
           </svg>
          <span className="font-bold text-lg">Arty Furniture</span>
        </Link>
        <nav className="flex items-center space-x-4 lg:space-x-6 flex-1">
          {/* Basic navigation - can be expanded later */}
          {/* Example navigation - can be replaced with dynamic category filtering */}
          {/* <Link href="/#sofas" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Sofas
          </Link>
          <Link href="/#chairs" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Chairs
          </Link>
           <Link href="/#tables" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Tables
          </Link> */}
        </nav>
         {/* Optional: Add contact or other buttons */}
        {/* <Button variant="outline" size="sm">Contact Us</Button> */}
      </div>
    </header>
  );
}
