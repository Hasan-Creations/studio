import type { FurnitureItem } from '@/lib/data';
import { FurnitureCard } from './furniture-card';

interface FurnitureGridProps {
  items: FurnitureItem[];
}

export function FurnitureGrid({ items }: FurnitureGridProps) {
  if (!items || items.length === 0) {
    return <p>No furniture items found.</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {items.map((item) => (
        <FurnitureCard key={item.id} item={item} />
      ))}
    </div>
  );
}
