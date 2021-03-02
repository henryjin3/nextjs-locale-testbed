import { useTranslation } from 'next-i18next';
import { ChooseLanguage } from '@/components/ChooseLanguage';
import { getDefaultStaticProps } from '@/helpers/server/getDefaultStaticProps';

export const getStaticProps = getDefaultStaticProps;

export default function Home() {
  const { t } = useTranslation(`common`);

  return (
    <>
      <p>{t(`test`)}</p>
      <ChooseLanguage />
    </>
  );
}
