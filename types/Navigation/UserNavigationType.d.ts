import type { ReactElement } from "react";

export type UserNavigationType = {
  name: string;
  url: string;
  icon: ReactElement;
  isForbidden?: boolean;
};
