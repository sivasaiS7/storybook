/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

import theme from "./styles/theme";

type SectionHeaderProps = {
  /** Title of header section*/
  children: React.ReactNode;
};

/** UI component for header section */
export function SectionHeader(props: SectionHeaderProps) {
  return (
    <div css={headerSectionCss}>
      <h3 css={headerSectionTextCss}>{props.children}</h3>
    </div>
  );
}

const headerSectionCss = css({
  display: `flex`,
  alignItems: `center`,
  borderLeft: `4px solid ${theme.colors.singlifeRed}`,
  height: `1.25rem`,
});

const headerSectionTextCss = css(
  {
    paddingLeft: `1rem`,
    margin: `0`,
    height: `1.25rem`,
  },
  theme.css.typography.headersH3,
);

export default SectionHeader;
