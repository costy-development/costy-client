import { useContext } from "react";

import { ThemeContext } from "./ThemeProvider";
import { AppContext } from "./AppProvider";
import { AppUIContext } from "./AppUIProvider";

const useThemeContext = () => useContext(ThemeContext);
const useAppContext = () => useContext(AppContext);
const useAppUIContext = () => useContext(AppUIContext);

export { useThemeContext, useAppContext, useAppUIContext };
