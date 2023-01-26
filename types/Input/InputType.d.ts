import type { InputLabel } from "./InputLabel";
import type { HTMLInputTypeAttribute, ReactElement } from "react";
import type { UseFormRegister } from "react-hook-form";
import type { RegisterOptions } from "react-hook-form/dist/types/validator";
import { FieldErrors } from "react-hook-form/dist/types/errors";
import type { FormState } from "react-hook-form/dist/types/form";

export type InputType = {
  placeholder: string;
  label?: string;
  id: string;
  type: HTMLInputTypeAttribute;
  icon?: ReactElement;
  defaultValue?: string | ReadonlyArray<string> | number | undefined;
  register?: UseFormRegister;
  width?: "1/2" | "full";
  registerOption?: RegisterOptions;
  errors?: ReactElement;
};
