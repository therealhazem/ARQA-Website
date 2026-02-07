"use client"

import { motion } from "framer-motion"

const defaultVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

type Props = {
  children: React.ReactNode
  className?: string
}

/**
 * Wraps content and fades it in when it enters the viewport.
 * Used for section-level animations without changing layout or style.
 */
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
