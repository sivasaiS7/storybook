/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ReactNode, useState } from "react";

import chevron from "./assets/images/chevron-up.svg";
import theme from "./styles/theme";

export type AccordionProps = React.PropsWithChildren<{
  /** Title of accordion item*/
  title: ReactNode;
}>;

export function Accordion({ title, children }: AccordionProps) {
  const [activeItem, setActiveItem] = useState(false);

  return (
    <div css={accordionCss}>
      <button
        css={buttonContainerCss}
        onClick={() => setActiveItem(!activeItem)}
      >
        {title}
        <img
          css={chevronIconCss(activeItem)}
          src={chevron}
          alt="chevron-icon"
        />
      </button>

      <div
        aria-expanded={activeItem}
        data-testid={"accordion-item-content"}
        css={itemContentCss(activeItem)}
      >
        {children}
      </div>
    </div>
  );
}

const accordionCss = css({
  borderBottom: `1px solid ${theme.colors.disabledBgState}`,

  "&:last-of-type": {
    borderBottom: "none",
  },
});

const buttonContainerCss = css(theme.css.typography.bodyEmphasisPortal, {
  width: "100%",
  padding: 0,
  background: "none",
  border: "none",
  color: theme.colors.primaryText,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
});

const itemContentCss = (isExpanded: boolean) =>
  css({
    display: "flex",
    maxHeight: isExpanded ? "100%" : 0,
    overflow: "hidden",
    transition: "all ease-out 0.5s",
    marginTop: isExpanded ? "1.5rem" : 0,
    flexDirection: "column",
  });

const chevronIconCss = (isActive: boolean) =>
  css(
    isActive && {
      transform: "rotate(180deg)",
    },
    {
      transition: "transform 0.5s",
    },
  );

export default Accordion;
