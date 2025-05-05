import ExpandableTag from "../components/ExpandableTag";

export default {
    title: "Components/ExpandableTag",
    component: ExpandableTag,
    argTypes: {},
};

const Template = (args) => <ExpandableTag {...args} />;

export const Dark = Template.bind({});
Dark.args = {
    iconClass: "fa-brands fa-linkedin-in",
    hoveredText: "LinkedIn",
    initialText: "",
    variant: "dark",
};

export const Light = Template.bind({});
Light.args = {
    iconClass: "fa-brands fa-linkedin-in",
    hoveredText: "LinkedIn",
    initialText: "",
    variant: "light",
};
