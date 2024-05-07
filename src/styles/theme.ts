import { css, keyframes } from "@emotion/react";

export enum Colors {
  // Primary colours
  singlifeRed = "#FF0008",

  // Secondary colours
  // Reds
  red300 = "#F2605F",
  red200 = "#FA8F8C",
  red100 = "#FFC7CB",
  red50 = "#FFE9EC",
  red = "#E74C3C",
  redRgb = "rgba(250, 143, 140, 1)",

  // Yellows
  yellow600 = "#F0C900",
  yellow500 = "#FCE200",
  yellow300 = "#FDEB65",
  yellow100 = "#FFF6BE",
  yellow50 = "#FFFCE4",
  // Mandarin
  mandarin600 = "#F47815",
  mandarin300 = "#FFA168",
  mandarin100 = "#FFD5BE",
  mandarin50 = "#FCECE8",
  // Teal
  teal500 = "#00BAA4",
  teal300 = "#19D3C5",
  teal100 = "#B0ECE6",
  teal50 = "#DFF7F5",
  // Blue
  blue900 = "#001898",
  blue700 = "#004FB6",
  blue600 = "#2B58B8",
  blue300 = "#588ED5",
  blue100 = "#BBDEFB",
  blue50 = "#E3F2FD",
  blueLight = "#EDF3FF",
  blueLight2 = "#EBE6F6",
  blueLight3 = "#CDC2EA",
  blue = "#0725C5",
  blueDark = "#095EF8",
  blueDark2 = "#284387",
  blueDark3 = "#1B4079",
  blueDark4 = "#5764AC",
  blueDark5 = "#193C7D;",
  // Berry
  berry700 = "#783780",
  berry600 = "#883E89",
  berry300 = "#B474B0",
  berry100 = "#DFC2DD",
  berry50 = "#F2E6F1",
  // Cool Gray
  coolGray800 = "#707070",
  coolGray700 = "#504F4E",
  coolGray500 = "#8A8988", // subText
  coolGray300 = "#D0CFCE",
  coolGray100 = "#EFEEED",
  coolGray200 = "#F4F6F9",
  coolGray400 = "#DFE7F1",
  coolGray600 = coolGray200,
  coolGray900 = "#EEF1F5",
  coolGray70 = "#EFEFEF",
  coolGray80 = "#CCCCCC",
  // Warm Gray
  warmGray400 = "#76675D",
  warmGray300 = "#8B827B",
  warmGray200 = "#A9A6A4",
  warmGray50 = "#EAEAEA",
  // Black
  black900 = "#000000",
  black800 = "#262626",
  black700 = "#434343",
  black600 = "#555555",
  black500 = "#7B7B7B",
  black400 = "#9D9D9D",
  black300 = "#C4C4C4",
  black200 = "#D9D9D9",
  black100 = "#E9E9E9",
  black50 = "#F5F5F5",
  black30 = "#0000004d",
  // White
  white = "#FFFFFF",
  offWhite = "#FBFBFB",
  creamWhite = "#FEFAFA",
  cardWhite = "#FCFCFC",
  //Green
  deepJungleGreen = "#005348",
  green = "#2ECC71",

  // Feedback
  successDark = Colors.deepJungleGreen, // Feedback/successText
  successPrimary = "#00AC95",
  successLight = "#DFF7F6", // Feedback/successBg
  pendingDark = "#8C7003", // Feedback/pendingText
  pendingPrimary = "#F0C000",
  pendingLight = Colors.yellow50, // Feedback/pendingBg
  errorDark = "#801717",
  errorPrimary = "#C50000", // Feedback/errorText
  errorLight = "#FFEBED", // Feedback/errorBg
  informationPrimary = Colors.black800,
  informationLight = "#F8F7F6",

  // Borders / Lines
  borderLine = Colors.black300,
  borderLineBackground = "#FAFAFA",
  borderLineTabs = "#F8F8F8",
  dividerLine = "#D8D8D8", // borderLineDark

  // States
  disabledState = Colors.black400,
  inactiveState = Colors.black300,
  hoverState = Colors.errorPrimary,
  disabledBgState = Colors.black50, // lightBg

  // Text Colour (Greys)
  primaryText = Colors.black700, // mainText
  inactiveText = "#8C8C8C",
  disabledText = "#C9C9C9",
  emphasisText = Colors.black900,
  onColourText = Colors.white,
}

enum FilterColors {
  singlifeRed = "invert(18%) sepia(82%) saturate(6823%) hue-rotate(353deg) brightness(100%) contrast(115%)",
}

