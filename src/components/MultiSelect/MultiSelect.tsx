import { useId, useMemo, useRef, useState } from "react";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { useOnClickOutside } from "../../internal/useOnClickOutside";
import "./MultiSelect.css";

export interface MultiSelectOption {
  description?: ReactNode;
  label: ReactNode;
  value: string;
}

export interface MultiSelectProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> {
  defaultValue?: string[];
  error?: string;
  helperText?: string;
  hint?: ReactNode;
  label?: ReactNode;
  name?: string;
  onValueChange?: (value: string[]) => void;
  options: MultiSelectOption[];
  placeholder?: string;
  value?: string[];
}

export function MultiSelect({
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
  placeholder = "Select one or more",
  value,
  ...props
}: MultiSelectProps) {
  const generatedId = useId();
  const fieldId = id ?? generatedId;
  const menuId = `${fieldId}-menu`;
  const [open, setOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [internalValue, setInternalValue] = useState<string[]>(defaultValue ?? []);
  const containerRef = useRef<HTMLDivElement>(null);
  const selectedValues = value ?? internalValue;
  const selectedOptions = useMemo(
    () => options.filter((option) => selectedValues.includes(option.value)),
    [options, selectedValues]
  );
  const message = error ?? helperText;

  useOnClickOutside(containerRef, () => setOpen(false), open);

  function toggleValue(optionValue: string) {
    const exists = selectedValues.includes(optionValue);
    const nextValue = exists
      ? selectedValues.filter((valueItem) => valueItem !== optionValue)
      : [...selectedValues, optionValue];

    if (value === undefined) {
      setInternalValue(nextValue);
    }

    onValueChange?.(nextValue);
  }

  return (
    <div className={className ? `tui-field-root ${className}` : "tui-field-root"}>
      {(label || hint) && (
        <div className="tui-field-header">
          {label ? <label className="tui-field-label">{label}</label> : <span />}
          {hint ? <span className="tui-field-hint">{hint}</span> : null}
        </div>
      )}
      <div className="tui-multiselect" ref={containerRef}>
        <button
          {...props}
          aria-controls={menuId}
          aria-expanded={open}
          className="tui-control-surface tui-field-shell tui-multiselect__trigger"
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
            className="tui-multiselect__value"
            data-placeholder={selectedOptions.length === 0 || undefined}
          >
            {selectedOptions.length === 0
              ? placeholder
              : selectedOptions.map((option) => (
                  <span key={option.value} className="tui-multiselect__tag">
                    {option.label}
                  </span>
                ))}
          </span>
          <span aria-hidden="true" className="tui-multiselect__chevron">
            {open ? "▴" : "▾"}
          </span>
        </button>
        {name
          ? selectedValues.map((selectedValue) => (
              <input key={selectedValue} name={name} type="hidden" value={selectedValue} />
            ))
          : null}
        {open ? (
          <div className="tui-multiselect__menu" id={menuId} role="listbox">
            {options.map((option) => {
              const selected = selectedValues.includes(option.value);

              return (
                <button
                  key={option.value}
                  className="tui-multiselect__option"
                  data-selected={selected || undefined}
                  onClick={() => toggleValue(option.value)}
                  role="option"
                  type="button"
                >
                  <span aria-hidden="true" className="tui-multiselect__check" />
                  <span className="tui-multiselect__option-body">
                    <span className="tui-multiselect__option-label">{option.label}</span>
                    {option.description ? (
                      <span className="tui-multiselect__option-description">
                        {option.description}
                      </span>
                    ) : null}
                  </span>
                </button>
              );
            })}
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
