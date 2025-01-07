import { useSelector } from "react-redux";
import { selectTheme } from "../redux/slice/themeSlice";

interface HeaderAndSubHeaderProps {
  header: string;
  subHeader: string;
}

const HeaderAndSubHeader: React.FC<HeaderAndSubHeaderProps> = ({
  header,
  subHeader,
}) => {
  const theme = useSelector(selectTheme);
  return (
    <div className="flex flex-col items-center justify-center pb-4">
      <h3
        className={`font-greatVibes text-2xl leading-3 ${
          theme.isDark && "text-appWhite"
        }`}
      >
        {header}
      </h3>
      <h3
        style={{ WebkitTextStroke: "1px #006ACE" }}
        className={`font-extrabold text-6xl tracking-widest stroked-text ${
          theme.isDark ? "text-appWhite" : "text-appWhite"
        }`}
      >
        {subHeader}
      </h3>
    </div>
  );
};

export default HeaderAndSubHeader;
