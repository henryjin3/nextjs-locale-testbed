import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { useRouter } from 'next/dist/client/router';
import { Select } from '../select';
import { i18n } from '../../../next-i18next.config';

const { locales } = i18n;

const getOptions = (values: string[]) =>
  values.map((value) => (
    <option key={value} value={value}>
      {value}
    </option>
  ));

export const LanguageSelect = ({
  currentLocale,
  setCurrentLocale,
}: {
  currentLocale: string;
  setCurrentLocale: Dispatch<SetStateAction<string>>;
}) => {
  const router = useRouter();
  const { pathname } = router;

  const handleChange = ({
    target: { value },
  }: ChangeEvent<HTMLSelectElement>) => {
    setCurrentLocale(value);
    router.push(pathname, undefined, { locale: value });
  };

  return (
    <Select value={currentLocale} onChange={handleChange}>
      {getOptions(locales)}
    </Select>
  );
};
