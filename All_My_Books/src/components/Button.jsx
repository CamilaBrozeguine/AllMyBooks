import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Button = styled(motion.button)`
background: var(--nude);
color: var(--branco);
border: none;
padding: 10px 20px;
border-radius: 30px;
margin: 10px 0px;
font-family: 'Poppins', sans-serif;
cursor: pointer;
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);glow: 0 0 8px var(--quasebranco);
transition: background-color 0.3s ease, transform 0.2s ease;

&:hover {
  background: var(--quasebranco);
  transform: translateY(-2px);
}
  `;
