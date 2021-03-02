import { setCookie } from 'nookies';
import { ChangeEvent, useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import { Select } from './select';
import { i18n } from '../../next-i18next.config';

const { locales } = i18n;

const getOptions = (values: string[]) =>
  values.map((value) => <option value={value}>{value}</option>);

export const LanguageSelect = () => {
  const { locale } = useRouter();
  const [currentValue, setCurrentValue] = useState(locale);

  const handleChange = ({
    target: { value },
  }: ChangeEvent<HTMLSelectElement>) => {
    setCurrentValue(value);
    setCookie(null, `NEXT_LOCALE`, value);
  };

  return (
    <Select value={currentValue} onChange={handleChange}>
      {getOptions(locales)}
    </Select>
  );
};
