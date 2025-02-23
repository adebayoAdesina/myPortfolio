import { josephAdebayoImage } from "../../constant/appImage";
import AnimatedBoxes from "../AnimatedBoxes";
import HeaderAndSubHeader from "../HeaderAndSubHeader";

const Project = () => {
  return (
    <section>
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
