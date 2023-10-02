'use client';
import { motion } from 'framer-motion';

export default function Seperator({ className }: { className?: string }) {
  return (
    <motion.div
      initial={{ width: '0%' }}
      whileInView={{ width: '100%' }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
      className={`bg-gradient-to-r from-transparent via-white/20 to-transparent h-[1px] w-full ${className}`}
    ></motion.div>
  );
}
