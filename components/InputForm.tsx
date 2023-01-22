import React from "react";
import type { InputType } from "~/types/Input/InputType";
export function InputForm (props: InputType) {
  return (
    <div className={"py-3"}>
      <label htmlFor={props.id} className={"text-white font-bold block mb-2 text-lg font-medium text-white"}>
        {props.label}
      </label>
      <div className={"relative"}>
        {
          props.icon ? (
            <div className={"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"}>
              {props.icon}
            </div>
          ) : ' '
        }
        <input {...props.register} defaultValue={props.defaultValue} id={props.id} type={props.type} placeholder={props.placeholder} className={["border text-sm rounded-lg block w-full bg-slate-700 border-gray-600 placeholder-gray-300 text-white focus:ring-purple-500 p-4 focus:border-purple-500", props.icon ? 'pl-10' : ' '].join(' ')} autoComplete={"off"} />
      </div>
    </div>
  )
}