import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: "default",
      values: [
        { name: "default", value: "#F4F6F9" },
        { name: "white", value: "#FFFFFF" },
      ],
    },
  },
};

export default preview;
