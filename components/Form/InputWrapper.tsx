import type { ComponentProps, PropsWithChildren, ReactNode } from "react";

type InputWrapperProps = Pick<ComponentProps<"input">, "id"> & {
  label: string;
  icon?: ReactNode;
};

export function InputWrapper(props: PropsWithChildren<InputWrapperProps>) {
  return (
    <div className="w-full">
      <label
        htmlFor={props.id}
        className="block mb-2 text-sm font-medium text-gray-200"
      >
        {props.label}
      </label>
      <div className="relative">
        {props.icon !== undefined && (
          <div className="absolute left-4 top-4">{props.icon}</div>
        )}
        {props.children}
      </div>
    </div>
  );
}
