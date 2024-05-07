import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import userEvent, {
  PointerEventsCheckLevel,
} from "@testing-library/user-event";

import Button from "./button";

describe("Button component", () => {
  it("apply medium size style", () => {
    const { getByText } = render(<Button>Test Text</Button>);
    expect(getByText("Test Text")).toMatchSnapshot();
  });

  it("captures click", async () => {
    const user = userEvent.setup();
    const mockedOnClick = jest.fn();
    const { getByText } = render(
      <Button onClick={mockedOnClick}>Test Text</Button>,
    );

    await user.click(getByText("Test Text"));

    expect(mockedOnClick).toHaveBeenCalled();
  });

  it("apply primary disabled styles", async () => {
    const user = userEvent.setup({
      pointerEventsCheck: PointerEventsCheckLevel.Never,
    });
    const mockedOnClick = jest.fn();
    const { getByText } = render(
      <Button onClick={mockedOnClick} disabled>
        Test Text
      </Button>,
    );

    const button = getByText("Test Text");
    await user.click(button);
    expect(button).toBeDisabled();
    expect(mockedOnClick).not.toBeCalled();
    expect(button).toMatchSnapshot();
  });

  it("apply secondary disabled styles", () => {
    const { getByText } = render(
      <Button variant="secondary" disabled>
        Test Text
      </Button>,
    );

    const button = getByText("Test Text");
    expect(button).toBeDisabled();
    expect(button).toMatchSnapshot();
  });

  it("apply link disabled styles", () => {
    const { getByText } = render(
      <Button variant="link" disabled>
        Test Text
      </Button>,
    );

    const button = getByText("Test Text");
    expect(button).toBeDisabled();
    expect(button).toMatchSnapshot();
  });

  it("apply link variant style", () => {
    const { getByText } = render(<Button variant="link">Test Text</Button>);
    expect(getByText("Test Text")).toMatchSnapshot();
  });

  it("apply secondary variant style", () => {
    const { getByText } = render(
      <Button variant="secondary">Test Text</Button>,
    );
    expect(getByText("Test Text")).toMatchSnapshot();
  });

  it("should apply large button style", () => {
    const { getByText } = render(<Button size="large">Test button</Button>);
    expect(getByText("Test button")).toMatchSnapshot();
  });
});
