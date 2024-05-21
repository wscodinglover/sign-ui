import React from "react";
import { tv, VariantProps } from "tailwind-variants";

const segmentedTv = tv({
  base: "inline-flex bg-gray-100 rounded p-0.5 align-center transition-all",
  variants: {
    size: {
      small: " h-6",
      middle: " h-8",
      large: " h-10 ",
    },
  },
  defaultVariants: {
    size: "middle",
  },
});

const segmentedItemTv = tv({
  base: "text-sm cursor-pointer text-neutral-500 hover:bg-gray-200 hover:text-[var(--color-text,#606266)] rounded text-center",
  variants: {
    size: {
      small: "px-[11px] py-[2px]",
      middle: "px-[15px] py-[4px]",
      large: "px-[19px] py-[6px]",
    },
    active: {
      true: "bg-white text-[var(--color-text,#606266)] hover:opacity-100 hover:bg-white ",
    },
    disabled: {
      true: "opacity-50 text-neutral-400 cursor-not-allowed hover:opacity-50 hover:bg-revert",
    },
  },

  defaultVariants: {
    size: "middle",
  },
});

type optionsItemProps = {
  label: string;
  value: any;
  disabled?: boolean;
  className?: string;
};

type SegmentedBaseProps = {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  options: (string | optionsItemProps)[];
  defaultValue?: number | string;
  value?: number | string;
  onChange?: (
    e: React.MouseEvent<HTMLDivElement>,
    value: optionsItemProps
  ) => void;
};

export type SegmentedProps = VariantProps<typeof segmentedTv> &
  SegmentedBaseProps;

const formatOptions = (
  options: (string | optionsItemProps)[]
): optionsItemProps[] => {
  return options.map((v) => {
    if (typeof v === "object" && v !== null) {
      return {
        disabled: false,
        ...v,
      };
    }
    return { label: v, value: v, disabled: false };
  });
};

const Segmented = React.forwardRef<HTMLDivElement, SegmentedProps>(
  (props: SegmentedProps, ref) => {
    const {
      children,
      className,
      style,
      options = [],
      size = "middle",
      defaultValue,
      value,
      onChange = () => {},
      ...rest
    } = props;

    const [active, setActive] = React.useState(value || defaultValue);
    const [normalizeOptions, setNormalizeOptions] = React.useState<
      optionsItemProps[]
    >([]);

    const classNameStyle = segmentedTv({ class: className, size, ...rest });

    const handleChange = (
      event: React.MouseEvent<HTMLDivElement>,
      value: optionsItemProps
    ) => {
      if (value.disabled) {
        return;
      }

      setActive(value.value);
      onChange(event, value);
    };

    React.useEffect(() => {
      const normalizeOptionsTemp: optionsItemProps[] = formatOptions(options);

      setNormalizeOptions(normalizeOptionsTemp);
      setActive(defaultValue || value || normalizeOptionsTemp[0].value);
    }, []);

    return (
      <div className={classNameStyle} style={style} ref={ref} {...rest}>
        {children}
        {normalizeOptions.map((v, i) => {
          return (
            <div
              key={`option_item_${i}`}
              className={segmentedItemTv({
                size,
                active: v.value === active,
                disabled: v.disabled,
                class: v.className,
              })}
              onClick={(e) => handleChange(e, v)}
            >
              {v?.label}
            </div>
          );
        })}
      </div>
    );
  }
);

Segmented.displayName = "SignUI.Segmented";
export default Segmented;
