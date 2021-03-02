import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ChooseLanguage } from '@/components/ChooseLanguage';

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, [`common`])),
  },
});

export default function Home() {
  const { t } = useTranslation(`common`);

  return (
    <>
      <p>{t(`test`)}</p>
      <ChooseLanguage />
    </>
  );
}
