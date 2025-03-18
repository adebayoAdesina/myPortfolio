import { useSelector } from "react-redux";
import { selectTheme } from "../redux/slice/themeSlice";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface HeaderAndSubHeaderProps {
  header: string;
  subHeader: string;
}

/**
 * HeaderAndSubHeader Component
 * 
 * This component displays a header and a subheader with animation effects. 
 * It utilizes Redux for theme management and Framer Motion for animations, 
 * allowing the headers to fade in and slide into view when they come into 
 * the viewport.
 */
const HeaderAndSubHeader: React.FC<HeaderAndSubHeaderProps> = ({

  header,
  subHeader,
}) => {
  const theme = useSelector(selectTheme);
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col items-center justify-center py-4 overflow-hidden"
    >
      <motion.h3
        initial={{ opacity: 0, x: 400 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className={`font-greatVibes text-2xl leading-3 ${
          theme.isDark && "text-appWhite"
        }`}
      >
        {header}
      </motion.h3>
      <motion.h3
        initial={{ opacity: 0, x: -400 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{ WebkitTextStroke: "1px #006ACE" }}
        className={`font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-widest stroked-text ${
          theme.isDark ? "text-appWhite" : "text-appWhite"
        }`}
      >
        {subHeader}
      </motion.h3>
    </motion.div>
  );
};

export default HeaderAndSubHeader;
