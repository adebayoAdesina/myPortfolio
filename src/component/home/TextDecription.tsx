import { useEffect, useRef, useState } from "react";
import { ProjectType } from "../../type/type";

interface TextDescriptionProps {
  option: ProjectType;
  i: number;
  moreIndex: number | null;
  setMoreIndex: React.Dispatch<React.SetStateAction<number | null>>;
}

const TextDecription: React.FC<TextDescriptionProps> = ({
  i,
  moreIndex,
  option,
  setMoreIndex,
}) => {
  const textRef = useRef<HTMLDivElement>(null);
  const [isClamped, setIsClamped] = useState(false);

  useEffect(() => {
    if (textRef.current) {
      const el = textRef.current;
      // If scrollHeight > clientHeight, text is truncated
      setIsClamped(el.scrollHeight > el.clientHeight);
    }
  }, [option.description]);

  return (
    <p className="text-xs sm:text-sm flex flex-col gap-1 mb-2">
      <div
        ref={textRef}
        className={`${
          moreIndex === i ? "" : "line-clamp-5"
        } text-justify opacity-95`}
        dangerouslySetInnerHTML={{ __html: option.description }}
      />
      {isClamped && (moreIndex == i ? (
        <button
          onClick={() => setMoreIndex(null)}
          className="font-medium text-appPrimary cursor-pointer text-end"
        >
          See Less
        </button>
      ) : (
        <button
          onClick={() => setMoreIndex(i)}
          className="font-medium text-appPrimary cursor-pointer text-end"
        >
          See More.....
        </button>
      ))}
    </p>
  );
};

export default TextDecription;
