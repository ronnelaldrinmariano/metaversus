'use client';

import { motion } from "framer-motion";
import { TypingText } from "../components";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
  <div className="gradient-02 z-0"/>
  <motion.div
  variants={staggerContainer}
  initial='hidden'
  whileInView="show"
  viewport={{once: false, amount: 0.25}}
  className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
  >
  <TypingText title="| About Metaverse"
    textStyles="text-center"
  />
  <motion.p
  variants={fadeIn('up', 'tween', 0.2, 1)}
  className="mt-[8px] font-noraml sm:text-[32px] text-[20px] text-center text-secondary-white"
  >
     <span className="font-extrabold text-white pb-100px">Embrace the Future: A Journey into the Metaverse </span><br/>
     <span >The Metaverse is a collective network of interconnected virtual worlds, each designed to cater to diverse interests and passions. Immerse yourself in stunningly realistic landscapes, meet people from all corners of the globe, and explore fantastical realms limited only by the power of your imagination.</span>
     <span > As we stand at the dawn of this exciting new era, the <span className="font-extrabold text-white">Metaverse promises </span>to redefine how we interact, connect, and experience the world around us.
    </span>
    
  </motion.p>
  <motion.img 
    variants={fadeIn('up', 'tween', 0.3, 1)}
    src="/arrow-down.svg"
    alt="arrow down"
    className="w-[18px] h-[28px] object-contain mt-[28px]"

  />
  </motion.div>
  </section>
);

export default About;
