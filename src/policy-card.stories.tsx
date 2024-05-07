import type { Meta, StoryObj } from "@storybook/react";

import SinglifeIcon from "./images/singlife-icon.svg";
import { PolicyCard } from "./policy-card";

const meta = {
  component: PolicyCard,
} satisfies Meta<typeof PolicyCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    data: {
      policyName: "MyLifeChoice",
      policySummary: [
        {
          field: "Life Assured",
          value: "Swvqrqmqkrwshnqn Gxxthx",
        },
        {
          field: "Policy Number",
          value: "05005177",
        },
        {
          field: "Premium Payment",
          value: "2,398.00/ Yearly",
          currency: "SGD",
        },
        {
          field: "Sum Insured",
          value: "100000",
          currency: "SGD",
        },
      ],
      coverages: [
        {
          content: "Active",
          variation: "active",
        },
        {
          content: "Protection",
          variation: "categories",
        },
      ],
      icon: SinglifeIcon,
    },
    handleClick: () => {},
  },
} satisfies Story;
