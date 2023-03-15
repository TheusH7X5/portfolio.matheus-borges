import { Text } from '@chakra-ui/react'
import React from 'react'
import { motion } from 'framer-motion';

export const TextHome = ({text}) => {
  const TextMotion = motion(Text);

  return (
    <TextMotion initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{delay: .5, duration: 1}} fontSize='15px' w='1000px' mx='auto' mb='.5rem'>{text}</TextMotion>
  )
}
