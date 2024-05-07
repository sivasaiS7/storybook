import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { PolicyDetails } from "./@types/policy";
import singlifeIcon from "./images/singlife-icon.svg";
import PolicyCard from "./policy-card";

const data: PolicyDetails = {
  policyName: "Singlife Shield",
  policySummary: [
    { field: "Death sum Assured", value: "5000", currency: "SGD" },
    { field: "Policy No.", value: "12345678" },
    { field: "Life Insured", value: "Lorem Ipsume" },
    { field: "Joint Life Insured", value: "Lorem Ipsume" },
  ],
  coverages: [
    { content: "LIFE", variation: "active" },
    { content: "CRITICAL ILLNESS", variation: "neutral" },
  ],
  icon: singlifeIcon,
};

describe("Policy summary card", () => {
  it("should show Policy Summary card", async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();
    const { getByText, getByTestId } = render(
      <PolicyCard data={data} handleClick={handleClick} />,
    );
    expect(getByText("Singlife Shield")).toMatchSnapshot();
    const summaryCard = getByTestId("policy-summary-card");
    await user.click(summaryCard);
    expect(handleClick).toBeCalledTimes(1);
  });
});
