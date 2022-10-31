import type { Item } from "../types/type";
import type { ButtonOptions } from "../types/type";
import {
  faRainbow,
  faBug,
  faBookmark,
  faBookJournalWhills,
  faPaintBrush
} from '@fortawesome/free-solid-svg-icons'

const icons = [faRainbow, faBug, faBookmark, faBookJournalWhills, faPaintBrush];
const pages = ["/", "posts", "bookmarks", "todos", 'svg'];

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
const randomApi = "https://jsonplaceholder.typicode.com";

export const search = async (type?: ApiType) => {
  let prefix = "posts";

  if (type && type == ApiType.TODOS) {
    prefix = "todos";
  }
  return await fetch(`${randomApi}/${prefix}`, {
    headers: { "Access-Control-Allow-Origin": "*" },
    method: "GET",
  })
    .then((res) => {
      return res.json();
    })
    .catch((e) => {
      throw new Error(`Failed to fetch ${prefix} from api`);
    });
};

export enum ApiType {
  POSTS,
  TODOS,
}


