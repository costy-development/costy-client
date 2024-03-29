import { CircularNavItemT } from "@/interface/config.types";

type CircularNavT = {
  [key: string]: {
    main: Array<CircularNavItemT>;
    sub: {
      [key: string]: Array<CircularNavItemT>;
    };
  };
};

const circularNav: CircularNavT = {
  costy_tools: {
    main: [
      {
        path: "?sub=calculator",
        label: "/ კალკულატორი",
        icon: "/icons/calculator.png",
        rotate: -42.8,
        left: -30,
        height: 210,
        archHeight: 45,
        cx: 90,
        cy: 45,
        rx: 75,
        ry: 16,
        startOffset: 3,
      },
      {
        path: "?",
        label: "/ ფასები",
        icon: "/icons/price-list.png",
        rotate: -14,
        left: 5,
        height: 110,
        archHeight: 45,
        cx: 50,
        cy: 40,
        rx: 38,
        ry: 10,
        startOffset: 3,
      },
      {
        path: "?",
        label: `/ შაბლონი`,
        icon: "/icons/template.png",
        rotate: 8,
        left: -5,
        height: 130,
        archHeight: 45,
        cx: 62,
        cy: 43,
        rx: 48,
        ry: 12,
        startOffset: 3,
      },
      {
        path: "?",
        label: "/ სტანდარტები",
        icon: "/icons/standards.png",
        rotate: 36.5,
        left: -20,
        height: 185,
        archHeight: 45,
        cx: 85,
        cy: 40,
        rx: 70,
        ry: 14,
        startOffset: 3,
      },
      {
        path: "?",
        label: "/ სახელმძღვანელოები",
        icon: "/icons/guidelines.png",
        rotate: 77,
        left: -55,
        height: 285,
        archHeight: 42,
        cx: 118,
        cy: 52,
        rx: 95,
        ry: 27,
        startOffset: 6,
      },
      {
        path: "?",
        label: "/ ლექსიკონი",
        icon: "/icons/dictionary.png",
        rotate: 114.5,
        left: -12,
        height: 155,
        archHeight: 45,
        cx: 75,
        cy: 35,
        rx: 55,
        ry: 12,
        startOffset: 3,
      },
    ],
    sub: {
      calculator: [
        {
          path: "/costy_tools?sub=calculator",
          label: "/ მთავარი",
          rotate: -50,
          left: -13,
          height: 90,
          archHeight: 45,
          cx: 38,
          rx: 40,
          cy: 20,
          ry: 8,
          startOffset: 3,
        },
        {
          path: "/costy_tools?sub=calculator",
          label: "/ არქიტექტურა",
          rotate: -21,
          left: -34,
          height: 140,
          archHeight: 45,
          cx: 66,
          rx: 66,
          cy: 30,
          ry: 20,
          startOffset: 6,
        },
        {
          path: "/costy_tools?sub=calculator",
          label: "/ ინჟინერია",
          rotate: 11,
          left: -30,
          height: 110,
          archHeight: 45,
          cx: 47,
          rx: 47,
          cy: 30,
          ry: 11,
          startOffset: 3,
        },
        {
          path: "/costy_tools?sub=calculator",
          label: "/ მშენებლობა",
          rotate: 41,
          left: -35,
          height: 130,
          archHeight: 45,
          cx: 62,
          rx: 58,
          cy: 30,
          ry: 15,
          startOffset: 3,
        },
      ],
    },
  },
};

export default circularNav;
