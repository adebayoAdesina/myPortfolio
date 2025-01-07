import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useState } from "react";
import { socialsData } from "../constant/socialsData";
import { cartoonStudent } from "../constant/appImage";
import { useSelector } from "react-redux";
import { selectTheme } from "../redux/slice/themeSlice";

const Footer = () => {
  const theme = useSelector(selectTheme);

  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const currentTime = new Date();
      const formattedTime = currentTime.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setTime(formattedTime);
    };

    // Update the time initially and set an interval to update every second
    updateTime();
    const timerId = setInterval(updateTime, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timerId);
  }, []);
  return (
    <>
      <footer>
        <div
          className={`flex justify-between container mx-auto py-16 items-center ${
            theme.isDark ? "text-appWhite" : "text-appBlack"
          }`}
        >
          <div className="flex flex-col">
            <div className="flex items-center gap-1 text-xl">
              <Icon icon="si:copyright-alt-line" className="text-xl" />
              <div>
                JADE &nbsp;
                <span className="font-medium">{new Date().getFullYear()}</span>
              </div>
            </div>
            {time}
          </div>
          <div className="flex gap-5">
            {socialsData.map((option) => (
              <a
                key={option.link}
                href={option.link}
                target="_blank"
                className={`border-2 w-12 h-12 rounded-full hover:rounded-none transition-all duration-200 justify-center items-center flex flex-col ${
                  theme.isDark
                    ? "border-appWhite text-appWhite"
                    : "border-black text-appBlack"
                }`}
              >
                <Icon icon={option.icon} width="24" height="24" />
              </a>
            ))}
          </div>
        </div>
      </footer>
      <div className="flex fixed bottom-0 left-0 ">
        <img
          src={cartoonStudent}
          alt="student cartoon image"
          className="transform -translate-x-14"
        />
      </div>
    </>
  );
};

export default Footer;
