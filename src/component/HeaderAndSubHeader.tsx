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
    <div className="flex flex-col items-center justify-center ">
      <h3
        className={`font-greatVibes text-2xl leading-3 ${
          theme.isDark && "text-appWhite"
        }`}
      >
        {header}
      </h3>
      <h3 className="font-londrinaOutline font-semibold text-5xl tracking-widest text-appPrimary">
        {subHeader}
      </h3>
    </div>
  );
};

export default HeaderAndSubHeader;
