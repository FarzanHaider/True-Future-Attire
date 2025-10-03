import { Link } from 'react-router-dom';

const categories = [
  'New Arrivals',
  'Knitwear',
  'Bottoms',
  'Accessories',
  'Sale'
];

export const CategoryBar = () => {
  return (
    <div className="border-b w-auto sm:w-auto mx-auto bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container sm:w-auto w-auto mx-auto px-4">
        <nav className="flex items-center justify-center gap-8 py-4">
          {categories.map((category) => (
            <Link
              key={category}
              to={`/category/${category.toLowerCase().replace(' ', '-')}`}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {category}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};
