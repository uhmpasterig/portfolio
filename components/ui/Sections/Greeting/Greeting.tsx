'use client';
import { motion } from 'framer-motion';
import HighlightedText from './HighlightedText';

export default function Greeting() {
  return (
    <motion.h1
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="text-center text-4xl font-bold leading-relaxed sm:text-4xl md:text-3xl md:leading-snug xl:text-4xl xl:leading-relaxed w-full whitespace-normal break-words text-white"
    >
      Hey, I&apos;m Luca
      <span className='xl:inline md:inline hidden'>
        - A&nbsp;
        <HighlightedText color="blue" delay={0.55} duration={0.6}>
          tech enthusiast
        </HighlightedText>
        &nbsp; focused on&nbsp;
        <br />
        <HighlightedText color="pink" delay={0} duration={0.8}>
          full-stack development
        </HighlightedText>
        ,&nbsp;
        <HighlightedText color="green" delay={0.6} duration={0.3}>
          DevOps
        </HighlightedText>
        ,&nbsp;
        <HighlightedText color="purple" delay={1} duration={0.5}>
          management
        </HighlightedText>
        &nbsp;&&nbsp;
        <HighlightedText color="yellow" delay={1.4} duration={0.4}>
          business
        </HighlightedText>
        .
      </span>
    </motion.h1>
  );
}
