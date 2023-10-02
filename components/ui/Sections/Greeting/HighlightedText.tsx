'use client';
import { motion } from 'framer-motion';

type Color = {
  className: string;
  rgba: string;
};

type Colors = {
  [key: string]: Color;
};

const colors: Colors = {
  blue: {
    className: 'bg-blue-500',
    rgba: 'rgba(37 99 235 / 0.5)',
  },
  green: {
    className: 'bg-green-500',
    rgba: 'rgba(22 163 74 / 0.5)',
  },
  pink: {
    className: 'bg-pink-500',
    rgba: 'rgba(219 39 119 / 0.5)',
  },
  purple: {
    className: 'bg-purple-500',
    rgba: 'rgba(147 51 234 / 0.5)',
  },
  yellow: {
    className: 'bg-yellow-500',
    rgba: 'rgba(202 138 4 / 0.5)',
  },
};

export default function HighlightedText({
  children,
  delay,
  duration,
  color,
}: {
  children: React.ReactNode;
  delay: number;
  duration: number;
  color: 'blue' | 'green' | 'pink' | 'purple' | 'yellow';
}) {
  const chosenColor = colors[color];

  return (
    <span className="relative whitespace-nowrap">
      <span className="relative">{children}</span>

      <motion.div
        initial={{ width: '0%' }}
        animate={{ width: '100%' }}
        transition={{ duration, delay }}
        className={`absolute top-0 left-0 h-full ${chosenColor.className} opacity-20`}
      />

      <motion.div
        initial={{ width: '0%' }}
        animate={{ width: '100%' }}
        transition={{ duration, delay }}
        className={`absolute bottom-0 left-0 h-1 ${chosenColor.className}`}
      />
    </span>
  );
}
