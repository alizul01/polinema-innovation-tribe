import type { ReactNode } from "react";

type StepColor = {
  bg: string;
  text: string;
};

type StepData = {
  title: string;
  description: string;
  link: {
    href: string;
    text: string;
  };
  icon: ReactNode;
};

export type StepItemData = {
  title: string;
  color: StepColor;
  step: StepData[];
};
