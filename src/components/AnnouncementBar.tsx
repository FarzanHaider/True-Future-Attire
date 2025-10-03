export const AnnouncementBar = () => {
  return (
    <div className="bg-primary text-primary-foreground py-2 overflow-hidden">
      <div className="relative flex">
        <div className="flex animate-marquee whitespace-nowrap text-sm font-medium">
          <span className="mx-8">✨ New Collection Launch</span>
          <span className="mx-8">Free Shipping on Orders Over $200</span>
          <span className="mx-8">Limited Time: 20% Off Select Items</span>
          <span className="mx-8">✨ New Collection Launch</span>
          <span className="mx-8">Free Shipping on Orders Over $200</span>
          <span className="mx-8">Limited Time: 20% Off Select Items</span>
        </div>
        <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap text-sm font-medium">
          <span className="mx-8">✨ New Collection Launch</span>
          <span className="mx-8">Free Shipping on Orders Over $200</span>
          <span className="mx-8">Limited Time: 20% Off Select Items</span>
          <span className="mx-8">✨ New Collection Launch</span>
          <span className="mx-8">Free Shipping on Orders Over $200</span>
          <span className="mx-8">Limited Time: 20% Off Select Items</span>
        </div>
      </div>
    </div>
  );
};
