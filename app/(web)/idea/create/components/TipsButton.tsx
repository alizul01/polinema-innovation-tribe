import React, {useState} from 'react';
import type {TipsType} from "~/app/(web)/idea/create/type/TipsType";
import CheckCircle from "~icons/heroicons/check-circle-solid";

const TipsButton: React.FC<TipsType> = ({name}) => {
  const [checked, setChecked] = useState(false);
  const handleSubmit = () => {
    setChecked(!checked);
  }
  return (
    <div>
      <div className={["w-full text-white flex flex-row justify-between items-center p-2 rounded-md transition-all ease-in-out hover:scale-95 duration-300 cursor-pointer", checked ? "bg-green-500 hover:bg-green-600" : "bg-gray-500 hover:bg-gray-400"].join(" ")}>
        <h1 className={"font-bold"}>
          {name}
        </h1>
        <button className={"p-2 bg-slate-500 hover:bg-slate-700 focus:ring-slate-800 transition-all ease-in-out duration-500 rounded-full"} onClick={handleSubmit}>
          <CheckCircle fontSize={14} />
        </button>
      </div>
    </div>
  );
}

export default TipsButton;