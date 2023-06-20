import { motion } from "framer-motion";
import { memo } from "react";

import StyledWelcome from "./Welcome.styles";

const Welcome = (): JSX.Element => {
  return (
    <StyledWelcome
      initial={{ y: 1000, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "tween",
        duration: 1,
        ease: [0.12, 0.23, 0.5, 1],
        delay: 0.2,
      }}
    >
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "tween",
          duration: 1,
          ease: [0.12, 0.23, 0.5, 1],
          delay: 0.3,
        }}
      >
        <img className="welcome-logo" src="./icon.png" />
      </motion.div>
      <span>Hi, this is a template</span>
      <span>Vite + Electron + React</span>
    </StyledWelcome>
  );
};

export default memo(Welcome);
