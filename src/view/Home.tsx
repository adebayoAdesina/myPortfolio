import { useSelector } from "react-redux";
import { selectTheme } from "../redux/slice/themeSlice";
import Navbar from "../component/Navbar";
import HeroSection from "../component/home/HeroSection";
import { cat, coverImage } from "../constant/appImage";
import Learned from "../component/home/Learned";
import Worked from "../component/home/Worked";
import Footer from "../component/Footer";
import Contact from "../component/Contact";

const Home = () => {
  const theme = useSelector(selectTheme);
  return (
    <main className={`${theme.isDark ? "bg-appBlack" : "bg-appWhite"}`}>
      <Navbar />
      <HeroSection />
      <Learned />
      <Worked />
      <Contact/>
      <div className="">
        <div className="container mx-auto">
          <div className="flex justify-end">
            <img src={cat} alt="" />
          </div>
          <img src={coverImage} alt="cover image" />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Home;
