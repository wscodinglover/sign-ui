import React, { forwardRef } from "react";
import { IconType, IconKeys } from "./constants";

enum SIZE {
  xs = 16,
  sm = 18,
  md = 24,
  lg = 30,
  xl = 36,
  "2xl" = 40,
}
export type IconKeysType = IconKeys;

export type IconPropsType = {
  iconType?: IconKeysType;
  size?: keyof typeof SIZE;
  color?: string;
};

const Icon = forwardRef(
  (props: IconPropsType) => {
    const { iconType, color, size = "sm" } = props;

    return (
      <>
        {iconType
          ? IconType[iconType]({ width: SIZE[size] || size, color })
          : null}
      </>
    );
  }
);

Icon.displayName = "SignUI.Icon";

export default Icon;
