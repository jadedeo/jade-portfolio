import ProjectCard from "../components/ProjectCard";

export default {
    title: "Components/ProjectCard",
    component: ProjectCard,
    argTypes: { project: { control: "object" } },
};

const Template = (args) => <ProjectCard {...args} />;

export const Vertical = Template.bind({});
Vertical.args = {
    orientation: "vertical",
    id: 1,
    project: {
        link: "/",
        title: "Project Title",
        subtitle: "Project Subtitle",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra ultrices lectus, a luctus metus rhoncus vel. Maecenas orci est, rutrum non vulputate ac, dignissim sed diam. Donec nulla sem, porttitor a placerat vitae, sollicitudin sed purus.",
        tags: ["Tag One", "Tag Two"],
        image: "/projectPlaceholder.png",
    },
};

export const Horizontal = Template.bind({});
Horizontal.args = {
    orientation: "horizontal",
    id: 1,
    project: {
        link: "/",
        title: "Project Title",
        subtitle: "Project Subtitle",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla viverra ultrices lectus, a luctus metus rhoncus vel. Maecenas orci est, rutrum non vulputate ac, dignissim sed diam. Donec nulla sem, porttitor a placerat vitae, sollicitudin sed purus.",
        tags: ["Tag One", "Tag Two"],
        image: "/projectPlaceholder.png",
    },
};
