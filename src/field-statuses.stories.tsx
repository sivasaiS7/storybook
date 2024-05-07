import type { Meta, StoryObj } from "@storybook/react";

import { Error, Success } from "./field-statuses";

const meta = {
    component: Error || Success,
} satisfies Meta<typeof Error | typeof Success>;

export default meta;

type Story = StoryObj<typeof Error | typeof Success>;

export const Success_State = {
    render: () => {
        return (
            <Success>Success State</Success>
        )
    },
} satisfies Story;

export const Error_State = {
    render: () => {
        return (
            <Error>Error State</Error>
        )
    },
} satisfies Story;
