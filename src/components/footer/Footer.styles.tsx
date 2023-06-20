import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledFooter = styled(motion.footer)`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  padding: 10px;
  flex: 0 1 60px;
  border-top: 1px solid ${({ theme: { color } }): string => color};
`;

export default StyledFooter;
