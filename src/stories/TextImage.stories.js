import TextImage from "../components/TextImage";

export default {
	title: "Components/TextImage",
	component: TextImage,
	argTypes: {},
};

const Template = (args) => <TextImage {...args} />;

export const TextRight = Template.bind({});
TextRight.args = {
	heading: "Sample Heading",
	subheading: "Sample Subheading",
	image: "/projectPlaceholder.png",
	imageAlt: "image alt text",
	children: (
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ex
			quis enim suscipit tincidunt. Quisque et libero vitae tortor maximus
			pellentesque sit amet vel quam. Proin elit eros, sollicitudin non
			nisi sed, iaculis dignissim massa.
		</p>
	),
};

export const TextLeft = Template.bind({});
TextLeft.args = {
	heading: "Sample Heading",
	subheading: "Sample Subheading",
	image: "/projectPlaceholder.png",
	imageAlt: "image alt text",
	imagePlacement: "left",
	children: (
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ex
			quis enim suscipit tincidunt. Quisque et libero vitae tortor maximus
			pellentesque sit amet vel quam. Proin elit eros, sollicitudin non
			nisi sed, iaculis dignissim massa.
		</p>
	),
};

export const NoHeading = Template.bind({});
NoHeading.args = {
	heading: "",
	subheading: "Sample Subheading",
	image: "/projectPlaceholder.png",
	imageAlt: "image alt text",
	imagePlacement: "left",
	children: (
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ex
			quis enim suscipit tincidunt. Quisque et libero vitae tortor maximus
			pellentesque sit amet vel quam. Proin elit eros, sollicitudin non
			nisi sed, iaculis dignissim massa.
		</p>
	),
};
