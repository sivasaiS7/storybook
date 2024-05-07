import { Meta, StoryObj } from "@storybook/react";

import RadioGroup from "./radio-group";

const meta = {
  component: RadioGroup,
} satisfies Meta<typeof RadioGroup>;

type Story = StoryObj<typeof RadioGroup>;

export const Default = {
  args: {
    value: "1",
    options: [
      {
        label: "Option 1",
        value: "1",
      },
      {
        label: "Option 2",
        value: "2",
      },
      {
        label: "Option 3",
        value: "3",
      },
    ],
  },
} satisfies Story;

export const Default_With_Title = {
  args: {
    value: "1",
    label: "Title",
    options: [
      {
        label: "Option 1",
        value: "1",
      },
      {
        label: "Option 2",
        value: "2",
      },
      {
        label: "Option 3",
        value: "3",
      },
    ],
  },
} satisfies Story;

export const Error = {
  args: {
    value: "1",
    options: [
      {
        label: "Option 1",
        value: "1",
      },
      {
        label: "Option 2",
        value: "2",
      },
      {
        label: "Option 3",
        value: "3",
      },
    ],
    error: "Something has gone wrong",
  },
} satisfies Story;

export const Disabled = {
  args: {
    value: "1",
    disabled: true,
    options: [
      {
        label: "Option 1",
        value: "1",
      },
      {
        label: "Option 2",
        value: "2",
      },
      {
        label: "Option 3",
        value: "3",
      },
    ],
  },
} satisfies Story;

export default meta;
