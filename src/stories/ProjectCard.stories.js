import ProjectCard from "../components/ProjectCard";

export default {
  title: "Components/ProjectCard",
  component: ProjectCard,
  argTypes: { project: { control: "object" } },
};

const Template = (args) => <ProjectCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 1,
  project: {
    link: "/",
    title: "Project Title",
    subtitle: "Some Subtitle",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra ultrices lectus, a luctus metus rhoncus vel. Maecenas orci est, rutrum non vulputate ac, dignissim sed diam. Donec nulla sem, porttitor a placerat vitae, sollicitudin sed purus.",
    skills: ["react", "storybook"],
    image: "/projectPlaceholder.png",
  },
};
