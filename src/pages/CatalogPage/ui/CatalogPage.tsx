import { Catalog } from 'features/Catalog';
import { memo } from 'react';
import { PageWrapper } from 'widgets/PageWrapper/PageWrapper';

export const CatalogPage = memo(() => {
  return (
    <PageWrapper>
      <Catalog />
    </PageWrapper>
  );
});
