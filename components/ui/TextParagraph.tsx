'use client';
import { motion } from 'framer-motion';

export default function TextParagraph({
  children,
  title,
  animationDirection,
}: {
  children: React.ReactNode;
  title: string;
  animationDirection?: 'left' | 'right';
}) {
  return (
    <div className="flex flex-col justify-between items-center relative w-5/12">
      <motion.h1
        initial={{ x: animationDirection == 'left' ? -100 : 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-2 text-white"
      >
        {title}
      </motion.h1>
      <motion.div
        initial={{ x: animationDirection == 'left' ? -100 : 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className={`text-sm text-neutral-200/50 text-left`}
      >
        {children}
      </motion.div>
    </div>
  );
}
