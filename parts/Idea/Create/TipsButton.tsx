import { useState } from "react";
import type { TipsType } from "~/types/Idea/Create/TipsType";
import { AiFillInfoCircle } from "react-icons/ai";

export default function TipsButton({ name, description }: TipsType) {
  const [checked, setChecked] = useState(false);
  const handleSubmit = () => {
    setChecked(!checked);
  };

  return (
    <div>
      <div
        className={[
          "w-full text-gray-200 flex flex-col justify-start items-start p-2 rounded-lg cursor-pointer transition-all ease-in-out duration-300",
          checked
            ? "bg-purple-800 hover:bg-purple-900"
            : "bg-gray-700 hover:bg-gray-600 hover:scale-95  ",
        ].join(" ")}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="font-bold">{name}</h1>
          <button
            className="p-2 bg-slate-500 hover:bg-slate-700 focus:ring-slate-800 transition-all ease-in-out duration-500 rounded-full"
            onClick={handleSubmit}
          >
            <AiFillInfoCircle fontSize={14} />
          </button>
        </div>
        <div className={checked ? "block" : "hidden"}>
          <p className="text-sm text-gray-300 mt-4 font-medium tracking-wide">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
