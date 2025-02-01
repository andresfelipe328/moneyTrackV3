"use client";

import { AnimatePresence, motion } from "framer-motion";

type Props = {
  style: string;
  children: React.ReactNode;
};

const PageContentAnim = ({ style, children }: Props) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className={style}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageContentAnim;
