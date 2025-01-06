import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { selectTheme, setTheme } from "../redux/slice/themeSlice";
import { navItem } from "../type/type";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();
  const location = useLocation();

  const changeTheme = () => {
    if (theme?.theme === "Dark") {
      dispatch(setTheme({ theme: "Light" }));

      localStorage.setItem("myapptheme", "Light");
    } else {
      dispatch(setTheme({ theme: "Dark" }));
      localStorage.setItem("myapptheme", "Dark");
    }
  };

  const navItems: navItem[] = [
    {
      label: "Home",
      path: "/",
      onclick: () => {
        setNav(false);
      },
    },

    {
      label: "About",
      path: "/about",
      onclick: () => {
        setNav(false);
      },
    },
    {
      label: "Projects",
      path: "/projects",
      onclick: () => {
        setNav(false);
      },
    },
    {
      label: "Skills",
      path: "/skills",
      onclick: () => {
        setNav(false);
      },
    },

    {
      label: "Contact",
      path: "/contact",
      onclick: () => {
        setNav(false);
      },
    },
  ];

  return (
    <nav className="lg:py-10 py-5 px-5 lg:px-10 sticky top-0 z-50">
      <header
        className={`${
          theme?.theme === "Light"
            ? "bg-[#eaf7f7] text-[#1B1E22] border border-white/45 "
            : "bg-appBlack text-[#BBBCBD] border border-white/10"
        }   py-4 lg:px-14 px-6 backdrop-blur-md bg-opacity-45 rounded-full `}
      >
        <div className="flex justify-between items-center">
          <Link to="/" className="text-base lg:text-[22px] font-extrabold">
            B.<span className="text-appGreen">Dev</span>
          </Link>
          <ul className="lg:flex hidden lg:gap-x-7 text-base sm:text-sm">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className={
                    location.pathname === item.path
                      ? theme?.theme === "Dark"
                        ? "text-[#fafefe] font-bold"
                        : "text-[#111111] font-bold"
                      : ""
                  }
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-5 cursor-pointer lg:text-xl text-lg">
            <span onClick={() => setNav(!nav)} className="lg:hidden flex">
              <Icon icon="hugeicons:menu-11" />
            </span>
            <button onClick={changeTheme}>
              {theme?.theme === "Light" ? (
                <span>
                  <Icon icon="ph:sun" />
                </span>
              ) : (
                <span>
                  <Icon icon="ri:moon-fill" />
                </span>
              )}
            </button>
            <a
              href="/Favour-emmanuel-resume.pdf"
              download={"Favour-emmanuel-resume.pdf"}
            >
              <button className="hidden lg:flex bg-linear-gradient text-sm text-[#323232] py-3 px-5 rounded-full">
                Download CV
                <span className="text-xl ml-2">
                  <Icon icon="iconoir:download" />
                </span>
              </button>
            </a>
          </div>

          {/* mobile menu */}

          {/* side drawer menu */}
          <div
            className={
              nav
                ? `fixed left-[-1.5rem] top-[-1rem] w-full max-w-[38rem] md:max-w-[48rem] lg:hidden z-999 duration-300 px-10 py-9 ${
                    theme?.theme === "Light" ? "bg-appLight" : "bg-appBlack"
                  } h-screen`
                : "fixed left-[-100%] top-0 h-full z-10 "
            }
          >
            <div className="flex justify-between items-center">
              <Link to="/" className="text-base lg:text-xl font-extrabold">
                B<span className="text-appGreen">Dev</span>
              </Link>
              <span
                onClick={() => setNav(!nav)}
                className="cursor-pointer text-xl"
              >
                <Icon icon="line-md:menu-to-close-alt-transition" />
              </span>
            </div>
            <ul className="flex flex-col gap-y-6 mt-8 text-sm sm:text-base">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    onClick={item.onclick}
                    className={
                      location.pathname === item.path ? "text-appGreen" : ""
                    }
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="my-3">
              <button className=" mt-5 bg-linear-gradient text-sm text-[#323232] py-3 px-5 rounded-full hover:bg-transparent hover:border hover:border-appGreen hover:text-appGreen hover:ease-in-out hover:duration-300">
                Download CV
              </button>
            </div>
          </div>
        </div>
      </header>
    </nav>
  );
};

export default Navbar;
