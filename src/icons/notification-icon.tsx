/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { NotificationIconEnum, IconSizeEnum } from "../constants";
import notificationDotFillIcon from "../images/notification-dot-fill.svg";
import notificationDotIcon from "../images/notification-dot.svg";
import notificationFillIcon from "../images/notification-fill.svg";
import notificationIcon from "../images/notification.svg";

export type NotificationIconProps = {
  /** Icon variant */
  icon?: NotificationIconEnum;
  /** Icon size */
  size?: IconSizeEnum;
  /** Icon fill colour
   * e.g "invert(18%) sepia(82%) saturate(6823%) hue-rotate(353deg) brightness(100%) contrast(115%)"
   */
  filter?: string;
};

const iconVariant = new Map(
  Object.entries({
    [NotificationIconEnum.DEFAULT]: notificationIcon,
    [NotificationIconEnum.FILL]: notificationFillIcon,
    [NotificationIconEnum.DOT]: notificationDotIcon,
    [NotificationIconEnum.DOT_FILL]: notificationDotFillIcon,
  }),
);

/** Notification Icon Component UI*/
export const NotificationIcon: React.FC<NotificationIconProps> = ({
  icon = NotificationIconEnum.DEFAULT,
  size = IconSizeEnum.SMALL,
  filter = "",
}: NotificationIconProps) => {
  return (
    <img
      className="notification-icon-image"
      css={iconCss(size, filter)}
      src={iconVariant.get(icon)}
      alt="notification-bell-icon"
      data-testid={`${icon}-notification-bell-icon`}
    />
  );
};

const iconCss = (size: string, color: string) => css`
  width: ${size === "small" ? "1rem" : size === "large" ? "2rem" : "1.5rem"};
  filter: ${color};
`;

export default NotificationIcon;
