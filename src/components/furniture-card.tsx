'use client';

import type { FurnitureItem } from '@/lib/data';
import { WHATSAPP_NUMBER } from '@/lib/data';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ShoppingCart } from 'lucide-react';

interface FurnitureCardProps {
  item: FurnitureItem;
  animationDelay?: number; // Optional delay for staggered animation
}

export function FurnitureCard({ item, animationDelay = 0 }: FurnitureCardProps) {
  const handleOrderClick = () => {
    const message = encodeURIComponent(
      `Hello Arty Furniture, I'm interested in ordering the ${item.name}. Image: ${item.imageUrl}`
    );
    // Ensure WHATSAPP_NUMBER is defined and not empty
    if (WHATSAPP_NUMBER && WHATSAPP_NUMBER !== '1234567890') { // Check against placeholder
       const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
       window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    } else {
       console.warn("WhatsApp number not configured. Please update WHATSAPP_NUMBER in src/lib/data.ts");
       alert("Ordering via WhatsApp is currently unavailable. Please configure the WhatsApp number.");
    }
  };

  return (
    <Card
        className="overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.03] animate-fadeInUp"
        style={{ animationDelay: `${animationDelay}ms` }} // Apply staggered delay
        >
      <CardHeader className="p-0">
        <div className="relative aspect-[3/2] w-full overflow-hidden"> {/* Added overflow-hidden */}
          <Image
            src={item.imageUrl}
            alt={item.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" // Zoom effect on hover
            priority={item.id === 'sofa-01'} // Prioritize loading for the first image maybe
          />
        </div>
      </CardHeader>
      <CardContent className="p-4 pb-2">
        <CardTitle className="text-lg font-semibold mb-1 transition-colors duration-300 group-hover:text-primary">{item.name}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground line-clamp-2">{item.description}</CardDescription>
      </CardContent>
      <CardFooter className="p-4 pt-2">
        <Button
            className="w-full btn-transition" // Added btn-transition
            onClick={handleOrderClick}
            aria-label={`Order ${item.name} via WhatsApp`}
            >
            <ShoppingCart className="mr-2 h-4 w-4" /> Order via WhatsApp
        </Button>
      </CardFooter>
    </Card>
  );
}
