import { render } from "@testing-library/react";

import Label from "./label";

describe("Label component", () => {
  it("should render correct label styles", () => {
    const { getByText } = render(
      <Label content={"Test Label"} variation="active" />,
    );

    expect(getByText("Test Label")).toMatchSnapshot();
  });
});
