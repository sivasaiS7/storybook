/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { ComponentProps } from "react";

import theme from "./styles/theme";
import { Error } from "./field-statuses";
import RadioButton from "./radio-button";

type RadioGroupProps = {
  /** Group label */
  label?: React.ReactNode;
  /** List of radio's label and value */
  options: {
    value: string;
    label: React.ReactNode;
  }[];
  /** Error message */
  error?: string;
} & ComponentProps<"input">;

/** UI component for Radio Group */
export function RadioGroup({
  label,
  options,
  name,
  value,
  error,
  ...props
}: RadioGroupProps) {
  return (
    <div>
      {label && <span css={labelCss}>{label}</span>}
      {options.map((obj, index) => (
        <RadioButton
          key={`radiogroup-${name}-radiobutton-${index}`}
          {...props}
          name={name}
          value={obj.value}
          label={obj.label}
          checked={value == obj.value}
        />
      ))}
      {error && <Error>{error}</Error>}
    </div>
  );
}

const labelCss = css({
  display: "block",
  marginBottom: "1.3125em",
}, theme.css.typography.headersH3);

export default RadioGroup;
