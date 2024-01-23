import { RouterHistoryT } from "@/interface/config.types";

const COSTY_LINKEDIN_URL =
  "https://www.linkedin.com/company/costy-io/?fbclid=IwAR1PYOaqxldYJbsEGC2794kn7T_Hf1cgnGMuvyvDa2ZXvDObn7RfZlts8cE&originalSubdomain=ge";
const COSTY_INSTAGRAM_URL =
  "https://www.instagram.com/costy.io_/?fbclid=IwAR1sLBow6fLQYuuRkpAI7HQznzACG8X1ahUtDyXFOd3BGRmEjDUOj166QZA";
const COSTY_FACEBOOK_URL = "https://www.facebook.com/costy.io";

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
  COSTY_FACEBOOK_URL,
  COSTY_INSTAGRAM_URL,
  COSTY_LINKEDIN_URL,
  COSTY_PASSPORT_KEY,
  PRODUCTS_PER_PAGE,
  USERS_PER_PAGE,
  ARTICLES_PER_PAGE,
  RouterHistory,
};
