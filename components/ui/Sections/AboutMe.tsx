'use client';
import { motion } from 'framer-motion';
import TextParagraph from '../TextParagraph';

export default function AboutMe() {
  return (
    <div className="flex justify-evenly items-center lg:flex-row lg:gap-96 md:flex-row md:gap-10 sm:flex-col gap-10 flex-col">
      <motion.img
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        src="/auflock.png"
        className="w-[20rem] h-[20rem] flex items-center justify-center"
      ></motion.img>

      <TextParagraph title="About Me:" animationDirection="right">
        <p>Hi, I&apos;m Luca, a 17-year-old from Germany, passionate about programming.</p>
        <p>I&apos;ve been coding for three years and have a deep love for backend development.</p>
        <p>In 2023, I completed my Abitur, and now I&apos;m pursuing an apprenticeship as a Software Developer.</p>
        <p>I thrive on creating solutions that make a difference.</p>
        <p>Join me on my journey as I explore the world of programming, share insights, and showcase my projects.</p>
        <p>Let&apos;s connect and code together!</p>
      </TextParagraph>
    </div>
  );
}
