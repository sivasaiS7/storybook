/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ComponentProps } from "react";

import theme from "./styles/theme";

export type LabelProps = {
  /** Content of the Label */
  content: React.ReactNode;
  /** Controls UI of the label */
  variation:
    | "categories"
    | "active"
    | "pending"
    | "alert"
    | "neutral"
    | "neutralWhite"
    | "disabled"
    | "singlifeRed";
} & ComponentProps<"span">;

/** UI component for Label */
export function Label({
  content,
  variation,
  ...props
}: LabelProps): JSX.Element {
  return (
    <span
      className="label"
      css={[containerCss, variationCss.get(variation)]}
      {...props}
    >
      {content}
    </span>
  );
}

const containerCss = css(
  theme.css.borderRadius.borderRadius8,
  theme.css.typography.labels,
  {
    padding: `${4 / 16}rem ${8 / 16}rem`,
    width: "fit-content",
    display: "inline-block",
  },
);

const categoriesCss = css({
  background: `${theme.colors.disabledBgState}`,
  color: `${theme.colors.coolGray500}`,
});

const activeCss = css({
  background: `${theme.colors.successLight}`,
  color: `${theme.colors.successDark}`,
});

const pendingCss = css({
  background: `${theme.colors.pendingLight}`,
  color: `${theme.colors.pendingDark}`,
});

const alertCss = css({
  background: `${theme.colors.errorLight}`,
  color: `${theme.colors.errorPrimary}`,
});

const neutralCss = css({
  background: `${theme.colors.disabledBgState}`,
  color: `${theme.colors.primaryText}`,
});

const neutralWhiteCss = css({
  background: `${theme.colors.white}`,
  color: `${theme.colors.primaryText}`,
});

const disabledCss = css({
  background: `${theme.colors.coolGray800}`,
  color: `${theme.colors.white}`,
});

const singlifeRedCss = css({
  background: `${theme.colors.singlifeRed}`,
  color: `${theme.colors.white}`,
});

const variationCss = new Map([
  ["categories", categoriesCss],
  ["active", activeCss],
  ["pending", pendingCss],
  ["alert", alertCss],
  ["neutral", neutralCss],
  ["neutralWhite", neutralWhiteCss],
  ["disabled", disabledCss],
  ["singlifeRed", singlifeRedCss],
]);

export default Label;
