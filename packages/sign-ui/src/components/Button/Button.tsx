import { tv, VariantProps } from "tailwind-variants";
import { Icon, type IconKeysType } from "../Icon";

const button = tv({
  base: "font-medium px-[15px] py-[8px] cursor-pointer border border-[var(--color-border,#DCDFE6)] rounded active:opacity-80 inline-flex hover:opacity-80 content-center items-center",
  variants: {
    type: {
      default:
        "text-[var(--color-text,#606266)] hover:text-[var(--color-primary-light-1,#409EFF)] hover:border-[var(--color-primary-light-1,#409EFF)]",
      primary: "bg-[var(--color-primary-light-1,#409EFF)] text-white ",
      success: "bg-[var(--color-success-light-1,#67C23A)] text-white ",
      warning: "bg-[var(--color-warning-light-1,#E6A23C)] text-white ",
      danger: "bg-[var(--color-danger-light-1,#F56C6C)] text-white ",
      info: "bg-[var(--color-info-light-1,#909399)] text-white ",
    },
    size: {
      sm: "text-sm px-[11px] py-[5px]",
      md: "text-base",
      lg: "text-lg px-[19px] py-[12px]",
    },
    disabled: {
      true: "opacity-80 cursor-not-allowed active:opacity-80 hover:border-revert hover:text-revert",
    },
    round: {
      true: "rounded-full",
    },
    dashed: {
      true: "border-dashed",
    },
    plain: {
      true: "border-solid",
    },
    loading: {
      true: "cursor-wait opacity-80",
    },
  },
  compoundVariants: [
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
    {
      disabled: true,
      plain: true,
      className: "hover:text-revert hover:bg-revert",
    },
  ],
  defaultVariants: {
    size: "md",
    type: "default",
  },
});

const IconTv = tv({
  base: "animate-spin mr-1",
});

const ButtonHTMLTypes = ["submit", "button", "reset"] as const;
export type ButtonHTMLType = (typeof ButtonHTMLTypes)[number];

export interface BaseButtonProps {
  icon?: IconKeysType;
  iconPosition?: "start" | "end";
  disabled?: boolean;
  loading?: boolean | { delay?: number };
  className?: string;
  rootClassName?: string;
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
  const {
    size,
    type,
    disabled,
    round,
    plain,
    onClick,
    className,
    loading,
    icon,
    ...rest
  } = props;
  const handlerOnclick =
    (!disabled || !loading) && onClick ? onClick : () => {};
  return (
    <button
      className={button({
        size,
        type: type || "default",
        disabled,
        round,
        plain,
        loading,
        class: className,
      })}
      onClick={handlerOnclick}
      {...rest}
    >
      {loading && <Icon iconType="loading" className={IconTv()}></Icon>}
      {icon && <Icon iconType={icon}></Icon>}
      {props.children}
    </button>
  );
};

Button.displayName = "SignUI.Button";

export default Button;
