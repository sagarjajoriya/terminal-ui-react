import { forwardRef } from "react";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import "./Button.css";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  children: ReactNode;
  loading?: boolean;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
  size?: ButtonSize;
  variant?: ButtonVariant;
}

function getButtonClassName(className?: string) {
  return className
    ? `tui-control-surface tui-button ${className}`
    : "tui-control-surface tui-button";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      disabled,
      leadingIcon,
      loading = false,
      size = "md",
      trailingIcon,
      type = "button",
      variant = "primary",
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    return (
      <button
        {...props}
        ref={ref}
        aria-busy={loading || undefined}
        className={getButtonClassName(className)}
        data-size={size}
        data-variant={variant}
        disabled={isDisabled}
        type={type}
      >
        {loading ? <span aria-hidden="true" className="tui-button__spinner" /> : leadingIcon}
        <span className="tui-button__label">{children}</span>
        {!loading ? trailingIcon : null}
      </button>
    );
  }
);

Button.displayName = "Button";
