import { useState } from "react";
import HeaderAndSubHeader from "../HeaderAndSubHeader";
import { useSelector } from "react-redux";
import { selectTheme } from "../../redux/slice/themeSlice";
import { Icon } from "@iconify/react/dist/iconify.js";
import { learnedData } from "../../constant/learnedData";

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
  return (
    <section className="py-5 container mx-auto">
      <HeaderAndSubHeader header="What I've" subHeader="Learned" />
      <div className="flex justify-center gap-5 mt-6">
        {learnedButton.map((option, index) => (
          <button
            onClick={() => setCurrentIndex(index)}
            className={`px-5 py-2 rounded-t-3xl ${
              theme.isDark
                ? currentIndex == index && "bg-appPrimary"
                : currentIndex == index
                ? "bg-appPrimary text-appWhite"
                : "bg-appLightGray"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
      <div className=" min-h-60">

      <div className="justify-center flex flex-wrap my-4 gap-4 px-16">
        {filteredData.map((option) => (
            <div className="border border-appPrimary px-6 py-2 rounded-2xl flex justify-center items-center gap-2">
            <Icon icon={option.icon} className="text-3xl" />
            <h6>{option.name}</h6>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
};

export default Learned;
