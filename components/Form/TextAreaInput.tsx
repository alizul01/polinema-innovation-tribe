import { ComponentProps, forwardRef, ReactNode } from "react";
import { Errors } from "./Errors";
import { InputWrapper } from "./InputWrapper";

type TextAreaInputProps = Omit<ComponentProps<"textarea">, "label"> & {
  label: string;
  name: string;
  icon?: ReactNode;
};

export const TextAreaInput = forwardRef<
  HTMLTextAreaElement,
  TextAreaInputProps
>(function TextAreaInput(props, ref) {
  return (
    <InputWrapper {...props}>
      <textarea
        {...props}
        ref={ref}
        className={`text-sm border border-slate-700 rounded-lg block w-full hover:border-purple-500 placeholder-slate-400 text-gray-200 focus:ring-purple-500 py-3 px-4 focus:border-purple-500 bg-slate-800 ${
          props.icon !== undefined && "pl-10"
        }`}
        autoComplete="false"
      ></textarea>
      <Errors name={props.name} />
    </InputWrapper>
  );
});
