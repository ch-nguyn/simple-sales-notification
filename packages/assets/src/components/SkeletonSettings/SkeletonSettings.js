import React from 'react';
import {
  Layout,
  SkeletonPage,
  Card,
  SkeletonBodyText,
  SkeletonDisplayText,
  Stack
} from '@shopify/polaris';

const SkeletonSettings = () => {
  return (
    <SkeletonPage primaryAction fullWidth>
      <Layout>
        <Layout.Section oneThird>
          <Card sectioned>
            <SkeletonBodyText />
          </Card>
        </Layout.Section>
        <Layout.Section>
          <Card>
            <Card.Section>
              <SkeletonDisplayText size="small" />
            </Card.Section>
            <Card.Section>
              <Stack vertical>
                <SkeletonDisplayText size="small" />
                <SkeletonBodyText lines={20} />
              </Stack>
            </Card.Section>
          </Card>
        </Layout.Section>
      </Layout>
    </SkeletonPage>
  );
};

export default SkeletonSettings;
