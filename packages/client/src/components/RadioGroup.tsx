import '../styles/RadioGroup.css';

interface RadioGroupProps {
  checkedValue: string;
  legendText: string;
  name: string;
  options: {
    label: string;
    value: string;
  }[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: (value: any) => void;
}

export const RadioGroup = ({
  legendText,
  checkedValue,
  name,
  options,
  onChange,
}: RadioGroupProps) => (
  <fieldset className="RadioGroup">
    <legend className="RadioGroup-legend">{legendText}</legend>
    {options.map((option) => (
      <label className="RadioGroup-label" key={option.label} htmlFor={name}>
        <input
          type="radio"
          id={`${name}`}
          name={name}
          value={option.value}
          checked={option.value === checkedValue}
          onChange={(evt) => onChange(evt.target.value)}
        />
        <span className="RadioGroup-check" />
        {option.label}
      </label>
    ))}
  </fieldset>
);
