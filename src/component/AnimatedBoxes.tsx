import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
          end: "+=100",
          pin: true,
          endTrigger: "hidden",
          onEnter: ({ progress, direction, isActive }) =>
            console.log(progress, direction, isActive),
        },
        x: 0,
        y: 400,
        display: "hidden",
      });
    });

    // Cleanup function to kill ScrollTrigger instances
    return () => {
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, []);

  return (
    <div style={{ height: "", padding: "50px" }} className="w-full container">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="box w-full min-h-[60vh] border-2 shadow-inner rounded-3xl overflow-hidden bg-white"
          ref={(el) => {
            if (el) boxesRef.current[i] = el;
          }}
        >
          <div className={`flex ${i % 2 && "flex-row-reverse"} h-full`}>
            <div className={`w-7/12 flex h-full ${i % 2 && 'flex-row-reverse'} `}>
              <div className="flex h-full">
                <img
                  src="https://th.bing.com/th/id/R.7e6980c76a3a36775271a59670f19c61?rik=ayfCJl5Wugr2sg&pid=ImgRaw&r=0"
                  alt=""
                  className="h-full object-cover"
                />
              </div>
              <div className="flex m-6 justify-center">
                <img
                  src="https://th.bing.com/th/id/R.7e6980c76a3a36775271a59670f19c61?rik=ayfCJl5Wugr2sg&pid=ImgRaw&r=0"
                  className="h-10"
                />
              </div>
            </div>
            <div className="w-5/12"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnimatedBoxes;
