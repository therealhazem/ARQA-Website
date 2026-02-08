"use client"

import { motion, type Variants } from "framer-motion"
import type { ReactNode } from "react"

const defaultVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
}

type Props = {
  children: ReactNode
  className?: string
}

export default function FadeInSection({ children, className }: Props) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={defaultVariants}
      className={className}
    >
      {children}
    </motion.div>
  )
}
