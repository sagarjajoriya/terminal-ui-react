import type { Meta, StoryObj } from "@storybook/react-vite";
import { MultiSelect } from "./MultiSelect";

const options = [
  { label: "stdout", value: "stdout", description: "Capture standard output." },
  { label: "stderr", value: "stderr", description: "Capture error output." },
  { label: "network", value: "network", description: "Log network activity." },
  { label: "timing", value: "timing", description: "Track request and command duration." }
];

const meta = {
  title: "Components/MultiSelect",
  component: MultiSelect,
  tags: ["autodocs"],
  args: {
    label: "Telemetry channels",
    placeholder: "Choose channels",
    options
  }
} satisfies Meta<typeof MultiSelect>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithValues: Story = { args: { defaultValue: ["stdout", "timing"] } };
export const WithError: Story = {
  args: { error: "Pick at least one channel to continue." }
};
