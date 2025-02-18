import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Icon } from "@iconify/react/dist/iconify.js";
import { projectData } from "../constant/projectData";

gsap.registerPlugin(ScrollTrigger);

const AnimatedBoxes: React.FC = () => {
  const boxesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const boxes = boxesRef.current;

    boxes.forEach((box) => {
      gsap.to(box, {
        scrollTrigger: {
          trigger: box,
          scrub: true,
          end: "+=80",
          pin: true,
          endTrigger: "hidden",
          onEnter: ({ progress, direction, isActive }) =>

            console.log(progress, direction, isActive),
        },
        x: 0,
        y: 250,
        opacity:0.2,
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
            className="box w-full h-full border-2 shadow-inner rounded-3xl overflow-hidden bg-white"
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
