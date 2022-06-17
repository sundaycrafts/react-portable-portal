import { screen } from "@testing-library/react";
import { setupSingleModal } from "./__fixtures__/helpers/setup-single-modal";
import { setupMultiModal } from "./__fixtures__/helpers/setup-multi-modal";

it("renders a modal next to the root component", async () => {
  const { user } = setupSingleModal();

  await user.click(screen.getByRole("button"));

  expect(screen.getByRole("dialog")).toBeInTheDocument();
});

it("renders multiple modals next to the root component", async () => {
  const { user, modalNameA, modalNameB } = setupMultiModal();

  await user.click(
    screen.getByRole("button", { name: new RegExp(modalNameA) })
  );

  await user.click(
    screen.getByRole("button", { name: new RegExp(modalNameB) })
  );

  expect(screen.getByRole("dialog", { name: modalNameA })).toBeInTheDocument();
  expect(screen.getByRole("dialog", { name: modalNameB })).toBeInTheDocument();
});
