import { forwardRef, useId } from "react";
import type { InputHTMLAttributes, ReactNode } from "react";
import "./Radio.css";

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  description?: ReactNode;
  label?: ReactNode;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ className, description, disabled, id, label, ...props }, ref) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;

    return (
      <label
        className={className ? `tui-choice ${className}` : "tui-choice"}
        data-disabled={disabled || undefined}
        htmlFor={inputId}
      >
        <input
          {...props}
          ref={ref}
          className="tui-choice__native"
          disabled={disabled}
          id={inputId}
          type="radio"
        />
        <span aria-hidden="true" className="tui-choice__control tui-radio__control" />
        {(label || description) && (
          <span className="tui-choice__body">
            {label ? <span className="tui-choice__label">{label}</span> : null}
            {description ? <span className="tui-choice__description">{description}</span> : null}
          </span>
        )}
      </label>
    );
  }
);

Radio.displayName = "Radio";
