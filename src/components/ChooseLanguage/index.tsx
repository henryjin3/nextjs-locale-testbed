import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/dist/client/router';
import { setCookie } from 'nookies';
import { useState } from 'react';
import { LanguageSelect } from './LanguageSelect';

export const ChooseLanguage = () => {
  const { t } = useTranslation(`common`);
  const { locale } = useRouter();
  const [currentLocale, setCurrentLocale] = useState<string>(locale ?? `en-US`);

  const handleSetCookie = () =>
    setCookie(null, `NEXT_LOCALE`, currentLocale, {
      path: `/`,
    });
  return (
    <>
      <LanguageSelect
        currentLocale={currentLocale}
        setCurrentLocale={setCurrentLocale}
      />
      <br />
      <button type="button" onClick={handleSetCookie}>
        {t(`setCookie`)}
      </button>
    </>
  );
};
