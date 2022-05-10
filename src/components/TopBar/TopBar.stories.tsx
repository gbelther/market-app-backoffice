import { ComponentMeta, ComponentStory } from "@storybook/react";

import { TopBar } from ".";

export default {
  title: "TopBar",
  component: TopBar,
  argTypes: {
    onClickAddButton: {
      action: "Click on add button",
    },
  },
} as ComponentMeta<typeof TopBar>;

const Template: ComponentStory<typeof TopBar> = (args) => <TopBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
