import { defineConfig } from "tsup";

export default defineConfig({
  entry: [
    "src/index.ts",
    "src/components/Button/index.ts",
    "src/components/Button/Button.css",
    "src/components/Checkbox/index.ts",
    "src/components/Checkbox/Checkbox.css",
    "src/components/Dropdown/index.ts",
    "src/components/Dropdown/Dropdown.css",
    "src/components/Input/index.ts",
    "src/components/Input/Input.css",
    "src/components/MultiSelect/index.ts",
    "src/components/MultiSelect/MultiSelect.css",
    "src/components/Radio/index.ts",
    "src/components/Radio/Radio.css",
    "src/components/Textarea/index.ts",
    "src/components/Textarea/Textarea.css",
    "src/components/Toggle/index.ts",
    "src/components/Toggle/Toggle.css",
    "src/styles/choice.css",
    "src/styles/field.css",
    "src/styles/tokens.css",
    "src/styles/control.css"
  ],
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
  external: ["react", "react-dom"],
  loader: {
    ".css": "copy"
  }
});
