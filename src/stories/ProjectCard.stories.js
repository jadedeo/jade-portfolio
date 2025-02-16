import ProjectCard from "../components/ProjectCard";

export default {
  title: "Components/ProjectCard",
  component: ProjectCard,
  argTypes: { project: { control: "object" } },
};

const Template = (args) => <ProjectCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  project: {
    link: "/",
    title: "Title",
    subtitle: "Subtitle",
    description: "lorem ipsum",
    tech: ["react", "storybook"],
    image: "/projectPlaceholder.png",
  },
};
