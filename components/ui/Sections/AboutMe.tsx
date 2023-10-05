'use client';
import { motion } from 'framer-motion';
import TextParagraph from '../TextParagraph';
import InfoSection from '../InfoSection';

export default function AboutMe() {
  return (
    <InfoSection>
      <TextParagraph title="About Me:" animationDirection="left">
        <p>Hi, I&apos;m Luca, a 17-year-old from Germany, passionate about programming.</p>
        <p>I&apos;ve been coding for three years and have a deep love for backend development.</p>
        <p>In 2023, I completed my Abitur, and now I&apos;m pursuing an apprenticeship as a Software Developer.</p>
        <p>I thrive on creating solutions that make a difference.</p>
        <p>Join me on my journey as I explore the world of programming, share insights, and showcase my projects.</p>
        <p>Let&apos;s connect and code together!</p>
      </TextParagraph>
      <motion.img
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        src="/abstract-1.png"
        className="w-[20rem] h-[20rem] items-center justify-center lg:flex hidden drop-shadow-xl-pink"
      ></motion.img>
    </InfoSection>
  );
}
