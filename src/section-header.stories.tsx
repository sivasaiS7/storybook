import type { Meta, StoryObj } from "@storybook/react";

import SectionHeader from "./section-header";

const meta = {
  component: SectionHeader,
} satisfies Meta<typeof SectionHeader>;

export default meta;

type Story = StoryObj<typeof SectionHeader>;

export const Default = {
  render: () => {
    return <SectionHeader>Title</SectionHeader>;
  },
} satisfies Story;
