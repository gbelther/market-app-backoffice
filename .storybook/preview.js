import { SbWrapper } from "../src/utils/storybook/SbWrapper";

export const parameters = {
  layout: "fullscreen",
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <SbWrapper>
      <Story />
    </SbWrapper>
  ),
];
