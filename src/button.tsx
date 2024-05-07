/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ComponentProps, useMemo } from "react";

import theme from "./styles/theme";

export type ButtonProps = {
  /** Button size */
  size?: "medium" | "large";
  /** Button variant */
  variant?: "primary" | "link" | "secondary";
  /** Button Content */
  children: React.ReactNode;
} & ComponentProps<"button">;

/** UI component for button */
export function Button({
  size = "medium",
  variant = "primary",
  children,
  ...props
}: ButtonProps): JSX.Element {
  const { sizeCss, variationCss, disabledCss } = useMemo(() => {
    let sizeCss = null;
    let variationCss = null;
    let disabledCss = null;

    switch (size) {
      case "medium":
        sizeCss = mediumCss;
        break;
      case "large":
        sizeCss = largeCss;
        break;
    }

    switch (variant) {
      case "link":
        variationCss = linkCss;
        if (props.disabled) {
          disabledCss = linkDisabledCss;
        }
        break;
      case "secondary":
        variationCss = secondaryCss;
        if (props.disabled) {
          disabledCss = secondaryDisabledCss;
        }
        break;
      default:
        if (props.disabled) {
          disabledCss = primaryDisabledCss;
        }
        break;
    }

    return { sizeCss, variationCss, disabledCss };
  }, [props.disabled, size, variant]);

  return (
    <button
      css={[defaultCss, sizeCss, variationCss, disabledCss]}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
}

const defaultCss = css(
  {
    minWidth: `${180 / 16}rem`,
    padding: 0,
    backgroundColor: theme.colors.singlifeRed,
    color: theme.colors.white,
    border: "none",
    outline: "none",
  },
  theme.css.borderRadius.buttonsDefault,
  {
    ":hover": {
      background: `linear-gradient(0deg, rgb(0 0 0 / 0.2), rgb(0 0 0 / 0.2)) ${theme.colors.singlifeRed}`,
    },
  },
);

const linkCss = css({
  color: theme.colors.singlifeRed,
  backgroundColor: "transparent",
  minWidth: "unset",

  ":hover": {
    background: "transparent",
  },
});

const secondaryCss = css({
  color: theme.colors.singlifeRed,
  backgroundColor: theme.colors.white,
  border: `1px solid ${theme.colors.singlifeRed}`,

  ":hover": {
    background: theme.colors.red50,
  },
});

const mediumCss = css(
  {
    height: `${42 / 16}rem`,
  },
  theme.css.typography.buttonMedium,
);

const primaryDisabledCss = css({
  backgroundColor: theme.colors.disabledText,
  pointerEvents: "none",
});

const secondaryDisabledCss = css({
  borderColor: theme.colors.disabledText,
  color: theme.colors.disabledText,
  pointerEvents: "none",
});

const linkDisabledCss = css({
  color: theme.colors.disabledText,
  pointerEvents: "none",
});

const largeCss = css(
  {
    height: `${52 / 16}rem`,
  },
  theme.css.typography.buttonLarge,
);

export default Button;
