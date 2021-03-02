import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, [`common`])),
  },
});

export default function Home() {
  const { t } = useTranslation(`common`);
  return (
    <>
      <p>{t(`thisIsHome`)}</p>
      <Link href="/text">Go to Text</Link>
    </>
  );
}
