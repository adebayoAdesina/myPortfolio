import { useSelector } from "react-redux";
import { selectTheme } from "../redux/slice/themeSlice";
import Navbar from "../component/Navbar";
import HeroSection from "../component/home/HeroSection";
import { coverImage } from "../constant/appImage";
import Learned from "../component/home/Learned";

const Home = () => {
  const theme = useSelector(selectTheme);
  return (
    <main className={`${theme.isDark ? "bg-appBlack" : "bg-appWhite"}`}>
      <Navbar />
      <HeroSection />
      <Learned/>
      <div className="">
        <div className="container mx-auto">
          <img src={coverImage} alt="cover image" />
        </div>
      </div>
    </main>
  );
};

export default Home;
