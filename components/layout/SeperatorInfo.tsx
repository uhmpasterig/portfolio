'use client';
import { motion } from 'framer-motion';

export default function SeperatorInfo({ number, title }: { number: number; title: string }) {
  return (
    <>
      <motion.div
        initial={{ height: 0, marginBottom: '5rem' }}
        whileInView={{ opacity: 1, height: '5rem', marginBottom: '0rem' }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="w-[0.1rem] h-20 bg-gradient-to-b from-white/20 to-white/5"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="h-10 w-10 bg-white/5 border border-white/20 rounded-full flex justify-center items-center text-gray-400" 
      >
        {number}
      </motion.div>
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className=" text-2xl mt-2 mb-14 font-extrabold text-neutral-200/50" // bg-gradient-to-b from-white/100 to-white/50 bg-clip-text text-transparent
      >
        {title}
      </motion.h1>
    </>
  );
}
