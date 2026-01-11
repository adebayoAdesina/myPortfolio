import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useState } from "react";
import { socialsData } from "../constant/socialsData";
import { useSelector } from "react-redux";
import { selectTheme } from "../redux/slice/themeSlice";

/**
 * Footer Component
 *
 * This component implements the footer of the application. It displays the current
 * year, a copyright notice, the current time, and social media icons linked to
 * various platforms. The component utilizes Redux for theme management.
 */
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
          className={`flex flex-col-reverse gap-4 sm:flex-row justify-between container mx-auto py-16 items-center sm:items-start ${
            theme.isDark ? "text-appWhite" : "text-appBlack"
          }`}
        >
          <div className="flex flex-row items-center sm:items-start sm:justify-start  justify-between w-full sm:flex-col mt-5 sm:mt-0 text-sm sm:text-base md:text-lg px-4 sm:px-">
            <div className="flex items-center gap-1  ">
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
                className={`border-2 w-10 md:w-12 h-10 md:h-12 rounded-full hover:rounded-none transition-all duration-200 justify-center items-center flex flex-col ${
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
      {/* <div className="flex fixed bottom-0 left-0 ">
        <img
          src={cartoonStudent}
          alt="student cartoon image"
          className="transform -translate-x-14"
        />
      </div> */}
    </>
  );
};

export default Footer;
