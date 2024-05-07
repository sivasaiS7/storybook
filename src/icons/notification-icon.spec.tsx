import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { NotificationIconEnum, IconSizeEnum } from "../constants";
import Theme from "../styles/theme";
import NotificationIcon from "./notification-icon";

describe("Notification Icon component", () => {
  it("applies default styles", () => {
    render(<NotificationIcon />);
    expect(screen.getByAltText("notification-bell-icon")).toMatchSnapshot();
  });

  it("applies DOT variant styles", () => {
    render(<NotificationIcon icon={NotificationIconEnum.DOT} />);
    expect(screen.getByAltText("notification-bell-icon")).toMatchSnapshot();
  });

  it("applies FILL variant styles", () => {
    render(<NotificationIcon icon={NotificationIconEnum.FILL} />);
    expect(screen.getByAltText("notification-bell-icon")).toMatchSnapshot();
  });

  it("applies DOT_FILL variant styles", () => {
    render(<NotificationIcon icon={NotificationIconEnum.DOT_FILL} />);
    expect(screen.getByAltText("notification-bell-icon")).toMatchSnapshot();
  });

  it("applies SMALL size styles", () => {
    render(<NotificationIcon size={IconSizeEnum.SMALL} />);
    expect(screen.getByAltText("notification-bell-icon")).toMatchSnapshot();
  });

  it("applies MEDIUM size styles", () => {
    render(<NotificationIcon size={IconSizeEnum.MEDIUM} />);
    expect(screen.getByAltText("notification-bell-icon")).toMatchSnapshot();
  });

  it("applies LARGE size styles", () => {
    render(<NotificationIcon size={IconSizeEnum.LARGE} />);
    expect(screen.getByAltText("notification-bell-icon")).toMatchSnapshot();
  });

  it("applies filter styles", () => {
    render(<NotificationIcon filter={Theme.filterColors.singlifeRed} />);
    expect(screen.getByAltText("notification-bell-icon")).toMatchSnapshot();
  });
});
