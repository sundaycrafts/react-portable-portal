import userEvent from "@testing-library/user-event";
import { render } from "@testing-library/react";
import PportalProvider from "../../pportal-provider";
import { MyComp } from "../my-comp";

export function setupSingleModal() {
  const modalName = "modal";
  return {
    modalName,
    user: userEvent.setup(),
    view: render(
      <PportalProvider>
        <h1>Heading</h1>
        <MyComp name={modalName} />
      </PportalProvider>
    ),
  };
}
