'use client';

import { motion } from "framer-motion";

import styles from "../styles";
import { staggerContainer, fadeIn } from "../utils/motion";
import { TypingText, TitleText } from "../components";



const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
  <motion.div
  variants={staggerContainer}
  initial='hidden'
  whileInView='show'
  viewport={{once: false, amount:0.25}}
  className={`${styles.innerWidth} mx-auto flex flex-col `}
  >
  <TypingText title="| Crazy People on the World" textStyles="text-center"/>
  <TitleText 
    title={<>
      Tracking the crazy people around you and invite them to play together
    </>}
    textStyles="text-center"
  />
  <motion.div
  variants={fadeIn('up', 'tween', 0.3, 1)}
  className="relative mt-[68px] flex w-full h-[550px] "
  >
  <img
  src="/map.png"
  alt="map"
  className="w-full h-full object-contain"
  />
  </motion.div>
  </motion.div>
  </section>
);

export default World;
