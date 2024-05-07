import type { Meta, StoryObj } from "@storybook/react";

import RadioButton from "./radio-button";

const meta = {
    component: RadioButton,
} satisfies Meta<typeof RadioButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
    args: {
      label: "Default",
    },
} satisfies Story;

export const Checked = {
    args: {
      label: "Checked",
      checked: true,
    },
} satisfies Story;

export const Disabled = {
    args: {
      label: "Disabled",
      disabled: true,
    },
} satisfies Story;

export const Checked_Disabled = {
    args: {
      label: "Checked & Disabled",
      checked: true,
      disabled: true,
    },
} satisfies Story;
