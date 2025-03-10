import { DensityMediumOutlined } from "@mui/icons-material";
import Button from "../components/Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {},
};

const Template = (args) => <Button {...args} />;

export const Small = Template.bind({});
Small.args = {
  label: "Press Me",
  size: "sm",
};

export const Medium = Template.bind({});
Medium.args = {
  label: "Press Me",
  size: "md",
};

// export const Large = Template.bind({});
// Large.args = {
//   label: "Press Me",
//   size: "lg",
// };

export const LongLabel = Template.bind({});
LongLabel.args = {
  label: "Press Me adsf asdf asdf asdfasdfasd fasd fasd fasd",
  size: "md",
};
