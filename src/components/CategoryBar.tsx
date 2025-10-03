import { Link } from 'react-router-dom';

const categories = [
  'All',
  'Knitwear',
  'Bottoms',
  'Accessories',
  'Sale'
];

export const CategoryBar = () => {
  return (
    <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
  <div className="container mx-auto px-4">
    {/* Responsive scroll container */}
    <nav className="flex justify-center gap-6 py-4 overflow-x-auto no-scrollbar">
      {categories.map((category) => (
        <Link
          key={category}
          to={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
          className="flex-shrink-0 text-sm font-medium transition-colors hover:text-primary whitespace-nowrap"
        >
          {category}
        </Link>
      ))}
    </nav>
  </div>
</div>

  );
};
