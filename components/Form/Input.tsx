import { type ComponentProps, forwardRef, ReactNode } from "react";
import { Errors } from "./Errors";
import { InputWrapper } from "./InputWrapper";

export type InputProps = Omit<ComponentProps<"input">, "label"> & {
  label: string;
  icon?: ReactNode;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, type = "text", ...props },
  ref
) {
  return (
    <InputWrapper {...props}>
      <input
        {...props}
        type={type}
        ref={ref}
        className={`text-sm border border-slate-700 rounded-lg block w-full hover:border-purple-500 placeholder-slate-400 text-gray-200 focus:ring-purple-500 py-3 px-4 focus:border-purple-500 bg-slate-800 ${
          props.icon !== undefined && "pl-10"
        }`}
        autoComplete="false"
      />
      <Errors name={props.name} />
    </InputWrapper>
  );
});
