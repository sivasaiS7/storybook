import { render } from "@testing-library/react";

import RadioGroup from "./radio-group";
import userEvent from "@testing-library/user-event";

describe("Radio Group", () => {
  const user = userEvent.setup();
  it("should render Radio Group", function () {
    const { asFragment } = render(
      <RadioGroup
        onChange={() => jest.fn()}
        options={[
          {
            label: "Option 1",
            value: "1",
          },
          {
            label: "Option 2",
            value: "2",
          },
          {
            label: "Option 3",
            value: "3",
          },
        ]}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('should call the onChange callback on button click',async () => {
    const onChange = jest.fn();
    const { getByText } = render(
      <RadioGroup
        onChange={onChange}
        options={[
          {
            label: "Option 1",
            value: "1",
          },
          {
            label: "Option 2",
            value: "2",
          },
          {
            label: "Option 3",
            value: "3",
          },
        ]}
      />,
    );
    await user.click(getByText("Option 1"));
    expect(onChange).toBeCalled()
  });
  it('should render Radio Group for error if error is passed into the component',()=>{
    const { getByText,asFragment } = render(
      <RadioGroup
        error={"Error"}
        onChange={() => jest.fn()}
        options={[
          {
            label: "Option 1",
            value: "1",
          },
          {
            label: "Option 2",
            value: "2",
          },
          {
            label: "Option 3",
            value: "3",
          },
        ]}
      />,
    );
    getByText('Error');
    expect(asFragment()).toMatchSnapshot();
  });
  it('should render Radio Group for disabled variant if disabled is passed into the component',()=>{
    const { asFragment } = render(
      <RadioGroup
        disabled
        onChange={() => jest.fn()}
        options={[
          {
            label: "Option 1",
            value: "1",
          },
          {
            label: "Option 2",
            value: "2",
          },
          {
            label: "Option 3",
            value: "3",
          },
        ]}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
