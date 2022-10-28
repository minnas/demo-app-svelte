import type { Item } from "../types/type";
import type { ButtonOptions } from "../types/type";
import {
  faRainbow,
  faBug,
  faBookmark,
  faBookJournalWhills
} from '@fortawesome/free-solid-svg-icons'

const icons = [faRainbow, faBug, faBookmark, faBookJournalWhills];
const pages = ["/", "posts", "bookmarks", "todos"];

export const dummyCards: Item[] = [...Array(20).keys()].map((index) => {
  return {
    id: (index + 1).toString(),
    title: `${index + 1}. Lorem Ipsum`,
    body: `${
      index + 1
    } Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...`,
  } as Item;
});

export const dummyButtons: ButtonOptions[] = pages.map((page:string, index) => {
  return {
    icon: icons.at(index),
    route: page
  } as ButtonOptions;
});


