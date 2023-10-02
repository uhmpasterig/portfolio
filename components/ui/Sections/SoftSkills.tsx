'use client';
import { motion } from 'framer-motion';
import TextParagraph from '../TextParagraph';

export default function SoftSkills() {
  return (
    <div className="flex justify-evenly items-center lg:flex-row lg:gap-96 md:flex-row md:gap-10 sm:flex-col gap-10 flex-col">
      <TextParagraph title="Soft Skills:" animationDirection="right">
        <p>I possess strong soft skills such as excellent communication, quick learning, and a passion for continuous growth.</p>
        <p>I&apos;m known for pushing my limits, which fuels my determination and adaptability in all aspects of life.</p>
        <p>
          Outside of work, I enjoy outdoor activities, reflecting my adventurous spirit and love for nature. This connection to the natural world
          instills in me a deep sense of environmental responsibility, driving my commitment to sustainable living and conservation efforts.
        </p>
        <p>My diverse set of skills and interests shape me into a well-rounded and adaptable individual, ready to face any challenge head-on.</p>
      </TextParagraph>

      <motion.img
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        src="/ueberlegmal.png"
        className="w-[20rem] h-[20rem] flex items-center justify-center"
      ></motion.img>
    </div>
  );
}