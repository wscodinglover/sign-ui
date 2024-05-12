import { tv, VariantProps } from "tailwind-variants";

const button = tv({
  base: "font-medium px-[15px] py-[8px] cursor-pointer border rounded active:opacity-80 inline-flex items-baseline gap-1 hover:opacity-80",
  variants: {
    type: {
      default:
        "hover:border-[var(--color-primary-light-1,#409EFF)] hover:text-[var(--color-primary-light-1,#409EFF)]",
      primary: "bg-[var(--color-primary-light-1,#409EFF)] text-white ",
      success: "bg-[var(--color-success-light-1,#67C23A)] text-white ",
      warning: "bg-[var(--color-warning-light-1,#E6A23C)] text-white ",
      danger: "bg-[var(--color-danger-light-1,#F56C6C)] text-white ",
      info: "bg-[var(--color-info-light-1,#909399)] text-white ",
    },
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "px-4 py-3 text-lg",
    },
    disabled: {
      true: "opacity-80 cursor-not-allowed active:opacity-80",
    },
    round: {
      true: "rounded-full",
    },
    dashed: {
      true: "border border-dashed",
    },
    plain: {
      true: "border border-solid",
    },
  },
  compoundVariants: [
    {
      disabled: true,
      type: 'default',
      className: "hover:border-[var(--color-border,#DCDFE6)] hover:text-[var(--color-text,#606266)]"
    },
    {
      type: "default",
      plain: true,
      className:
        "border-[var(--color-border,#DCDFE6)] text-[var(--color-text,#606266)] hover:text-[var(--color-primary-light-1,#409EFF)] hover:border-[var(--color-primary-light-1,#409EFF)]",
    },
    {
      type: "primary",
      plain: true,
      className:
        "border-[var(--color-primary-light-1,#409EFF)] text-[var(--color-primary-light-1,#409EFF)] bg-[--color-primary-light-8,#d9ecff] hover:text-white hover:bg-[var(--color-primary-light-1,#409EFF)]",
    },
    {
      type: "success",
      plain: true,
      className:
        "border-[var(--color-success-light-1,#67C23A)] text-[var(--color-success-light-1,#67C23A)] bg-[--color-success-light-8,#e1f3d8] hover:text-white hover:bg-[var(--color-success-light-1,#67C23A)]",
    },
    {
      type: "warning",
      plain: true,
      className:
        "border-[var(--color-warning-light-1,#E6A23C)] text-[var(--color-warning-light-1,#E6A23C)] bg-[--color-warning-light-8,#faecd8] hover:text-white hover:bg-[var(--color-warning-light-1,#E6A23C)]",
    },
    {
      type: "danger",
      plain: true,
      className:
        "border-[var(--color-danger-light-1,#F56C6C)] text-[var(--color-danger-light-1,#F56C6C)] bg-[--color-danger-light-8,#fde2e2] hover:text-white hover:bg-[var(--color-danger-light-1,#F56C6C)]",
    },
    {
      type: "info",
      plain: true,
      className:
        "border-[var(--color-info-light-1,#909399)] text-[var(--color-info-light-1,#909399)] bg-[--color-info-light-8,#e9e9eb] hover:text-white hover:bg-[var(--color-info-light-1,#909399)]",
    },
  ],
  defaultVariants: {
    size: "sm",
    type: "default",
  },
});

const ButtonHTMLTypes = ["submit", "button", "reset"] as const;
export type ButtonHTMLType = (typeof ButtonHTMLTypes)[number];

export interface BaseButtonProps {
  icon?: React.ReactNode;
  iconPosition?: "start" | "end";
  disabled?: boolean;
  loading?: boolean | { delay?: number };
  prefixCls?: string;
  className?: string;
  rootClassName?: string;
  ghost?: boolean;
  danger?: boolean;
  block?: boolean;
  children?: React.ReactNode;
  [key: `data-${string}`]: string;
  classNames?: { icon: string };
  styles?: { icon: React.CSSProperties };
}

type MergedHTMLAttributes = Omit<
  React.HTMLAttributes<HTMLElement> &
    React.ButtonHTMLAttributes<HTMLElement> &
    React.AnchorHTMLAttributes<HTMLElement>,
  "type"
>;

export interface ReactButtonProps
  extends BaseButtonProps,
    MergedHTMLAttributes {
  href?: string;
  htmlType?: ButtonHTMLType;
  autoInsertSpace?: boolean;
}

export type ButtonProps = VariantProps<typeof button> & ReactButtonProps;

const Button = (props: ButtonProps) => {
  console.log("button", props);
  const {
    size,
    type = "default",
    disabled,
    round,
    plain,
    onClick,
    ...rest
  } = props;
  const handlerOnclick = !disabled && onClick ? onClick : () => {};
  return (
    <button
      className={button({ size, type, disabled, round, plain })}
      onClick={handlerOnclick}
      {...rest}
    >
      {props.children}
    </button>
  );
};

Button.displayName = "SignUI.Button";

export default Button;
