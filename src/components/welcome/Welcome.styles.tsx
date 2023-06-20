import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledWelcome = styled(motion.div)`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: clamp(1rem, 5vw, 4rem);
  .welcome-logo {
    max-width: clamp(10px, 10vw, 100px);
    pointer-events: none;
  }
`;

export default StyledWelcome;
