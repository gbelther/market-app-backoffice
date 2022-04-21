import { ComponentMeta, ComponentStory } from "@storybook/react";

import { InputText } from ".";

export default {
  title: "InputText",
  component: InputText,
} as ComponentMeta<typeof InputText>;

const Template: ComponentStory<typeof InputText> = (args) => (
  <InputText {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: "Primary Story",
  showLabel: true,
  inputProps: {
    id: "primary-story",
  },
};

export const WithFeedbackError = Template.bind({});
WithFeedbackError.args = {
  label: "Primary Story",
  showLabel: true,
  feedback: {
    type: "error",
    message: "Feedback error",
  },
  showFeedback: true,
  inputProps: {
    id: "primary-story",
  },
};

export const WithFeedbackSuccess = Template.bind({});
WithFeedbackSuccess.args = {
  label: "Primary Story",
  showLabel: true,
  feedback: {
    type: "success",
    message: "Feedback success",
  },
  showFeedback: true,
  inputProps: {
    id: "primary-story",
  },
};
