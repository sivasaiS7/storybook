import type { Meta, StoryObj } from "@storybook/react";

import Currency from "./currency";

const meta = {
  component: Currency,
} satisfies Meta<typeof Currency>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    amount: "10",
    currency: "SGD",
    fractionDigits: 2
  },
} satisfies Story;
