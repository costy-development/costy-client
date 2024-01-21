import { createContext } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

import Theme from "@/styles/Theme";
import GlobalStyles from "@/styles/GlobalStyles";

type ThemeProviderT = {
  children: React.ReactNode;
};

export const ThemeContext = createContext({});

const ThemeProvider: React.FC<ThemeProviderT> = ({ children }) => {
  return (
    <ThemeContext.Provider value={{}}>
      <StyledThemeProvider theme={Theme}>
        <GlobalStyles />
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
