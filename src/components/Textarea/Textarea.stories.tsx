import type { Meta, StoryObj } from "@storybook/react-vite";
import { Textarea } from "./Textarea";

const meta = {
  title: "Components/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  args: {
    label: "Deployment notes",
    placeholder: "Add release notes, rollout steps, or shell snippets...",
    helperText: "Markdown and code snippets are supported in the downstream app."
  }
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithError: Story = {
  args: {
    error: "A summary is required before publishing the release."
  }
};
