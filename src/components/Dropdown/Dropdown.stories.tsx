import type { Meta, StoryObj } from "@storybook/react-vite";
import { Dropdown } from "./Dropdown";

const options = [
  { label: "Development", value: "dev", description: "Local runtime with verbose logs." },
  { label: "Staging", value: "staging", description: "Shared pre-production environment." },
  { label: "Production", value: "prod", description: "Live environment with guarded actions." }
];

const meta = {
  title: "Components/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
  args: {
    label: "Target environment",
    placeholder: "Choose environment",
    options
  }
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithValue: Story = { args: { defaultValue: "staging" } };
export const WithError: Story = {
  args: { error: "Select a target before running the deployment." }
};
