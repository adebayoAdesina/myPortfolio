import { useState } from "react";
import HeaderAndSubHeader from "../HeaderAndSubHeader";
import { useSelector } from "react-redux";
import { selectTheme } from "../../redux/slice/themeSlice";

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
  return (
    <section className="py-5 container mx-auto">
      <HeaderAndSubHeader header="What I've" subHeader="Learned" />
      <div className="flex justify-center gap-5 mt-6">
        {learnedButton.map((option, index) => (
          <button
          onClick={()=>setCurrentIndex(index)}
            className={`px-5 py-2 rounded-t-3xl ${
              theme.isDark
                ? currentIndex == index && "bg-appPrimary"
                : currentIndex == index ? "bg-appPrimary text-appWhite" : "bg-appLightGray"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Learned;
