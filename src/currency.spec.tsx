import { render } from "@testing-library/react";

import Currency from "./currency";

describe("Currency component", () => {
  it("should render correct label styles", () => {
    const { getByText } = render(
      <Currency amount={"10.00"} currency="SGD" />,
    );
    expect(getByText("SGD")).toMatchSnapshot();
    expect(getByText("10.00")).toMatchSnapshot();
  });
});
