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

  return (
    <div>
      <p>{t(`test`)}</p>
      <LanguageSelect />
    </div>
  );
}
