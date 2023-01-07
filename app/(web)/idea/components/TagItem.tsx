import tinycolor from "tinycolor2";
import type { Tag } from "../types/Tag";

type TagItemProps = Tag & {
  isActive?: boolean;
  onClick: (slug: Tag) => void;
};

export function TagItem({ isActive, onClick, ...props }: TagItemProps) {
  return (
    <div
      className={`rounded-full px-3 py-2 border font-medium text-sm cursor-pointer ${
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
      {props.text}
    </div>
  );
}
