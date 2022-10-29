import type { IconProp } from "@fortawesome/fontawesome-svg-core";

export type Item = {
  id: string;
  title: string;
  body: string;
};

export type ButtonOptions = {
  icon: IconProp;
  label?: string;
  route?: string;
};

export type RawItem = Omit<Item, "id"> & {};

export type Bookmark = Item & {
  externalId: string;
  created?: Date;
};

export type Todo = Omit<Item, "title"> & {
  done?: boolean;
};
