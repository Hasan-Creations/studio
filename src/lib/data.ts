export interface FurnitureItem {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  category: 'sofa' | 'chair' | 'table';
}

// Replace with your actual WhatsApp number
export const WHATSAPP_NUMBER = '923292599756'; // Example: Use international format without '+' or spaces

export const furnitureData: FurnitureItem[] = [
  {
    id: 'sofa-01',
    name: 'Velvet Maroon Sofa',
    description: 'A luxurious deep maroon velvet sofa, perfect for adding a touch of elegance.',
    imageUrl: 'https://picsum.photos/seed/sofa1/600/400',
    category: 'sofa',
  },
  {
    id: 'chair-01',
    name: 'Minimalist Oak Chair',
    description: 'Simple yet stylish chair crafted from solid oak with a light finish.',
    imageUrl: 'https://picsum.photos/seed/chair1/600/400',
    category: 'chair',
  },
  {
    id: 'table-01',
    name: 'Art Deco Coffee Table',
    description: 'Glass top coffee table with geometric golden legs, inspired by Art Deco.',
    imageUrl: 'https://picsum.photos/seed/table1/600/400',
    category: 'table',
  },
  {
    id: 'sofa-02',
    name: 'Comfy Corner Sofa',
    description: 'Spacious and comfortable corner sofa in a neutral light fabric.',
    imageUrl: 'https://picsum.photos/seed/sofa2/600/400',
    category: 'sofa',
  },
  {
    id: 'chair-02',
    name: 'Maroon Accent Chair',
    description: 'A statement piece, this accent chair features a bold maroon color and unique shape.',
    imageUrl: 'https://picsum.photos/seed/chair2/600/400',
    category: 'chair',
  },
  {
    id: 'table-02',
    name: 'Rustic Dining Table',
    description: 'Large dining table made from reclaimed wood, bringing warmth and character.',
    imageUrl: 'https://picsum.photos/seed/table2/600/400',
    category: 'table',
  },
    {
    id: 'sofa-03',
    name: 'Modern Leather Sofa',
    description: 'Sleek black leather sofa with clean lines for a contemporary living room.',
    imageUrl: 'https://picsum.photos/seed/sofa3/600/400',
    category: 'sofa',
  },
  {
    id: 'chair-03',
    name: 'Swivel Armchair',
    description: 'Comfortable armchair with a swivel base, upholstered in light grey fabric.',
    imageUrl: 'https://picsum.photos/seed/chair3/600/400',
    category: 'chair',
  },
    {
    id: 'table-03',
    name: 'Minimalist Side Table',
    description: 'Small and functional side table with a marble top and black metal frame.',
    imageUrl: 'https://picsum.photos/seed/table3/600/400',
    category: 'table',
  },
];
