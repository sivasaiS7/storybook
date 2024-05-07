/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ComponentProps } from "react";

import theme from "./styles/theme";

function formatCurrencyAmount(
  value: string | number | undefined,
  fractionDigits?: number,
): string {
  if (!value) return "-";

  if (!(typeof value === "number" || !isContainsText(value))) return value;
  const amount = Number(value);
  const minusSign = amount < 0 ? "-" : "";

  return amount !== 0
    ? `${minusSign}${Math.abs(amount).toLocaleString("en-US", {
        minimumFractionDigits: fractionDigits || 2,
      })}`
    : "-";
}

function isContainsText(amount: string) {
  return isNaN(Number(amount));
}

export type CurrencyProps = {
  /** Amount */
  amount: string | number;
  /** Currency Symbol */
  currency?: string;
  /** No.of fraction digits in Amount */
  fractionDigits?: number;
} & ComponentProps<"span">;

/** UI component for Currency */
export function Currency({
  amount,
  currency,
  fractionDigits,
  ...props
}: CurrencyProps): JSX.Element {
  const formattedAmount = formatCurrencyAmount(amount, fractionDigits);
  return (
    <span css={containerCss} {...props}>
      {currency && formattedAmount != "-" && (
        <span css={labelCss} className="currency-label">
          {currency}
        </span>
      )}
      <span className="currency-amount">{formattedAmount}</span>
    </span>
  );
}

const containerCss = css(theme.css.typography.bodyEmphasisPortal, {
  color: theme.colors.primaryText,
});

const labelCss = css(theme.css.typography.labels, {
  color: theme.colors.coolGray500,
  paddingRight: "0.2em",
});

export default Currency;
