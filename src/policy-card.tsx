/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import {
  Coverages,
  PolicySummaryProps,
  CoverageSectionProps,
  PolicyDetails,
  PolicySummaryRecord,
} from "./@types/policy";
import Button from "./button";
import { Currency } from "./currency";
import useViewportWidth from "./hooks/use-viewport-width";
import rightArrow from "./images/arrow-right.svg";
import Label from "./label";
import { mq } from "./styles/breakpoints";
import theme from "./styles/theme";

export type PolicyCardProps = {
  /** Policy card data */
  data: PolicyDetails;
  /** event handler for on policy card click */
  handleClick: () => void;
};

function PolicySummarySection({ policySummary }: PolicySummaryProps) {
  return (
    <div css={mobileContainerCss}>
      {policySummary.map((obj: PolicySummaryRecord) => {
        return (
          <div key={obj.field} css={mobileContainerRowCss}>
            <h4 css={cellHeadingCss}>{obj.field}</h4>
            <h4 css={cellValueContainerCss}>
              {!obj.currency ? (
                <span>{obj.value}</span>
              ) : (
                <Currency amount={obj.value} currency={obj.currency} />
              )}
            </h4>
          </div>
        );
      })}
    </div>
  );
}

function CoverageSection({ coverages }: CoverageSectionProps) {
  return (
    <div css={coverageSectionContainercss}>
      {coverages.sort().map((item: Coverages) => (
        <Label
          key={item.content}
          content={item.content}
          variation={item.variation || ""}
          css={coverageTagCss}
        ></Label>
      ))}
    </div>
  );
}

function ViewDetailsButton() {
  return (
    <Button variant="link" css={linkCss} className="view-details">
      <span>View details</span>
      <div className="arrow" css={rightArrowCss} />
    </Button>
  );
}

/** UI component for Policy Card */
export function PolicyCard(props: PolicyCardProps) {
  const isDesktopView = useViewportWidth("lg");
  const { policyName, policySummary, coverages, icon } = props.data;

  return (
    <div
      css={policyCardCss}
      data-testid="policy-summary-card"
      className="policy-summary-card"
      onClick={props.handleClick}
      role="presentation"
    >
      <div css={headerCss}>
        <div css={headerTitleContainerCss}>
          <span css={headerTitleCss}>{policyName}</span>
          {icon && <img src={icon} alt="card-icon"></img>}
        </div>
        {isDesktopView && <ViewDetailsButton />}
      </div>
      <CoverageSection coverages={coverages} />
      <PolicySummarySection policySummary={policySummary} />
      {!isDesktopView && <ViewDetailsButton />}
    </div>
  );
}

const mobileContainerCss = css({
  display: "flex",
  flexDirection: "column",
  gap: "1em",
  margin: "1em 0",
});

const mobileContainerRowCss = css({
  display: "flex",
  justifyContent: "space-between",
  gap: "1em",
});

const cellHeadingCss = css(theme.css.typography.fieldHeader, {
  margin: "0",
  flex: "1",
});

const cellValueContainerCss = css(theme.css.typography.bodyEmphasisPortal, {
  color: theme.colors.emphasisText,
  display: "flex",
  flex: "1",
  justifyContent: "flex-end",
  margin: "0",
  [mq("lg")]: {
    flex: "2",
  },
});

const coverageSectionContainercss = css({
  display: "flex",
  flexWrap: "wrap",
  gap: "1em",
});

const coverageTagCss = css(
  theme.css.typography.labels,
  theme.css.borderRadius.default,
  {
    padding: " 0.25rem 0.5rem",
  },
);

const headerCss = css({
  display: "flex",
  alignItems: "center",
});

const headerTitleContainerCss = css({
  display: "flex",
  alignItems: "center",
  paddingBottom: "0.8em",
});

const headerTitleCss = css(theme.css.typography.headersH4, {
  marginTop: "0.25em",
  marginRight: "0.5em",
});

const linkCss = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "fill-available",
  padding: "0 0 0.8em",
  [mq("lg")]: {
    display: "none",
    position: "absolute",
    width: "8em",
    right: "2.5em",
  },
});

const rightArrowCss = css({
  display: "inline-block",

  "::before": {
    backgroundImage: `url(${rightArrow})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "4px -2px",
    display: "inline-block",
    content: '""',
    height: "1.25em",
    width: "1.5em",
  },
});

const policyCardCss = css(theme.css.borderRadius.borderRadius16, {
  background: theme.colors.white,
  position: "relative",
  padding: "1rem",
  margin: "0 1.5rem 1rem",
  cursor: "pointer",
  [mq("lg")]: {
    padding: `${24 / 16}em`,
    margin: "0 0 1.5rem",
  },

  ":hover": {
    border: `1.5px solid ${theme.colors.red200}`,
    [mq("lg")]: {
      ...theme.css.boxShadow.hoverDefault,
    },

    [".view-details"]: {
      [mq("lg")]: {
        display: "flex",
        animation: `${theme.css.animation.viewDetails} 0.1s ease-in-out`,
        transform: "translateX(1em)",
      },
    },
  },
});

export default PolicyCard;
