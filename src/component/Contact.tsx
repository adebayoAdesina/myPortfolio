import { Icon } from "@iconify/react/dist/iconify.js";
import { brainOne, creaturesOne } from "../constant/appImage";
import { contactData } from "../constant/contactData";
import { useSelector } from "react-redux";
import { selectTheme } from "../redux/slice/themeSlice";

const Contact = () => {
  const theme = useSelector(selectTheme);

  return (
    <section className="py-4 sm:py-6 md:py-8 lg:py-10" id="#contact">
      <div className="flex flex-col container mx-auto justify-center items-center gap-3">
        <p
          className={`tracking-wide text-base sm:text-lg lg:text-xl font-semibold max-w-[800px] mx-4 text-center ${
            theme.isDark ? "text-appWhite" : "text-appBlack"
          }`}
        >
          I can assist you in designing, enhancing, or developing the product
          experience for both new and existing products. Don't hesitate to reach
          out to me.
        </p>
        <img src={theme.isDark ? brainOne : creaturesOne} alt="" />
        <h2
          className={`text-3xl md:text-4xl lg:text-5xl font-extrabold ${
            theme.isDark ? "text-appPrimary" : "text-appBlack"
          }`}
        >
          Got any ideas?
        </h2>
        <h5
          className={`text-base md:text-lg font-mulish ${
            theme.isDark ? "text-appWhite" : "text-appBlack"
          }`}
        >
          Get in touch
        </h5>
        <div className="flex flex-wrap justify-center gap-10 my-10">
          {contactData.map((option) => (
            <div
              key={option.icon}
              className="flex flex-col gap-2 justify-center items-center"
            >
              <Icon
                icon={option.icon}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
              />
              <p
                className={`text-sm md:text-base font-semibold tracking-wide ${
                  theme.isDark ? "text-appWhite" : "text-appBlack"
                }`}
              >
                {option.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
