import { ReactNode } from "react";
import { IconType } from "react-icons/lib";

export type secondRace = number | undefined

export interface IconLink {
  to: string;
  children: ReactNode;
  Icon: IconType;
  active?: boolean;
}