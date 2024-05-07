import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Accordion from "./accordion";

describe("Accordion component", () => {
  it("should render correct accordion styles", () => {
    const { getByText } = render(
      <Accordion title={<>Test Title</>}>
        <>Test Content</>
      </Accordion>,
    );

    expect(getByText("Test Title").parentElement).toMatchSnapshot();
  });

  it("should expand accordion when clicked", async () => {
    const user = userEvent.setup();
    const { getByTestId, getByText } = render(
      <Accordion title={<>Test Title</>}>
        <>Test Content</>
      </Accordion>,
    );

    const accordionContent = getByTestId("accordion-item-content");
    expect(accordionContent.getAttribute("aria-expanded")).toBe("false");

    await user.click(getByText("Test Title"));
    expect(accordionContent.getAttribute("aria-expanded")).toBe("true");
    expect(getByText("Test Title").parentElement).toMatchSnapshot();
  });

  it("should collapse accordion when clicked while expanded", async () => {
    const user = userEvent.setup();
    const { getByTestId, getByText } = render(
      <Accordion title={<>Test Title</>}>
        <>Test Content</>
      </Accordion>,
    );

    const accordionContent = getByTestId("accordion-item-content");
    expect(accordionContent.getAttribute("aria-expanded")).toBe("false");

    await user.click(getByText("Test Title"));
    expect(accordionContent.getAttribute("aria-expanded")).toBe("true");

    await user.click(getByText("Test Title"));
    expect(accordionContent.getAttribute("aria-expanded")).toBe("false");
  });
});
