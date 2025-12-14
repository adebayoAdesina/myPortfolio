import { Icon } from "@iconify/react/dist/iconify.js";
import { skillType } from "../../type/type";
import { useSelector } from "react-redux";
import { selectTheme } from "../../redux/slice/themeSlice";

interface ToolChipProps {
  id: number;
  tool: skillType;
}
const ToolChip: React.FC<ToolChipProps> = ({ id, tool }) => {
  const theme = useSelector(selectTheme);

  return (
    <span
      key={id}
      className={`${
        theme.isDark ? "bg-appLightGray/[0.25] text-white" : " bg-appLightGray text-appBlack"
      } text-xs md:text-sm border-none rounded-md px-3 py-1 flex items-center gap-2 italic`}
    >
      <Icon icon={tool.icon || ""} className="text-lg  text-appPrimary" />
      {tool.name}
    </span>
  );
};

export default ToolChip;
