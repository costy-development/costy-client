import { DefaultTheme } from "styled-components";

const Theme: DefaultTheme = {
  colors: {
    text: "#8C8C8C",
    bg: "#f9f9f9",
    white: "#fff",
    black: "#111",
    soft_black: "#24272C",
    gray: "#D9D9D9",
    gray_shade: "#8C8C8C",
    gray_dark: "#404040",
    blue: "#1f1ade",
    red: "#D90D1E",
    red_shade: "#BF0426",
    blue_secondary: "#1E6FD9",
    blue_shade: "#0D65D9",
    blue_tint: "#5C9DF2",
  },

  circle: {
    parent_diameter: "660px",
    child_diameter: "470px",
    center_diameter: "",
  },

  fontSize: {
    xs: "1.2rem",
    sm: "1.4rem",
    base: "1.6rem",
    md: "1.8rem",
    lg: "2rem",
    xl: "2.4rem",
    xxl: "2.8rem",
    h3: "3.8rem",
    h2: "4.8rem",
    h1: "6.8rem",
  },

  boxShadow: {
    radial_sm: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    radial_md: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    radial_lg: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    bottom_right_sm: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
    bottom_right_lg: "rgb(38, 57, 77) 10px 20px 30px -10px",
    space_sm: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px",
    circle_shadow: "0px 0px 15px 4px rgba(0, 0, 0, 0.3)",
  },

  breakpoints: {
    desktop: "max-width:96em",
    desktop_sm: "max-width:80em",
    tablet: "max-width:64em",
    tablet_sm: "max-width:53.75em",
    mobile_lg: "max-width:40em",
    mobile: "max-width:30em",
  },
};

export default Theme;
