import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "./Input";

const meta = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  args: {
    label: "Command",
    placeholder: "pnpm build",
    helperText: "Use a shell command or script alias.",
    leadingSlot: "~/"
  }
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithHint: Story = {
  args: {
    hint: "Optional",
    placeholder: "grep -R \"TODO\" src"
  }
};

export const WithSuffix: Story = {
  args: {
    label: "Search logs",
    placeholder: "request-id:abc123",
    leadingSlot: ">",
    trailingSlot: "LIVE"
  }
};

export const Error: Story = {
  args: {
    label: "API key",
    placeholder: "sk-...",
    error: "A valid API key is required to continue."
  }
};

export const Disabled: Story = {
  args: {
    label: "Workspace path",
    value: "/usr/local/projects/terminal-ui-react",
    disabled: true
  }
};