enum Fonts {
  mediumFont = "SharpSansMedium",
  semiboldFont = "SharpSansSemibold",
  bookFont = "SharpSansBook",
}

const typography = {
  // --- HEADER ---
  headersH1: {
    fontWeight: 600,
    fontFamily: Fonts.semiboldFont,
    fontSize: `${40 / 16}rem`,
    lineHeight: 1.4,
  }, // 40px

  headersH2: {
    fontWeight: 600,
    fontFamily: Fonts.semiboldFont,
    fontSize: `${28 / 16}rem`,
    lineHeight: 1.4,
  }, // 28px

  headersH3: {
    fontWeight: 600,
    fontFamily: Fonts.semiboldFont,
    fontSize: `${18 / 16}rem`,
    lineHeight: 1.4,
  }, // 18px

  headersH4: {
    fontWeight: 600,
    fontFamily: Fonts.semiboldFont,
    fontSize: "1rem",
    lineHeight: 1.4,
  }, // 16px

  headersH5: {
    fontWeight: 500,
    fontFamily: Fonts.semiboldFont,
    fontSize: `${14 / 16}rem`,
    lineHeight: 1.4,
  }, // 14px

  fieldHeader: {
    fontWeight: 500,
    fontFamily: Fonts.mediumFont,
    fontSize: `${14 / 16}rem`,
    lineHeight: 1.4,
  }, // 14px

  // --- BODY ---
  bodyMainDirect: {
    fontWeight: 400,
    fontFamily: Fonts.bookFont,
    fontSize: "1rem",
    lineHeight: 1.4,
  }, // 16px

  bodyEmphasisDirect: {
    fontWeight: 600,
    fontFamily: Fonts.semiboldFont,
    fontSize: "1rem",
    lineHeight: 1.4,
  }, // 16px

  bodyMainPortal: {
    fontWeight: 400,
    fontFamily: Fonts.bookFont,
    fontSize: `${14 / 16}rem`,
    lineHeight: 1.4,
  }, // 14px

  bodyTermsConditions: {
    fontWeight: 400,
    fontFamily: Fonts.bookFont,
    fontSize: `${12 / 16}rem`,
    lineHeight: 1.4,
  }, // 12px

  disclaimer: {
    fontWeight: 500,
    fontFamily: Fonts.mediumFont,
    fontSize: `${12 / 16}rem`,
    lineHeight: 1.4,
  }, // 12px

  bodyEmphasisPortal: {
    fontWeight: 600,
    fontFamily: Fonts.semiboldFont,
    fontSize: `${14 / 16}rem`,
    lineHeight: 1.4,
  }, // 14px

  // --- TAB ---
  tabActive: {
    fontWeight: 600,
    fontFamily: Fonts.semiboldFont,
    fontSize: `${14 / 16}rem`,
    lineHeight: 1.4,
    letterSpacing: "0.04em",
  }, // 14px

  tabInactive: {
    fontWeight: 500,
    fontFamily: Fonts.mediumFont,
    fontSize: `${14 / 16}rem`,
    lineHeight: 1.4,
    letterSpacing: "0.04em",
  }, // 14px

  // --- BUTTON ---
  buttonLarge: {
    fontWeight: 600,
    fontFamily: Fonts.semiboldFont,
    fontSize: "1rem",
    lineHeight: 1.4,
    letterSpacing: "0.04em",
  }, // 16px

  buttonMedium: {
    fontWeight: 600,
    fontFamily: Fonts.semiboldFont,
    fontSize: `${14 / 16}rem`,
    lineHeight: 1.4,
    letterSpacing: "0.04em",
  }, // 14px

  // --- LINK ---
  linksStandalonePortal: {
    fontWeight: 600,
    fontFamily: Fonts.semiboldFont,
    fontSize: `${14 / 16}rem`,
    lineHeight: 1.4,
    letterSpacing: "0.04em",
  }, // 14px

  linksBodyPortal: {
    fontWeight: 600,
    fontFamily: Fonts.semiboldFont,
    fontSize: `${14 / 16}rem`,
    lineHeight: 1.4,
  }, // 14px

  linksStandaloneDirect: {
    fontWeight: 600,
    fontFamily: Fonts.semiboldFont,
    fontSize: "1rem",
    lineHeight: 1.4,
    letterSpacing: "0.04em",
  }, // 16px

  linksBodyDirect: {
    fontWeight: 600,
    fontFamily: Fonts.semiboldFont,
    fontSize: "1rem",
    lineHeight: 1.4,
  }, // 16px

  steps: {
    fontWeight: 600,
    fontFamily: Fonts.mediumFont,
    fontSize: `${12 / 16}rem`,
    lineHeight: 1.4,
    letterSpacing: "0.04em",
  }, // 12px

  labels: {
    fontWeight: 600,
    fontFamily: Fonts.semiboldFont,
    fontSize: `${12 / 16}rem`,
    lineHeight: 1.4,
    letterSpacing: "0.04em",
  }, // 12px

  labelsCode: {
    fontWeight: 600,
    fontFamily: Fonts.mediumFont,
    fontSize: `${11 / 16}rem`,
    lineHeight: 1.4,
  }, // 11px

  labelsNofification: {
    fontWeight: 500,
    fontFamily: Fonts.bookFont,
    fontSize: `${11 / 16}rem`,
    lineHeight: 1.4,
  }, // 11px

  labelsMobile: {
    fontWeight: 600,
    fontFamily: Fonts.semiboldFont,
    fontSize: `${10 / 16}rem`,
    lineHeight: 1.4,
  }, // 10px

  termsConditions: {
    fontWeight: 600,
    fontFamily: Fonts.semiboldFont,
    fontSize: `${14 / 16}rem`,
    lineHeight: 1.4,
  }, // 14px

  systemMessage: {
    fontWeight: 600,
    fontFamily: Fonts.semiboldFont,
    fontSize: `${12 / 16}rem`,
  },
};

