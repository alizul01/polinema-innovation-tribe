import tinycolor from "tinycolor2";
import type { Tag } from "../../../types/Idea/Index/Tag";

type TagItemProps = Tag & {
  isActive?: boolean;
  onClick: (slug: Tag) => void;
};

export default function TagItem({ isActive, onClick, ...props }: TagItemProps) {
  return (
    <div
      className={`rounded-full px-2 md:px-3 py-1 hover:scale-95 transition-all duration-500 ease-in-out border font-medium text-sm cursor-pointer ${
        isActive ? "brightness-150" : "brightness-90"
      }`}
      onClick={() => onClick(props)}
      style={{
        backgroundColor: tinycolor(props.colour)
          .setAlpha(0.1)
          .toPercentageRgbString(),
        borderColor: tinycolor(props.colour)
          .setAlpha(0.5)
          .toPercentageRgbString(),
        color: tinycolor(props.colour).darken(20).desaturate(40).toHexString(),
        boxShadow: isActive
          ? `0 0 0.625rem ${tinycolor(props.colour)
              .setAlpha(0.25)
              .toPercentageRgbString()}`
          : "unset",
      }}
    >
      {props.name}
    </div>
  );
}
