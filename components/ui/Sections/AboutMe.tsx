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
        <p>Hi, I'm Luca, a 17-year-old from Germany, passionate about programming.</p>
        <p>I've been coding for three years and have a deep love for backend development.</p>
        <p>In 2023, I completed my Abitur, and now I'm pursuing an apprenticeship as a Software Developer.</p>
        <p>I thrive on creating solutions that make a difference.</p>
        <p>Join me on my journey as I explore the world of programming, share insights, and showcase my projects.</p>
        <p>Let's connect and code together!</p>
      </TextParagraph>
    </div>
  );
}

{
  /* <TextParagraph title="Soft Skills:" animationDirection="right">
        <p>I possess strong soft skills such as excellent communication, quick learning, and a passion for continuous growth.</p>
        <p>I'm known for pushing my limits, which fuels my determination and adaptability in all aspects of life.</p>
        <p>
          Outside of work, I enjoy outdoor activities, reflecting my adventurous spirit and love for nature. This connection to the natural world
          instills in me a deep sense of environmental responsibility, driving my commitment to sustainable living and conservation efforts.
        </p>
        <p>My diverse set of skills and interests shape me into a well-rounded and adaptable individual, ready to face any challenge head-on.</p>
      </TextParagraph> */
}
