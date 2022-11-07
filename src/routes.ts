import { pages, type Page } from '@Api/pages';

type Route = Omit<Page, "icon"> &{};

const routes = pages.map(page => (page as Route));

export { routes }