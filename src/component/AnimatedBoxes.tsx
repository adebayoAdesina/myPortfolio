import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Icon } from "@iconify/react/dist/iconify.js";
import { projectData } from "../constant/projectData";
import { useSelector } from "react-redux";
import { selectTheme } from "../redux/slice/themeSlice";

gsap.registerPlugin(ScrollTrigger);

/**
 * AnimatedBoxes Component
 * 
 * This component displays animated boxes containing project images, descriptions, 
 * and tools used for each project. It utilizes GSAP for animations and Redux for 
 * theme management, allowing users to select different images for each project 
 * and providing links to GitHub and live websites.
 */
const AnimatedBoxes: React.FC = () => {

  const boxesRef = useRef<HTMLDivElement[]>([]);
  const theme = useSelector(selectTheme);

  useEffect(() => {
    const boxes = boxesRef.current;
    boxes.forEach((box) => {
      gsap.to(box, {
        scrollTrigger: {
          trigger: box,
          scrub: 1,
          // end: "+=150",
          start: "top 10%",
          end: "top 10%",
          pin: true,
          endTrigger: "hidden",
          toggleActions: "play none none reverse",
          onEnter: ({ progress, direction, isActive }) =>
            console.log(progress, direction, isActive),
        },
        x: 0,
        y: 500,
        opacity: 0.1,
        display: "hidden",
      });
    });

    // Cleanup function to kill ScrollTrigger instances
    return () => {
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, []);

  const [selectedImages, setSelectedImages] = useState<number[]>(
    projectData.map(() => 0)
  );

  const handleImageSelect = (cardIndex: number, imageIndex: number) => {
    setSelectedImages((prev) =>
      prev.map((val, i) => (i === cardIndex ? imageIndex : val))
    );
  };
  return (
    <div
      style={{ height: "", padding: "50px" }}
      className="w-full xl:container mb-[400px]"
    >
      <div className="grid lg:grid-cols-2 gap-6">
        {projectData.map((option, i) => (
          <div
            key={i}
            className={`box w-full h-full border-2 shadow-inner rounded-3xl overflow-hidden ${
              theme.isDark == true ? "bg-appBlack text-appWhite" : "bg-white"
            } backdrop-blur-md bg-opacity-45 `}
            ref={(el) => {
              if (el) boxesRef.current[i] = el;
            }}
          >
            <div
              className={`flex flex-col ${i % 2 && "flex-col-reverse"} h-fit`}
            >
              <div className={`w-full flex flex-col`}>
                <div className="flex h-72 bg-red-400">
                  <img
                    src={option.image[selectedImages[i]]}
                    alt={option.title}
                    className="h-full object-cover object-[50%_0%] w-full"
                  />
                </div>
                <div className="flex m-6 justify-center">
                  {option.image.map((opt, index) => (
                    <div
                      key={`Image_${index}`}
                      className={`border-2 rounded-xl ${
                        selectedImages[i] === index
                          ? "border-blue-500"
                          : "border-gray-300"
                      }`}
                      onClick={() => handleImageSelect(i, index)}
                    >
                      <img src={opt} className="h-10 w-10" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full flex flex-col gap-2 justify-center p-6">
                <h4 className="text-xl font-bold text-appPrimary underline">
                  {option.title}
                </h4>
                <p className="text-sm">
                  <div
                    className="text-wrap line-clamp-5"
                    dangerouslySetInnerHTML={{ __html: option.description }}
                  />
                  <span className="font-medium text-appPrimary">
                    See More.....
                  </span>
                </p>
                <p className="flex items-center gap-2">
                  <b
                    className={`${
                      theme.isDark ? "text-appLightGray" : "text-appBlack"
                    }`}
                  >
                    {" "}
                    Tools:
                  </b>{" "}
                  <div>
                    <div className="flex gap-2 flex-wrap">
                      {option.tools.map((tool, id) => (
                        <span
                          key={id}
                          className="bg-appLightGray text-appBlack rounded-sm px-3 flex items-center gap-1"
                        >
                          <Icon
                            icon={tool.icon || ""}
                            className="text-xl  text-appPrimary"
                          />
                          {tool.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </p>
                <div className="flex flex-wrap mt-5 gap-5">
                  {option.links.github && (
                    <a
                      href={option.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`rounded-full border border-x-appTeal w-12 h-12 transform flex justify-center items-center shadow-inner`}
                      style={{
                        rotate: `${Math.random() * 180}deg`,
                      }}
                    >
                      <Icon
                        icon="akar-icons:github-fill"
                        className="text-2xl scale-125 text-appPrimary"
                      />
                    </a>
                  )}
                  {option.links.website && (
                    <a
                      href={option.links.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`rounded-full border border-y-appTeal w-12 h-12  transform flex justify-center items-center shadow-inner`}
                      style={{
                        rotate: `${Math.random() * 45}deg`,
                      }}
                    >
                      <Icon
                        icon="icon-park-solid:preview-open"
                        className="text-2xl scale-125 text-appPrimary"
                      />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedBoxes;
