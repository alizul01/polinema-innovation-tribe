import type {InputLabel} from "./InputLabel";
import type {HTMLInputTypeAttribute, ReactElement} from "react";
import type { UseFormRegister } from "react-hook-form";

export type InputType = {
  placeholder: string,
  label?: string,
  id: string,
  type: HTMLInputTypeAttribute,
  icon?: ReactElement,
  defaultValue?: string | ReadonlyArray<string> | number | undefined,
  register?: UseFormRegister
}