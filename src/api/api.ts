import type { Item } from "../types/type";
import type { ButtonOptions } from "../types/type";
import {
  faRainbow,
  faBug,
  faHome,
  faTimes
} from '@fortawesome/free-solid-svg-icons'

const icons = [faRainbow, faBug, faHome, faTimes];

export const dummyCards: Item[] = [...Array(8).keys()].map((index) => {
  return {
    id: (index + 1).toString(),
    title: `${index + 1}. Lorem Ipsum`,
    body: `${
      index + 1
    } Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...`,
  } as Item;
});

export const dummyButtons: ButtonOptions[] = [...Array(4).keys()].map((index) => {
  return {
    label: index < 3 ? `${index + 1}. Button` : "Close",
    icon: icons.at(index)
  } as ButtonOptions;
});


