/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { ComponentProps } from "react";

import radioButtonDefault from "./images/radio-button-default.svg";
import radioButtonDisabled from "./images/radio-button-disabled.svg";
import radioButtonHover from "./images/radio-button-hover.svg";
import radioButtonSelectedDisabled from "./images/radio-button-selected-disabled.svg";
import radioButtonSelected from "./images/radio-button-selected.svg";
import theme from "./styles/theme";

type RadioButtonProps = {
  /** Label */
  label: React.ReactNode;
  /** Controls state of the Button */
  checked?: boolean;
  /** Disables the button */
  disabled?: boolean;
} & ComponentProps<"input">;

/** UI component for Radio Button */
export function RadioButton({
  label,
  checked,
  disabled,
  name,
  ...props
}: RadioButtonProps) {
  return (
    <div>
      <div
        css={containerCss(!!disabled)}
        data-testid={`${name || "test"}-radio-button-div`}
      >
        <label css={labelCss(!!disabled)}>
          <img css={radioIconCss(!!disabled, checked)} alt="radio-btn" />
          <input
            css={radioInputCss}
            type="radio"
            {...props}
            checked={checked}
            name={name}
          />
          <span css={textCss(!!disabled, checked)}>{label}</span>
        </label>
      </div>
    </div>
  );
}

const containerCss = (disabled?: boolean) =>
  css(
    {
      color: theme.colors.primaryText,
      boxSizing: "border-box",
      cursor: `${disabled ? "default" : "pointer"}`,
    },
    theme.css.borderRadius.default,
  );

const labelCss = (disabled?: boolean) =>
  css({
    display: "flex",
    flexDirection: "row",
    margin: "0.8125em",
    paddingBottom: "0.8125em",
    cursor: `${disabled ? "default" : "pointer"}`,
  });

const radioIconCss = (disabled?: boolean, checked?: boolean) =>
  css(
    {
      position: "relative",
      margin: "auto 0.6em auto 0",
      top: "-0.25rem",
      left: "1.75rem",
      display: "inline-block",
      width: "1.5em",
      height: "1.5em",
      content: `${
        checked
          ? disabled
            ? `url(${radioButtonSelectedDisabled})`
            : `url(${radioButtonSelected})`
          : disabled
          ? `url(${radioButtonDisabled})`
          : `url(${radioButtonDefault})`
      }
  `,
    },
    !disabled &&
      !checked && {
        ":hover": {
          content: `url(${radioButtonHover})`,
          display: "inline-block",
          width: "1.5em",
          height: "1.5em",
        },
      },
  );

const radioInputCss = css({
  margin: "auto 0.6em auto 0",
  visibility: "hidden",
  position: "relative",
});

const textCss = (disabled?: boolean, checked?: boolean) =>
  css(
    {
      color: `${disabled ? theme.colors.disabledText : "none"}`,
      margin: 0,
      paddingLeft: "1.4375em",
    },
    checked
      ? theme.css.typography.bodyEmphasisPortal
      : theme.css.typography.bodyMainPortal,
  );

export default RadioButton;
