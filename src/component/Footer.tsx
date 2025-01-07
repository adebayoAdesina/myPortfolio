import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useState } from "react";
import { socialsData } from "../constant/socialsData";

const Footer = () => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const currentTime = new Date();
      const formattedTime = currentTime.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setTime(formattedTime);
    };

    // Update the time initially and set an interval to update every second
    updateTime();
    const timerId = setInterval(updateTime, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timerId);
  }, []);
  return (
    <footer>
      <div
        className="tenor-gif-embed"
        data-postid="8622995"
        data-share-method="host"
        data-aspect-ratio="1"
        data-width="100%"
      >
        <a href="https://tenor.com/view/smoke-smokeman-gif-8622995">
          Smoke Smokeman GIF
        </a>
        from <a href="https://tenor.com/search/smoke-gifs">Smoke GIFs</a>
      </div>{" "}
      <script
        type="text/javascript"
        async
        src="https://tenor.com/embed.js"
      ></script>
      <div className="flex justify-between container mx-auto py-16 items-center">
        <div className="flex flex-col">
          <div className="flex items-center gap-2 text-xl">
            <Icon icon="si:copyright-alt-line" className="text-xl" />
            <div>
              Beloved &nbsp;
              {new Date().getFullYear()}
            </div>
          </div>
          {time}
        </div>
        <div className="flex gap-5">
          {socialsData.map((option) => (
            <a
              key={option.link}
              href={option.link}
              target="_blank"
              className="border-2 w-12 h-12 rounded-full hover:rounded-none transition-all duration-200 justify-center items-center flex flex-col border-black"
            >
              <Icon icon={option.icon} width="24" height="24" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
