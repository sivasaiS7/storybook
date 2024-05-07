/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

import validIcon from "./images/valid.svg";
import theme from "./styles/theme";

type StatusProps = {
  /** Status Message */
  children: React.ReactNode;
};

/** UI component for Error and Success Field Status */
export function Error(props: StatusProps) {
  return <p css={errorCss}>{props.children}</p>;
}

export function Success(props: StatusProps) {
  return <p css={statusCss}>{props.children}</p>;
}

const statusCssBefore = css(
  {
    content: `""`,
    display: `block`,
    height: `${25 / 16}rem`,
    left: `0`,
    position: `absolute`,
    width: `${25 / 16}rem`,
    backgroundImage: `url(${validIcon})`,
  },
  theme.css.typography.bodyMainPortal,
);

const statusCss = css(theme.css.typography.bodyEmphasisPortal, {
  color: theme.colors.successPrimary,
  margin: `1.875em 0 0.625em 2.1875em`,
  textAlign: "left",

  "::before": {
    ...statusCssBefore,
  },
});

const errorCss = css({
  color: theme.colors.errorPrimary,
  marginTop: "0.5em",
});

export default { Error, Success };
