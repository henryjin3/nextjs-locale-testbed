import { setCookie } from 'nookies';
import { ChangeEvent, useState } from 'react';
import { Select } from './select';

export const LanguageSelect = () => {
  const [currentValue, setCurrentValue] = useState(`fr`);
  const handleChange = ({
    target: { value },
  }: ChangeEvent<HTMLSelectElement>) => {
    setCurrentValue(value);
    setCookie(null, `NEXT_LOCALE`, value);
  };

  return (
    <Select value={currentValue} onChange={handleChange}>
      <option value="en-US">en-US</option>
      <option value="fr">fr</option>
      <option value="zh-Hans">zh-Hans</option>
    </Select>
  );
};
