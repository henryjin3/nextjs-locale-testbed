import { ChangeEvent, useState } from 'react';
import { Select } from './select';

export const LanguageSelect = ({
  onChange,
}: {
  onChange?: (newValue: string) => void;
}) => {
  const [currentValue, setCurrentValue] = useState(`fr`);
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setCurrentValue(e.target.value);
    onChange?.(e.target.value);
  };

  return (
    <Select value={currentValue} onChange={handleChange}>
      <option value="en-US">en-US</option>
      <option value="fr">fr</option>
      <option value="zh-Hans">zh-Hans</option>
    </Select>
  );
};
