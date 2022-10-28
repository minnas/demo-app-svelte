import type { IconProp } from "@fortawesome/fontawesome-svg-core";

export type Item = {
  id: string;
  title: string;
  body: string;
};
export type Card = Omit<Item, "id"> & {};

export type ButtonOptions = {
  icon: IconProp;
  label?: string;
  route?: string;
};