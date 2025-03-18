import { useSelector } from "react-redux";
import { selectTheme } from "../redux/slice/themeSlice";
import Navbar from "../component/Navbar";
import HeroSection from "../component/home/HeroSection";
import { cat, coverImage } from "../constant/appImage";
import Learned from "../component/home/Learned";
import Worked from "../component/home/Worked";
import Footer from "../component/Footer";
import Contact from "../component/Contact";
import Project from "../component/home/Project";
import { Helmet } from "react-helmet-async";

/**
 * Home Component
 *
 * This component serves as the main entry point for the portfolio application,
 * rendering the navigation bar, hero section, learned skills, projects,
 * work experience, contact information, and footer. It utilizes the
 * Redux store to manage theme state and applies SEO-friendly metadata
 * using the Helmet component.
 */
const Home = () => {
  const theme = useSelector(selectTheme);
  return (
    <>
      <Helmet>
        <title>Adebayo Adesina - Full-Stack Developer Portfolio</title>
        <meta
          name="description"
          content="Explore the portfolio of Joseph Adebayo Adesina, a skilled full-stack developer specializing in creating seamless web applications. Discover projects, skills, and contact information."
        />
        <meta
          name="keywords"
          content="Joseph Adebayo, Full-Stack Developer, Web Applications, Portfolio, React, Redux, JavaScript, TypeScript"
        />
        <meta name="author" content="Joseph Adebayo Adesina" />
        <meta
          property="og:title"
          content="Joseph Adebayo Adesina - Full-Stack Developer Portfolio"
        />
        <meta
          property="og:description"
          content="Explore the portfolio of Joseph Adebayo Adesina, a skilled full-stack developer specializing in creating seamless web applications. Discover projects, skills, and contact information."
        />
      </Helmet>

      <main className={`${theme.isDark ? "bg-appBlack" : "bg-appWhite"}`}>
        <Navbar />
        <HeroSection />
        <Learned />
        <Project />
        <Worked />
        <Contact />
        <div className="">
          <div className="container mx-auto">
            <div className="flex justify-end">
              <img
                src={cat}
                alt="cat blink image"
                className="w-[80px] sm:w-[100px] md:[150px] lg:w-[230px]"
              />
            </div>
            <img src={coverImage} alt="cover image" />
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Home;