const borderRadius = {
  default: {
    borderRadius: 8,
  },
  top: {
    borderRadius: "8px 8px 0 0",
  },
  right: {
    borderRadius: "0 8px 8px 0",
  },
  bottom: {
    borderRadius: "0 0 8px 8px",
  },
  left: {
    borderRadius: "8px 0 0 8px",
  },
  checkbox: {
    borderRadius: 2,
  },
  none: {
    borderRadius: 0,
  },
  buttonsDefault: {
    borderRadius: 100,
  },
  borderRadius4: {
    borderRadius: 4,
  },
  borderRadius8: {
    borderRadius: 8,
  },
  borderRadius10: {
    borderRadius: 10,
  },
  borderRadiusTop4: {
    borderRadius: "4px 4px 0 0",
  },
  borderRadiusTop24: {
    borderRadius: "24px 24px 0 0",
  },
  borderRadiusRight4: {
    borderRadius: "0 4px 4px 0",
  },
  borderRadiusBottom4: {
    borderRadius: "0 0 4px 4px",
  },
  borderRadiusLeft4: {
    borderRadius: "4px 0 0 4px",
  },
  borderRadius16: {
    borderRadius: 16,
  },
  borderRadius24: {
    borderRadius: 24,
  },
  borderRadius30: {
    borderRadius: 30,
  },
  borderRadius50: {
    borderRadius: 50,
  },
  borderRadius80: {
    borderRadius: 80,
  },
  borderRadius100: {
    borderRadius: 100,
  },
  borderRadiusBottom16: {
    borderRadius: "0 0 16px 16px",
  },
  borderRadiusTop16: {
    borderRadius: "16px 16px 0 0",
  },
  borderRadiusLeft16: {
    borderRadius: "16px 0 0 16px",
  },
  borderRadiusLeftTop16: {
    borderRadius: "16px 0",
  },
  borderRadiusTopBottom16: {
    borderRadius: "16px 0 0",
  },
};

const hiddenScrollbarCss = css({
  msOverflowStyle: "none" /* Hides scrollbar for Internet Explorer 10+ */,
  scrollbarWidth: "none" /* Hides scrollbar for Firefox */,

  "::-webkit-scrollbar": {
    display: "none" /* Hides scrollbar for Safari and Chrome */,
  },
});

const boxShadow = {
  default: css({
    boxShadow: "0 1px 20px 0 rgba(0 0 0 / 0.1)",
  }),

  hoverDefault: css({
    boxShadow:
      "0 36px 14px rgba(250 143 140 / 0.01), 0 20px 12px rgba(250 143 140 / 0.05), 0 9px 9px rgba(250 143 140 / 0.09), 0 2px 5px rgba(250 143 140 / 0.1), 0 0 0 rgba(250 143 140 / 0.1)",
  }),
};

const animation = {
  viewDetails: keyframes`
    0% {
      -webkit-transform: translateX(0);
    }
    100% {
      -webkit-transform: translateX(1em);
    }
  `,
};

const theme = {
  colors: Colors,
  filterColors: FilterColors,
  fonts: Fonts,
  css: {
    typography,
    borderRadius,
    boxShadow,
    animation,
    hiddenScrollbarCss,
  },
};

export default theme;
