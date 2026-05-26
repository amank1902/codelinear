import { motion } from "framer-motion";

export default function FadeIn({
  children,
  delay = 0,
  y = 16,
  duration = 0.6,
  className = "",
  as: Tag = "div",
  ...rest
}) {
  const MotionTag = motion[Tag] ?? motion.div;
  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
