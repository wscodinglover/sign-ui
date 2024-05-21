import { tv, VariantProps } from "tailwind-variants";
import React from "react";

const flexTv = tv({
  base: "flex",
  variants: {
    vertical: {
      true: "flex-col",
    },
    justify: {
      normal: "justify-normal",
      start: "justify-start",
      end: "justify-end",
      center: "justify-center",
      between: "justify-between",
      around: "justify-around",
    },
    align: {
      start: "items-start",
      end: "items-end",
      center: "items-center",
      baseline: "items-baseline",
      stretch: "items-stretch",
    },
    flex: {
      1: "flex-1",
      initial: "flex-initial",
      auto: "flex-auto",
      none: "flex-none",
    },
    wrap: {
      wrap: "flex-wrap",
      "wrap-reverse": "flex-wrap-reverse",
      nowrap: "flex-nowrap",
    },
    gap: {
      small: "gap-[8px]",
      middle: "gap-[16px]",
      large: "gap-[24px]",
    },
  },
  compoundVariants: [],
  defaultVariants: {
    vertical: false,
    justify: "normal",
    align: "start",
    flex: 1,
    wrap: "wrap",
    gap: "small",
  },
});

export type AnyObject = Record<PropertyKey, any>;

export type CustomComponent<P = AnyObject> = React.ComponentType<P> | string;

export type SizeType = "small" | "middle" | "large" | undefined;

export function isPresetSize(
  size?: SizeType | string | number
): size is SizeType {
  return ["small", "middle", "large"].includes(size as string);
}

export interface BaseFlexProps<P = AnyObject>
  extends React.HTMLAttributes<HTMLElement> {
  prefixCls?: string;
  rootClassName?: string;
  vertical?: boolean;
  wrap?: boolean | React.CSSProperties["flexWrap"];
  justify?: React.CSSProperties["justifyContent"];
  align?: React.CSSProperties["alignItems"];
  flex?: React.CSSProperties["flex"];
  gap?: React.CSSProperties["gap"] | SizeType;
  children: React.ReactNode;
  component?: CustomComponent<P>;
}

export type FlexProps = VariantProps<typeof flexTv> & BaseFlexProps;

const Flex = React.forwardRef<HTMLElement, FlexProps>(
  (props: FlexProps, ref) => {
    const {
      rootClassName,
      className,
      style,
      flex,
      gap,
      children,
      vertical = false,
      component: Component = "div",
      ...rest
    } = props;

    const mergeClass = isPresetSize(gap)
      ? { vertical, flex, gap, class: className }
      : {
          vertical,
          flex,
          gap,
          class: `${className} gap-[${gap}]`,
        };

    return (
      <Component
        ref={ref}
        className={flexTv(mergeClass)}
        style={style}
        {...rest}
      >
        {children}
      </Component>
    );
  }
);

Flex.displayName = "SignUI.Flex";

export default Flex;
