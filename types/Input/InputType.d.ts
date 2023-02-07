import type { HTMLInputTypeAttribute, ReactElement } from "react";
import type { UseFormRegister } from "react-hook-form";
import type { RegisterOptions } from "react-hook-form/dist/types/validator";

export type InputType = {
  placeholder: string;
  label?: string;
  id: Idea;
  type: HTMLInputTypeAttribute;
  icon?: ReactElement;
  defaultValue?: string | ReadonlyArray<string> | number | undefined;
  register?: UseFormRegister;
  width?: "1/2" | "full";
  registerOption?: RegisterOptions;
  errors?: ReactElement;
  isTextArea?: boolean;
};
