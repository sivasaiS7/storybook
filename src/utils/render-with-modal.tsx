import { render } from "@testing-library/react";

export default function renderWithModal(Component: React.ReactElement) {
  const modalRoot = document.createElement("div");
  modalRoot.id = "modal-root";
  return render(Component, {
    container: document.body.appendChild(modalRoot),
  });
}
