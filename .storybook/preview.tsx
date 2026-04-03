import type { Preview } from "@storybook/react-vite";
const preview: Preview = {
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "terminal-grid",
      values: [
        {
          name: "terminal-grid",
          value:
            "radial-gradient(circle at top, rgba(47, 242, 170, 0.08), transparent 40%), linear-gradient(180deg, #0b1512 0%, #070d0c 100%)"
        }
      ]
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  decorators: [
    (Story) => (
      <div
        style={{
          minHeight: "100vh",
          width: "100%",
          display: "grid",
          placeItems: "center",
          padding: "2rem",
          backgroundImage:
            "linear-gradient(rgba(112, 255, 199, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(112, 255, 199, 0.06) 1px, transparent 1px)",
          backgroundSize: "32px 32px"
        }}
      >
        <Story />
      </div>
    )
  ]
};

export default preview;
