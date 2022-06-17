import { useState } from "react";
import Pportal from "../pportal";

export const MyComp = (props: { name: string }) => {
  const [isOpen, setOpen] = useState(false);
  const randomId = Math.random().toString();

  return (
    <div>
      <Pportal>
        {isOpen && (
          <div role={"dialog"} aria-labelledby={randomId}>
            <h2 id={randomId}>{props.name}</h2>
            <button onClick={() => setOpen(false)}>Close</button>
          </div>
        )}
      </Pportal>

      <button onClick={() => setOpen(true)}>Open {props.name}</button>
    </div>
  );
};
