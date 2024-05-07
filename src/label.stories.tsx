import type { Meta, StoryObj } from "@storybook/react";

import Label from "./label";

const meta = {
  component: Label,
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Neutral = {
  args: {
    content: "Neutral",
    variation: "neutral",
  },
} satisfies Story;

export const Neutral_White = {
  args: {
    content: "Neutral White",
    variation: "neutralWhite",
  },
} satisfies Story;

export const Active = {
  args: {
    content: "Active",
    variation: "active",
  },
} satisfies Story;

export const Alert = {
  args: {
    content: "Alert",
    variation: "alert",
  },
} satisfies Story;

export const Pending = {
  args: {
    content: "Pending",
    variation: "pending",
  },
} satisfies Story;

export const Categories = {
  args: {
    content: "Categories",
    variation: "categories",
  },
} satisfies Story;

export const Disabled = {
  args: {
    content: "Disabled",
    variation: "disabled",
  },
} satisfies Story;

export const Singlife_Red = {
  args: {
    content: "Singlife Red",
    variation: "singlifeRed",
  },
} satisfies Story;
