Create a portal without extra DOM dependency (and its configuration)

### Why?

Life is too short to write a Portal configuration for EVERY single ecosystem like Storybook, Jest, Next.js, or any other tool.

### Usage

```ts
import { useState } from "react";
import { Pportal, PportalProvider } from "react-portable-portal";

function MyModal({ isOpen }) {
  return (
    <Pportal>
      {isOpen && (<div><h1>My Modal</h1></div>)}
    </Pportal>
  );
}

function MyApp() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <MyModal isOpen={isOpen} />
      <button onClick={() => setOpen(!isOpen)}>Open</button>
    </div>
  );
}

function Root() {
  return (
    <PportalProvider>
      {/* your modal is appeared here */}
      <MyApp />
    </PportalProvider>
  );
}

export default Root;
```
