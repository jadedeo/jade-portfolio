import Quote from "../components/Quote";

export default {
    title: "Components/Quote",
    component: Quote,
    argTypes: {},
};

const Template = (args) => <Quote {...args} />;

export const WithoutImage = Template.bind({});
WithoutImage.args = {
    subheading: "My subheading here",
    image: "",
    children: [
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ex
            quis enim suscipit tincidunt.{" "}
            <strong>Quisque et libero vitae tortor maximus pellentesque</strong>{" "}
            sit amet vel quam. Proin elit eros, sollicitudin non nisi sed,
            iaculis dignissim massa.
        </p>,
    ],
};

export const WithImage = Template.bind({});
WithImage.args = {
    subheading: "My subheading here",
    image: "/userPlaceholder.png",
    children: [
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ex
            quis enim suscipit tincidunt.{" "}
            <strong>Quisque et libero vitae tortor maximus pellentesque</strong>{" "}
            sit amet vel quam. Proin elit eros, sollicitudin non nisi sed,
            iaculis dignissim massa.
        </p>,
    ],
};
