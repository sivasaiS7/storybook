import { render } from "@testing-library/react";

import SectionHeader from "./section-header";

describe("Section Header component", () => {
  it("should render correct section header styles", () => {
    const { getByText } = render(
      <SectionHeader> {"Test Title"}</SectionHeader>,
    );

    expect(getByText("Test Title").parentElement).toMatchSnapshot();
  });
});
