import { RouterHistoryT } from "@/interface/config.types";

const COSTY_PASSPORT_KEY = "COSTY_PASSPORT";

const PRODUCTS_PER_PAGE = 12;
const USERS_PER_PAGE = 15;
const ARTICLES_PER_PAGE = 20;

const RouterHistory: RouterHistoryT = {
  navigate: () => {},
  location: {
    hash: "",
    key: "",
    pathname: "",
    search: "",
    state: null,
  },
};

export {
  COSTY_PASSPORT_KEY,
  PRODUCTS_PER_PAGE,
  USERS_PER_PAGE,
  ARTICLES_PER_PAGE,
  RouterHistory,
};
