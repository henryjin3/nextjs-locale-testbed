import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, [`common`])),
  },
});
export default function Text() {
  const { t } = useTranslation(`common`);
  return <div>{t(`test`)}</div>;
}
