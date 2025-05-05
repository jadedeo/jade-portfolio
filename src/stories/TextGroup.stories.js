import TextGroup from "../components/TextGroup";

export default {
    title: "Components/TextGroup",
    component: TextGroup,
    argTypes: {},
};

const Template = (args) => <TextGroup {...args} />;

export const HeadingSubheadingBody = Template.bind({});
HeadingSubheadingBody.args = {
    heading: "Sample Heading",
    subheading: "Sample Subheading",
    children: (
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ex
            quis enim suscipit tincidunt. Quisque et libero vitae tortor maximus
            pellentesque sit amet vel quam. Proin elit eros, sollicitudin non
            nisi sed, iaculis dignissim massa.
        </p>
    ),
};

export const HeadingSubheadingLongBody = Template.bind({});
HeadingSubheadingLongBody.args = {
    heading: "Sample Heading",
    subheading: "Sample Subheading",
    children: (
        <>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at
                ex quis enim suscipit tincidunt. Quisque et libero vitae tortor
                maximus pellentesque sit amet vel quam. Proin elit eros,
                sollicitudin non nisi sed, iaculis dignissim massa.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at
                ex quis enim suscipit tincidunt. Quisque et libero vitae tortor
                maximus pellentesque sit amet vel quam. Proin elit eros,
                sollicitudin non nisi sed, iaculis dignissim massa.
            </p>
        </>
    ),
};

export const HeadingBody = Template.bind({});
HeadingBody.args = {
    heading: "Sample Heading",
    subheading: "",
    children: (
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ex
            quis enim suscipit tincidunt. Quisque et libero vitae tortor maximus
            pellentesque sit amet vel quam. Proin elit eros, sollicitudin non
            nisi sed, iaculis dignissim massa.
        </p>
    ),
};

export const SubheadingBody = Template.bind({});
SubheadingBody.args = {
    heading: "",
    subheading: "Sample subheading",
    children: (
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ex
            quis enim suscipit tincidunt. Quisque et libero vitae tortor maximus
            pellentesque sit amet vel quam. Proin elit eros, sollicitudin non
            nisi sed, iaculis dignissim massa.
        </p>
    ),
};
