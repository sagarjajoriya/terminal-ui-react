import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "Run Command",
    variant: "primary",
    size: "md"
  },
  argTypes: {
    onClick: { action: "clicked" }
  }
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Attach Session"
  }
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Open Logs"
  }
};

export const Danger: Story = {
  args: {
    variant: "danger",
    children: "Terminate Process"
  }
};

export const Loading: Story = {
  args: {
    loading: true,
    children: "Deploying"
  }
};

export const Large: Story = {
  args: {
    size: "lg",
    children: "Ship Build"
  }
};
