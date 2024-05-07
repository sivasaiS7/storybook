import type { Meta, StoryObj } from "@storybook/react";

import { NotificationIconEnum } from "../constants";
import NotificationIcon from "./notification-icon";

const meta = {
  component: NotificationIcon,
} satisfies Meta<typeof NotificationIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;

export const NotificationDot = {
  args: {
    icon: NotificationIconEnum.DOT,
  },
} satisfies Story;

export const NotificationFill = {
  args: {
    icon: NotificationIconEnum.FILL,
  },
} satisfies Story;

export const NotificationDotFill = {
  args: {
    icon: NotificationIconEnum.DOT_FILL,
  },
} satisfies Story;
