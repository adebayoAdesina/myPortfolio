import AnimatedBoxes from "../AnimatedBoxes";
import HeaderAndSubHeader from "../HeaderAndSubHeader";

const Project = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex justify-center">
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.QFl5ItwwqbTdlkdf2DMtlAHaHa&rs=1&pid=ImgDetMain"
            alt=""
          />
        </div>
        <div className="mt-5">
          <HeaderAndSubHeader
            header="Projects"
            subHeader="I've Contributed To"
          />
        </div>
        <AnimatedBoxes/>
      </div>
    </section>
  );
};

export default Project;
