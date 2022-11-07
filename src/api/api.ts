import type { Item } from "../types/type";
import type { ButtonOptions } from "../types/type";
import {
  faCube,
  faRoute,
  faMagicWandSparkles,
  faCircleHalfStroke,
} from '@fortawesome/free-solid-svg-icons'
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { pages, type Page } from "./pages";

const infoIcons = [faCube, faRoute, faMagicWandSparkles, faCircleHalfStroke]
const texts = ['custom components', 'router spa', 'custom animations', 'dark/light mode']
export type feature = {
  icon: IconProp,
  text: string
}
export const features: feature[] = infoIcons.map((icon, index) => { return {icon, text: texts.at(index)} })

export const dummyCards: Item[] = [...Array(20).keys()].map((index) => {
  return {
    id: (index + 1).toString(),
    title: `${index + 1}. Lorem Ipsum`,
    body: `${
      index + 1
    } Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...`,
  } as Item;
});

export const dummyButtons: ButtonOptions[] = pages.map((page:Page) => {
  return {
    icon:page.icon,
    route: page.name
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


