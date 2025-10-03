import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";
import { FadeInSection } from "@/components/FadeInSection";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Fashion Enthusiast",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    quote:
      "True Future Attire completely changed how I shop online. The 3D product views are stunning and so accurate!",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "Interior Designer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "The quality is unmatched. Every piece I bought exceeded my expectations — elegant, timeless, and futuristic.",
    rating: 4,
  },
  {
    name: "Emily Carter",
    role: "Creative Director",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    quote:
      "Their customer support is next level. I felt guided through every step. This is how modern shopping should be.",
    rating: 5,
  },
  {
    name: "Michael Brown",
    role: "Entrepreneur",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    quote:
      "I love how seamless the shopping experience feels. Futuristic and elegant!",
    rating: 4,
  },
  {
    name: "Sophia Lee",
    role: "Stylist",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    quote:
      "The detail and realism in the 3D product views are unmatched. It’s like shopping in person.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const itemsPerPage = 3;

  const next = () =>
    setIndex((prev) =>
      prev + itemsPerPage >= testimonials.length ? 0 : prev + itemsPerPage
    );
  const prev = () =>
    setIndex((prev) =>
      prev - itemsPerPage < 0
        ? Math.max(0, testimonials.length - itemsPerPage)
        : prev - itemsPerPage
    );

  const visible = testimonials.slice(index, index + itemsPerPage);

  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <FadeInSection direction="up">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold tracking-tighter">
              What Our Customers Say
            </h2>
            <p className="text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
              Hear from those who’ve experienced True Future Attire firsthand.
            </p>
          </div>
        </FadeInSection>

        {/* Slider with 3 items */}
        <div className="relative">
          <AnimatePresence mode="wait">
          <motion.div
  key={index}
  initial={{ opacity: 0, x: 80 }}
  animate={{ opacity: 1, x: 0 }}
  exit={{ opacity: 0, x: -80 }}
  transition={{ duration: 0.5 }}
  className="grid md:grid-cols-3 gap-6"
>
  {visible.map((t, i) => (
    <div
      key={i}
      className="glass-effect rounded-xl p-6 flex flex-col items-center text-center shadow-md hover:scale-[1.02] transition-transform duration-300"
    >
      <img
        src={t.image}
        alt={t.name}
        className="w-16 h-16 rounded-full object-cover border-2 border-primary/30 mb-4"
      />

      {/* Stars */}
      <div className="flex justify-center mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < t.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
            }`}
          />
        ))}
      </div>

      <p className="text-sm italic text-muted-foreground mb-4">
        “{t.quote}”
      </p>
      <div className="font-semibold text-base">{t.name}</div>
      <div className="text-xs text-muted-foreground">{t.role}</div>
    </div>
  ))}
</motion.div>

          </AnimatePresence>

          {/* Controls */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-background shadow-md hover:scale-110 transition"
          >
            ‹
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-background shadow-md hover:scale-110 transition"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
