import React from "react";
import { motion } from "framer-motion";

const socials = [
  {
    link: "https://x.com/taki_trading",
    icon: "twitter",
  },
  {
    link: "https://linkedin.com",
    icon: "linkedin",
  },
  {
    link: "mailto:lewis@taki.trading",
    icon: "email",
  },
];

const Home = () => {
  return (
    <motion.div className="taki-content" initial="inactive" animate="active">
      <motion.img
        id="logo"
        src="/assets/icons/TakiLogoWhite.svg"
        {...fadeUp(0.2, true)}
      />
      <motion.h1 {...fadeUp(0.6)}>
        A different kind <br />
        of DEX.
      </motion.h1>
      <motion.p {...fadeUp(0.9)}>
        Fixing fragmented liquidity in DeFi by offering leverage trading on
        thousands of real-world assets. Currently in stealth mode.
      </motion.p>
      <motion.div className="socials" {...fadeUp(1.2)}>
        {socials.map((social, index) => (
          <a key={`socialLink_${index}`} href={social.link} target="_blank">
            <img src={`assets/icons/${social.icon}.svg`} />
          </a>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Home;

const fadeUp = (delay = 0.2, isScale = false) => ({
  variants: {
    inactive: {
      y: isScale ? 0 : 50,
      opacity: 0,
      scale: isScale ? 0.9 : 1,
    },
    active: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 50,
        restDelta: 0.001,
        delay,
      },
    },
  },
});
