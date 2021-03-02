import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getDefaultStaticProps = async ({
  locale,
}: {
  locale: string;
}) => ({
  props: {
    ...(await serverSideTranslations(locale, [`common`])),
  },
});
