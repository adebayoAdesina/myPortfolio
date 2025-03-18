import { Icon } from "@iconify/react/dist/iconify.js";
import HeaderAndSubHeader from "../HeaderAndSubHeader";
import { workedData } from "../../constant/workedData";
import { useSelector } from "react-redux";
import { selectTheme } from "../../redux/slice/themeSlice";

const Worked = () => {
  const theme = useSelector(selectTheme);
  return (
    <section className="flex flex-col justify-center container mx-auto py-10">
      <HeaderAndSubHeader header="Where I've" subHeader="Worked" />
      <div className="flex flex-col gap-2 my-2 sm:my-6 md:my-10">
        {workedData.map((item, index) => (
          <div
            key={index + item.company}
            className={`w-full flex ${index % 2 && "flex-row-reverse"}`}
          >
            <div className="w-ful lg:w-1/2 p-4 flex justify-center">
              {index % 2 ? (
                <Icon
                  icon="ph:flow-arrow"
                  className="hidden lg:flex text-5xl translate-y-9 translate-x-2 text-appPrimary rotate-180"
                />
              ) : (
                <></>
              )}
              <div className="w-full lg:w-11/12 border rounded-2xl p-6">
                <h4 className="text-2xl font-bold text-appPrimary">
                  {item.role}
                </h4>
                <h5
                  className={`text-lg font-medium ${
                    theme.isDark ? "text-appLightGray" : "text-appBlack"
                  }`}
                >
                  {item.company}
                </h5>
                <p
                  className={`flex lg:hidden font-medium text-xs italic ${
                    theme.isDark ? "text-appWhite" : "text-appBlack"
                  }`}
                >
                  {item.dateFrom} - {item.dateTo}.
                </p>
                <p
                  className={`my-3 text-sm ${
                    theme.isDark ? "text-appLightGray" : "text-appBlack"
                  }`}
                >
                  {item.workDescription}
                </p>

                <p className="flex items-center gap-2">
                  <b
                    className={`${
                      theme.isDark ? "text-appLightGray" : "text-appBlack"
                    }`}
                  >
                    {" "}
                    Skills:
                  </b>{" "}
                  <div>
                    <div className="flex gap-2 flex-wrap">
                      {item.skills.map((skill, id) => (
                        <span
                          key={id}
                          className="bg-appLightGray text-appBlack rounded-sm px-3 flex items-center gap-1"
                        >
                          <Icon
                            icon={skill.icon || ""}
                            className="text-xl  text-appPrimary"
                          />
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </p>
              </div>
              {!(index % 2) ? (
                <Icon
                  icon="ph:flow-arrow"
                  className="hidden lg:flex text-5xl translate-y-9 -translate-x-2 text-appPrimary"
                />
              ) : (
                ""
              )}
            </div>
            <div className="lg:w-52 flex flex-col lg:flex-row justify-center bgs-line">
              <div
                className={`border rounded-full flex justify-center items-center p-4 w-[50px] h-[50px] md:w-[60px] md:h-[60px] z-10 ${
                  index % 2 ? "mt-5 lg:mt-14" : "mt-5"
                } bg-appPrimary`}
              >
                <Icon
                  icon="ic:baseline-work"
                  className="text-appWhite text-3xl"
                />
              </div>
            </div>
            <div
              className={`hidden lg:w-1/2 p-4 lg:flex ${
                index % 2 ? "justify-end" : "justify-start"
              } items-center`}
            >
              <p
                className={`font-medium italic ${
                  theme.isDark ? "text-appWhite" : "text-appBlack"
                }`}
              >
                {item.dateFrom} - {item.dateTo}.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Worked;
