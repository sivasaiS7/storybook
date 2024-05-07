export type Coverages = {
  content: string;
  variation: "categories" | "active" | "pending" | "neutral";
};

export type PolicySummaryRecord = {
  field: string;
  value: string;
  currency?: string;
};

export type PolicyDetails = {
  policyName: string;
  policySummary: Array<PolicySummaryRecord>;
  coverages: Array<Coverages>;
  icon?: string;
};

export type PolicySummaryProps = {
  policySummary: Array<PolicySummaryRecord>;
};

export type CoverageSectionProps = {
  coverages: Array<Coverages>;
};
