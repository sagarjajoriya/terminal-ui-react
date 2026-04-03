# terminal-ui-react

A production-ready React UI component library with a clean, futuristic terminal aesthetic.

## Installation

```bash
npm install terminal-ui-react
```

## Usage

```tsx
import { Button, Dropdown, Input, Textarea, Toggle } from "terminal-ui-react";
import "terminal-ui-react/button/styles.css";
import "terminal-ui-react/dropdown/styles.css";
import "terminal-ui-react/input/styles.css";
import "terminal-ui-react/textarea/styles.css";
import "terminal-ui-react/toggle/styles.css";

export function App() {
  return (
    <>
      <Dropdown
        label="Environment"
        options={[
          { label: "Development", value: "dev" },
          { label: "Production", value: "prod" }
        ]}
      />
      <Input label="Command" placeholder="npm run build" leadingSlot="~/" />
      <Textarea label="Notes" placeholder="Add release notes..." />
      <Toggle label="Live tail mode" />
      <Button variant="primary" size="md">
        Run Command
      </Button>
    </>
  );
}
```

## Per-Component Imports

Import only the component entry you need to keep usage scoped to that component's code and styles.

```tsx
import { Button } from "terminal-ui-react/button";
import "terminal-ui-react/button/styles.css";

import { Checkbox } from "terminal-ui-react/checkbox";
import "terminal-ui-react/checkbox/styles.css";

import { Dropdown } from "terminal-ui-react/dropdown";
import "terminal-ui-react/dropdown/styles.css";

import { Input } from "terminal-ui-react/input";
import "terminal-ui-react/input/styles.css";

import { MultiSelect } from "terminal-ui-react/multi-select";
import "terminal-ui-react/multi-select/styles.css";

import { Radio } from "terminal-ui-react/radio";
import "terminal-ui-react/radio/styles.css";

import { Textarea } from "terminal-ui-react/textarea";
import "terminal-ui-react/textarea/styles.css";

import { Toggle } from "terminal-ui-react/toggle";
import "terminal-ui-react/toggle/styles.css";
```

## Button

The `Button` component is keyboard accessible, ref-forwarding, typed, and includes loading, variant, and size support.

```tsx
<Button>Default</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="danger">Terminate</Button>
<Button loading>Deploying</Button>
```

## Checkbox, Radio, Toggle

Binary and single-choice controls follow the same terminal-inspired visual system and support labels plus descriptions.

```tsx
<Checkbox label="Auto-reconnect" description="Reconnect dropped sessions." />
<Radio name="runtime" label="Node.js" value="node" />
<Toggle label="Live tail mode" defaultChecked />
```

## Dropdown and MultiSelect

Select-style controls support typed options, helper text, error states, and subpath imports.

```tsx
<Dropdown
  label="Target environment"
  options={[
    { label: "Development", value: "dev" },
    { label: "Production", value: "prod" }
  ]}
/>

<MultiSelect
  label="Telemetry channels"
  options={[
    { label: "stdout", value: "stdout" },
    { label: "stderr", value: "stderr" }
  ]}
/>
```

## Input

The `Input` component includes label, hint, helper text, error state, and leading/trailing slot support.

```tsx
<Input label="Command" placeholder="pnpm build" leadingSlot="~/" />
<Input label="Search logs" trailingSlot="LIVE" />
<Input label="API key" error="A valid API key is required." />
```

## Textarea

`Textarea` shares the same field wrapper API as `Input` for longer command notes, prompts, and release descriptions.

```tsx
<Textarea label="Deployment notes" placeholder="Add rollout steps..." />
```

## Development

```bash
npm install
npm run build
npm run typecheck
```
