import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { setCookie } from 'nookies';

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, [`common`])),
  },
});
export default function Home() {
  const { t } = useTranslation(`common`);
  // setCookie(null, `NEXT_LOCALE`, `fr`);
  return <div>{t(`test`)}</div>;
}
