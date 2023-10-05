'use client';
import TagSvg from '@/public/Tag';
import { ListItemInfo } from '@/types/ListItemInfo';
import { motion } from 'framer-motion';

enum COLORS {
  'dark-green' = 'hover:bg-green-950/30',
  'dark-blue' = 'hover:bg-blue-900/20',
  'blue' = 'hover:bg-blue-500/20',
  'emerald' = 'hover:bg-emerald-500/20',
  'purple' = 'hover:bg-purple-500/20',
  'light-purple' = 'hover:bg-purple-300/20',
  'pink' = 'hover:bg-pink-500/20',
  'red' = 'hover:bg-red-500/20',
  'dark-neutral' = 'hover:bg-neutral-200/20',
  'light-yellow' = 'hover:bg-yellow-300/20',
  'orange' = 'hover:bg-orange-500/20',
}

export default function ListItem({ listItem, key }: { listItem: ListItemInfo; key: number }) {
  return (
    <a
      key={key}
      href={listItem.url}
      className={`w-full h-32 px-8 py-6 bg-transparent border-white/5 border-[1px] rounded-md flex flex-col justify-between cursor-pointer duration-300 
      ${COLORS[listItem.color as keyof typeof COLORS]}`}
    >
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
        viewport={{ once: true }}
        className="flex flex-row gap-3 items-center text-white"
      >
        <img src={listItem.image} loading="lazy" alt="TypeScript" className="w-auto h-5 rounded-sm" />
        <h1 className="font-bold hover:underline">{listItem.name}</h1>
      </motion.div>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-neutral-100/70 text-sm"
      >
        {listItem.description}
      </motion.h2>
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.2, delay: 0.4 }}
        viewport={{ once: true }}
        className="flex flex-row gap-1 text-neutral-200/50 h-4"
      >
        <TagSvg />

        {listItem.tags.map((tag, index) => (
          <h3 key={index} className="text-xs font-light">
            {tag + (index == listItem.tags.length - 1 ? '' : ',')}
          </h3>
        ))}
      </motion.div>
    </a>
  );
}
