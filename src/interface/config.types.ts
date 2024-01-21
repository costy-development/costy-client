import { NavigateFunction, Location } from "react-router-dom";

type RouteT = {
  path: string;
  title: string;
  element: React.ReactNode;
  children: Array<RouteT>;
};

type DecodedUserT = {
  _id: string;
  email: string;
  role: "USER" | "MANAGER";
  exp: number;
  iat: number;
};

type RouterHistoryT = {
  navigate:
    | NavigateFunction
    | ((path: string, state?: { [key: string]: any }) => void);
  location: Location;
};

type CircularNavItemT = {
  path: string;
  label: string;
  rotate: number;
  left: number;
  height: number;
  archHeight: number;
  cx: number;
  cy: number;
  ry: number;
  rx: number;
  startOffset: number;
  icon?: string;
};

export type { RouteT, DecodedUserT, RouterHistoryT, CircularNavItemT };
