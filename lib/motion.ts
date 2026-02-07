/**
 * Reusable Framer Motion variants for consistent, subtle animations.
 * Used across the site for a professional, medical-appropriate feel.
 */

export const fadeInUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.35, ease: "easeOut" },
};

export const staggerContainer = {
  animate: {
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

export const defaultTransition = { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] };
