import { Select } from '@/components/select';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { setCookie } from 'nookies';
import { LanguageSelect } from '../components/LanguageSelect';

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, [`common`])),
  },
});

export default function Home() {
  const { t } = useTranslation(`common`);

  const onChange = (value: string) => {
    setCookie(null, `NEXT_LOCALE`, value);
  };
  const refresh = () => window.location.assign(`http://localhost:3000/`);
  return (
    <div>
      <p>{t(`test`)}</p>
      <LanguageSelect onChange={onChange} />
      <br />
      <button type="button" onClick={refresh}>
        Go Home
      </button>
    </div>
  );
}
