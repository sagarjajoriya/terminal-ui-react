import { forwardRef, useId, useState } from "react";
import type { ReactNode, TextareaHTMLAttributes } from "react";
import "./Textarea.css";

export interface TextareaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "children"> {
  error?: string;
  helperText?: string;
  hint?: ReactNode;
  label?: ReactNode;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, disabled, error, helperText, hint, id, label, ...props }, ref) => {
    const generatedId = useId();
    const textareaId = id ?? generatedId;
    const message = error ?? helperText;
    const [isFocused, setIsFocused] = useState(false);

    return (
      <div className={className ? `tui-field-root ${className}` : "tui-field-root"}>
        {(label || hint) && (
          <div className="tui-field-header">
            {label ? (
              <label className="tui-field-label" htmlFor={textareaId}>
                {label}
              </label>
            ) : (
              <span />
            )}
            {hint ? <span className="tui-field-hint">{hint}</span> : null}
          </div>
        )}
        <div
          className="tui-control-surface tui-field-shell tui-textarea-shell"
          data-disabled={disabled || undefined}
          data-focused={isFocused || undefined}
          data-invalid={Boolean(error) || undefined}
        >
          <textarea
            {...props}
            ref={ref}
            aria-invalid={Boolean(error) || undefined}
            className="tui-textarea"
            disabled={disabled}
            id={textareaId}
            onBlur={(event) => {
              setIsFocused(false);
              props.onBlur?.(event);
            }}
            onFocus={(event) => {
              setIsFocused(true);
              props.onFocus?.(event);
            }}
          />
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

Textarea.displayName = "Textarea";
