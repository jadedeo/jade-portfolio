/** @type { import('@storybook/react').Preview } */
import "../src/index.css";
import { MemoryRouter } from "react-router";

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

// use decorator to get react router to work with storybook
export const decorators = [
  (Story) => (
    <MemoryRouter initialEntries={["/"]}>
      <Story />
    </MemoryRouter>
  ),
];
