import { useSelector } from "react-redux";
import { selectTheme } from "../../redux/slice/themeSlice";
import { Icon } from "@iconify/react/dist/iconify.js";
import { UpdateFollower } from "react-mouse-follower";

const HeroSection = () => {
  const theme = useSelector(selectTheme);

  return (
    <UpdateFollower
      mouseOptions={{
        zIndex: 2,
        scale: 3,
        mixBlendMode: "difference",
        backgroundElement: (
          <div
            className={`${theme.isDark ? "bg-appPrimary" : "rgb(0, 106, 206)"}`}
          >
            <div className="text-white p-2">
              <Icon icon="heroicons-solid:cursor-click" />
            </div>
          </div>
        ),
      }}
    >
      <section>
        <div className="container mx-auto py-8">
          <div className="flex items-center">
            <div className="w-1/2 flex flex-col gap-2">
              <h4
                className={`font-greatVibes text-base ${
                  theme.isDark ? "text-appWhite" : "text-appBlack"
                }`}
              >
                Hi I'm &nbsp;
                <span className="font-mulish text-lg font-medium">
                  Joseph Adebayo
                </span>
              </h4>
              <UpdateFollower
                mouseOptions={{
                  zIndex: 2,
                  scale: 20,
                  backgroundColor: theme.isDark ? "rgb(0, 106, 206)" : `#fff`,
                  mixBlendMode: "difference",
                  backgroundElement: <div className={`text-white`}></div>,
                }}
              >
                <h2 className="text-5xl font-extrabold text-appPrimary">
                  A Full Stack Developer
                </h2>
              </UpdateFollower>
              <p
                className={`text-base font-mulish ${
                  theme.isDark ? "text-appWhite" : "text-appBlack"
                }`}
              >
                I specialize in creating seamless and efficient web applications
                from front-end to back-end. With a strong foundation in both
                client-side and server-side technologies, I bring innovative
                solutions to life, ensuring a smooth user experience and robust
                functionality.
              </p>
            </div>
            <div className="w-1/2">
              <div className="flex justify-center">
                <img
                  src="https://th.bing.com/th/id/R.07a251233e44319d35596a03b3838c9b?rik=YWWhpjNjq9WMZw&pid=ImgRaw&r=0"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex  py-10">
          <div
            draggable={true}
            className={`animate duration-1000 rounded-full p-4 ${
              theme.isDark ? "shadow-custom-light" : "shadow-custom-dark"
            } code-animation`}
          >
            <Icon
              icon="pepicons-print:code"
              className={`text-5xl animate-combineRotateHeartPulse ${
                theme.isDark ? "text-white" : "text-black"
              }`}
            />
          </div>
        </div>
      </section>
    </UpdateFollower>
  );
};

export default HeroSection;
