import { Select } from '@/components/select';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { LanguageSelect } from '../components/LanguageSelect';

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, [`common`])),
  },
});

export default function Home() {
  const { t } = useTranslation(`common`);

  const refresh = () => window.location.assign(`http://localhost:3000/`);
  return (
    <div>
      <p>{t(`test`)}</p>
      <LanguageSelect />
      <br />
      <button type="button" onClick={refresh}>
        Go Home
      </button>
    </div>
  );
}
