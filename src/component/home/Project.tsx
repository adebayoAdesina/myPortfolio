import { josephAdebayoImage } from "../../constant/appImage";
import AnimatedBoxes from "../AnimatedBoxes";
import HeaderAndSubHeader from "../HeaderAndSubHeader";

/**
 * Project Component
 * 
 * This component serves as a section for displaying projects. It includes an 
 * image, a header and subheader, and utilizes the AnimatedBoxes component 
 * to showcase various projects.
 */
const Project = () => {

  return (
    <section id="#projects">
      <div className="container mx-auto">
        <div className="flex justify-center group ">
          <img
            src={josephAdebayoImage}
            alt="Joseph Adebayo Image"
            className="max-w-[400px]"
          />
        </div>
        <div className="mt-5">
          <HeaderAndSubHeader
            header="Projects"
            subHeader="I've Contributed To"
          />
        </div>
        <AnimatedBoxes />
      </div>
    </section>
  );
};

export default Project;
