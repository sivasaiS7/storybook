import type { Meta, StoryObj } from "@storybook/react";

import Button from "./button";

const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    children: "Primary Medium",
  },
} satisfies Story;

export const PrimaryLarge = {
  args: {
    size: "large",
    variant: "primary",
    children: "Primary Large",
  },
} satisfies Story;

export const SecondaryMedium = {
  args: {
    size: "medium",
    variant: "secondary",
    children: "Secondary Medium",
  },
} satisfies Story;

export const SecondaryLarge = {
  args: {
    size: "large",
    variant: "secondary",
    children: "Secondary Large",
  },
} satisfies Story;

export const LinkMedium = {
  args: {
    size: "medium",
    variant: "link",
    children: "Link Medium",
  },
} satisfies Story;

export const LinkLarge = {
  args: {
    size: "large",
    variant: "link",
    children: "Link Large",
  },
} satisfies Story;
