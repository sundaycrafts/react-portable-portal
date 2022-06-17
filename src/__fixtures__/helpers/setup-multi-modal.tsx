import userEvent from "@testing-library/user-event";
import { render } from "@testing-library/react";
import PportalProvider from "../../pportal-provider";
import { MyComp } from "../my-comp";

export function setupMultiModal() {
  const modalNameA = "modal A";
  const modalNameB = "modal B";
  return {
    modalNameA,
    modalNameB,
    user: userEvent.setup(),
    view: render(
      <PportalProvider>
        <h1>Heading</h1>
        <MyComp name={modalNameA} />
        <MyComp name={modalNameB} />
      </PportalProvider>
    ),
  };
}
