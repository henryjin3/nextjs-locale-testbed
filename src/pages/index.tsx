import { getDefaultStaticProps } from '@/helpers/server/getDefaultStaticProps';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

export const getStaticProps = getDefaultStaticProps;

export default function Home() {
  const { t } = useTranslation(`common`);
  return (
    <>
      <p>{t(`thisIsHome`)}</p>
      <Link href="/text">Go to Text</Link>
    </>
  );
}
