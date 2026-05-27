import styled from "styled-components";
import { motion } from "framer-motion";

export const Input = styled(motion.input)`
  padding: 10px;
    border: 1px solid var(--quasebranco);
    border-radius: 30px;
    font-size: 16px;
    width: 100%;
    background-color: var(--quasebranco);
    color: var(--text); 
    transition: border-color 0.3s ease;
    

    &:focus {
      outline: none;
      border-color: var(--quasebranco);
    }
    
    &: hover{
      border-color: var(--quasebranco);
      }
`;