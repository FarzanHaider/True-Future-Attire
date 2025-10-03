// components/FadeInSection.tsx
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  direction?: "left" | "right" | "up" | "down";
  delay?: number;
};

export const FadeInSection = ({ children, direction = "up", delay = 0 }: Props) => {
  const variants: Record<
    "left" | "right" | "up" | "down",
    {
      hidden: { x?: number; y?: number; opacity: number };
      show: { x?: number; y?: number; opacity: number };
    }
  > = {
    left: { hidden: { x: -100, opacity: 0 }, show: { x: 0, opacity: 1 } },
    right: { hidden: { x: 100, opacity: 0 }, show: { x: 0, opacity: 1 } },
    up: { hidden: { y: 100, opacity: 0 }, show: { y: 0, opacity: 1 } },
    down: { hidden: { y: -100, opacity: 0 }, show: { y: 0, opacity: 1 } },
  };

  return (
    <motion.div
      variants={variants[direction]}
      initial="hidden"
      whileInView="show"
      transition={{ duration: 0.8, ease: "easeOut", delay }}
      viewport={{ once: false, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
};
