import { useId, useMemo, useRef, useState } from "react";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { useOnClickOutside } from "../../internal/useOnClickOutside";
import "./Dropdown.css";

export interface DropdownOption {
  description?: ReactNode;
  disabled?: boolean;
  label: ReactNode;
  value: string;
}

export interface DropdownProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> {
  defaultValue?: string;
  error?: string;
  helperText?: string;
  hint?: ReactNode;
  label?: ReactNode;
  name?: string;
  onValueChange?: (value: string) => void;
  options: DropdownOption[];
  placeholder?: string;
  value?: string;
}

export function Dropdown({
  className,
  defaultValue,
  disabled,
  error,
  helperText,
  hint,
  id,
  label,
  name,
  onBlur,
  onFocus,
  onValueChange,
  options,
  placeholder = "Select an option",
  value,
  ...props
}: DropdownProps) {
  const generatedId = useId();
  const fieldId = id ?? generatedId;
  const menuId = `${fieldId}-menu`;
  const [open, setOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [internalValue, setInternalValue] = useState(defaultValue ?? "");
  const containerRef = useRef<HTMLDivElement>(null);
  const selectedValue = value ?? internalValue;
  const selectedOption = useMemo(
    () => options.find((option) => option.value === selectedValue),
    [options, selectedValue]
  );
  const message = error ?? helperText;

  useOnClickOutside(containerRef, () => setOpen(false), open);

  function handleSelect(nextValue: string) {
    if (value === undefined) {
      setInternalValue(nextValue);
    }

    onValueChange?.(nextValue);
    setOpen(false);
  }

  return (
    <div className={className ? `tui-field-root ${className}` : "tui-field-root"}>
      {(label || hint) && (
        <div className="tui-field-header">
          {label ? <label className="tui-field-label">{label}</label> : <span />}
          {hint ? <span className="tui-field-hint">{hint}</span> : null}
        </div>
      )}
      <div className="tui-dropdown" ref={containerRef}>
        <button
          {...props}
          aria-controls={menuId}
          aria-expanded={open}
          className="tui-control-surface tui-field-shell tui-dropdown__trigger"
          data-disabled={disabled || undefined}
          data-focused={isFocused || open || undefined}
          data-invalid={Boolean(error) || undefined}
          disabled={disabled}
          id={fieldId}
          onBlur={(event) => {
            setIsFocused(false);
            onBlur?.(event);
          }}
          onClick={() => {
            if (!disabled) {
              setOpen((current) => !current);
            }
          }}
          onFocus={(event) => {
            setIsFocused(true);
            onFocus?.(event);
          }}
          type="button"
        >
          <span
            className="tui-dropdown__value"
            data-placeholder={!selectedOption || undefined}
          >
            {selectedOption?.label ?? placeholder}
          </span>
          <span aria-hidden="true" className="tui-dropdown__chevron">
            {open ? "▴" : "▾"}
          </span>
        </button>
        {name ? <input name={name} type="hidden" value={selectedValue} /> : null}
        {open ? (
          <div className="tui-dropdown__menu" id={menuId} role="listbox">
            {options.map((option) => (
              <button
                key={option.value}
                className="tui-dropdown__option"
                data-selected={option.value === selectedValue || undefined}
                disabled={option.disabled}
                onClick={() => handleSelect(option.value)}
                role="option"
                type="button"
              >
                <span className="tui-dropdown__option-label">{option.label}</span>
                {option.description ? (
                  <span className="tui-dropdown__option-description">
                    {option.description}
                  </span>
                ) : null}
              </button>
            ))}
          </div>
        ) : null}
      </div>
      {message ? (
        <div className="tui-field-message" data-invalid={Boolean(error) || undefined}>
          {message}
        </div>
      ) : null}
    </div>
  );
}
