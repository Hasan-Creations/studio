import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, Sofa, Armchair, Table } from 'lucide-react'; // Using appropriate icons

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-shadow duration-300 hover:shadow-md">
      <div className="container flex h-14 items-center mx-auto px-4">
        <Link href="/" className="flex items-center space-x-2 mr-6 group">
          {/* Arty Furniture Logo */}
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-primary transition-transform duration-300 group-hover:scale-110">
             <path d="M10 2v7.31"/>
             <path d="M14 9.31V2"/>
             <path d="M5.03 14.3A9 9 0 0 0 18.97 14.3"/>
             <path d="M4.5 12.5a8.5 8.5 0 1 1 15 0"/>
             <path d="M3 20h18"/>
             <path d="M18 20c0-2.76-2-5-4.5-5s-4.5 2.24-4.5 5"/>
           </svg>
          <span className="font-bold text-lg link-transition group-hover:text-primary">Arty Furniture</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 flex-1">
          {/* Dropdown for Categories */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-sm font-medium text-muted-foreground link-transition hover:text-primary">
                Categories <Menu className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="animate-fadeIn">
              <DropdownMenuLabel>Furniture Types</DropdownMenuLabel>
              <DropdownMenuSeparator />
               {/* Link to sections or filtered pages later */}
              <DropdownMenuItem asChild>
                <Link href="/#sofas" className="flex items-center link-transition hover:text-primary">
                  <Sofa className="mr-2 h-4 w-4" />
                  Sofas
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/#chairs" className="flex items-center link-transition hover:text-primary">
                  <Armchair className="mr-2 h-4 w-4" />
                  Chairs
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/#tables" className="flex items-center link-transition hover:text-primary">
                  <Table className="mr-2 h-4 w-4" />
                  Tables
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Other Navigation Links */}
          <Link href="/about" className="text-sm font-medium text-muted-foreground link-transition hover:text-primary">
            About Us
          </Link>
          <Link href="/contact" className="text-sm font-medium text-muted-foreground link-transition hover:text-primary">
            Contact Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden ml-auto">
             <DropdownMenu>
                <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="btn-transition hover:bg-accent">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle Menu</span>
                </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="animate-fadeIn">
                    <DropdownMenuLabel>Navigation</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                        <Link href="/">Home</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Link href="/#sofas">Sofas</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Link href="/#chairs">Chairs</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Link href="/#tables">Tables</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                        <Link href="/about">About Us</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Link href="/contact">Contact Us</Link>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>

         {/* Optional: Add contact or other buttons if needed */}
        {/* <Button variant="outline" size="sm" className="hidden md:inline-flex ml-auto">Contact Us</Button> */}
      </div>
    </header>
  );
}
```