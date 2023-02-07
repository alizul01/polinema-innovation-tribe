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
        className={`border text-sm rounded-md block w-full bg-transparent border-slate-700 hover:border-purple-500 placeholder-slate-300 placeholder-font-medium text-white focus:ring-purple-500 py-3 px-4 focus:border-purple-500 ${
          props.icon !== undefined && "pl-10"
        }`}
        autoComplete="false"
      ></textarea>
      <Errors name={props.name} />
    </InputWrapper>
  );
});
