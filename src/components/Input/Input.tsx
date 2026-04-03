import { forwardRef, useId, useState } from "react";
import type { InputHTMLAttributes, ReactNode } from "react";
import "./Input.css";

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  error?: string;
  helperText?: string;
  hint?: ReactNode;
  label?: ReactNode;
  leadingSlot?: ReactNode;
  trailingSlot?: ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      disabled,
      error,
      helperText,
      hint,
      id,
      label,
      leadingSlot,
      trailingSlot,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;
    const message = error ?? helperText;
    const [isFocused, setIsFocused] = useState(false);

    return (
      <div className={className ? `tui-field-root ${className}` : "tui-field-root"}>
        {(label || hint) && (
          <div className="tui-field-header">
            {label ? (
              <label className="tui-field-label" htmlFor={inputId}>
                {label}
              </label>
            ) : (
              <span />
            )}
            {hint ? <span className="tui-field-hint">{hint}</span> : null}
          </div>
        )}
        <div
          className="tui-control-surface tui-field-shell tui-input-shell"
          data-disabled={disabled || undefined}
          data-focused={isFocused || undefined}
          data-invalid={Boolean(error) || undefined}
        >
          {leadingSlot ? <span className="tui-field-prefix">{leadingSlot}</span> : null}
          <input
            {...props}
            ref={ref}
            aria-invalid={Boolean(error) || undefined}
            className="tui-input"
            disabled={disabled}
            id={inputId}
            onBlur={(event) => {
              setIsFocused(false);
              props.onBlur?.(event);
            }}
            onFocus={(event) => {
              setIsFocused(true);
              props.onFocus?.(event);
            }}
          />
          {trailingSlot ? <span className="tui-field-suffix">{trailingSlot}</span> : null}
        </div>
        {message ? (
          <div className="tui-field-message" data-invalid={Boolean(error) || undefined}>
            {message}
          </div>
        ) : null}
      </div>
    );
  }
);

Input.displayName = "Input";
