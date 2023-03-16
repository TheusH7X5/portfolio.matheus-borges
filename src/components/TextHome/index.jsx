import React from 'react'
import { TextMotion } from './styles'

export const TextHome = ({text}) => {

  return (
    <TextMotion  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{delay: .5, duration: .5}}>{text}</TextMotion>
  )
}
