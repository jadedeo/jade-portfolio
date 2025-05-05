import Chip from "../components/Chip";

export default {
  title: "Components/Chip",
  component: Chip,
  argTypes: {},
};

const Template = (args) => <Chip {...args} />;

export const Small = Template.bind({});
Small.args = {
  label: "Lorem ipsum",
  size: "sm",
};

export const Medium = Template.bind({});
Medium.args = {
  label: "Lorem ipsum",
  size: "md",
};

export const LongLabel = Template.bind({});
LongLabel.args = {
  label: "Lorem ipsum dolor sit amet",
  size: "sm",
};
