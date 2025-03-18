import { useRef, useState } from "react";
import HeaderAndSubHeader from "../HeaderAndSubHeader";
import { useSelector } from "react-redux";
import { selectTheme } from "../../redux/slice/themeSlice";
import { Icon } from "@iconify/react/dist/iconify.js";
import { learnedData } from "../../constant/learnedData";
import { cube } from "../../constant/appImage";
import { motion, useInView } from "framer-motion";

const Learned = () => {
  const theme = useSelector(selectTheme);

  const learnedButton: string[] = [
    "All",
    "Language",
    "Front-end",
    "Backend-end",
    "Others",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredData =
    currentIndex === 0
      ? learnedData
      : learnedData.filter((item) =>
          item.type.includes(learnedButton[currentIndex])
        );

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-250px" });

  return (
    <section
      className="sm:py-5 px-4 sm:px-8 lg:px-0 lg:container mx-auto"
      id="skills"
    >
      <div className="flex">
        <img src={cube} alt="cube rotating" />
      </div>
      <HeaderAndSubHeader header="What I've" subHeader="Learned" />
      <div
        className="flex flex-wrap lg:flex-nowrap justify-center gap-3 sm:gap-4 lg:gap-5 mt-2 sm:mt-4 lg:mt-6"
        ref={ref}
      >
        {learnedButton.map((option, index) => (
          <motion.button
            onClick={() => setCurrentIndex(index)}
            className={`px-5 py-2 rounded-t-3xl text-sm md:text-base ${
              theme.isDark
                ? currentIndex == index
                  ? "bg-appPrimary text-white"
                  : "bg-appLightGray"
                : currentIndex == index
                ? "bg-appPrimary text-appWhite"
                : "bg-appLightGray"
            }`}
          >
            {option}
          </motion.button>
        ))}
      </div>
      <div className=" min-h-60">
        <div className="justify-center flex flex-wrap my-4 gap-2 md:gap-3 lg:gap-4 px-5 sm:px-8 md:px-12 lg:px-16">
          {filteredData.map((option, id) => (
            <motion.div
              key={id}
              initial={{ opacity: 0.2 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{
                delay: id * 0.05,
                duration: 0.3,
                ease: "easeInOut",
              }}
              className={`hover:animate-shake hover:bg-appViolet hover:text-white cursor-default border border-appPrimary px-6 py-2 rounded-2xl flex justify-center items-center gap-2 text-sm lg:text-base ${
                theme.isDark ? "text-appLightGray" : "text-appBlack"
              }`}
            >
              <Icon
                icon={option.icon}
                className="text-lg md:text-xl lg:text-3xl"
              />
              <h6>{option.name}</h6>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Learned;
