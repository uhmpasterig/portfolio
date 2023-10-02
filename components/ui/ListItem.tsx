'use client';

import TagSvg from '@/public/Tag';
import { ListItemInfo } from '@/types/ListItemInfo';
import { motion } from 'framer-motion';

export default function ListItem({ listItem }: { listItem: ListItemInfo }) {
  return (
    <a
      href={listItem.url}
      className={`w-full h-32 px-8 py-6 bg-transparent border-white/5 border-[1px] rounded-md flex flex-col justify-between cursor-pointer duration-300 ${listItem.className}`}
    >
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
        viewport={{ once: true }}
        className="flex flex-row gap-3 items-center"
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
          <h3 className="text-xs font-light">{tag + (index == listItem.tags.length - 1 ? '' : ',')}</h3>
        ))}
      </motion.div>
    </a>
  );
}
