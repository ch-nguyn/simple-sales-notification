import {Page, Layout, ResourceList, Card, Stack, ResourceItem, Pagination} from '@shopify/polaris';
import EmptyList from '../../components/EmptyList/EmptyList';
import React, {useState, useEffect} from 'react';
import NotificationPopup from '../../components/NotificationPopup/NotificationPopup';
import useFetchApi from '../../hooks/api/useFetchApi';
import useDeleteApi from '../../hooks/api/useDeleteApi';
import usePaginate from '../../hooks/api/usePaginate';

/**
 * @return {JSX.Element}
 */
export default function Notifications() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [sortValue, setSortValue] = useState('timestamp:desc');
  const {data: settings} = useFetchApi({url: '/settings'});

  const initQueries = {
    sort: sortValue
  };

  const {
    data: notifications,
    loading,
    fetchApi: getNotifications,
    pageInfo,
    nextPage,
    prevPage,
    onQueryChange
  } = usePaginate({
    url: `/notifications`,
    initQueries
  });
  const {handleDelete} = useDeleteApi({url: '/notifications'});
  const {hasNext, hasPrevious} = pageInfo;

  const resourceName = {
    singular: 'notification',
    plural: 'notifications'
  };

  const sortOptions = [
    {label: 'Newest update', value: 'timestamp:desc'},
    {label: 'Oldest update', value: 'timestamp:asc'}
  ];

  const promotedBulkActions = [
    {
      content: 'Delete',
      onAction: async () => {
        await handleDelete(selectedItems);
        await getNotifications();
        setSelectedItems(prev => []);
      }
    }
  ];

  useEffect(() => {
    onQueryChange('sort', sortValue, true);
  }, [sortValue]);

  return (
    <Page title="Notifications" fullWidth subtitle="List of sales notifcation from Shopify">
      <Layout>
        <Layout.Section>
          <Card>
            <ResourceList
              promotedBulkActions={promotedBulkActions}
              loading={loading}
              selectable
              sortOptions={sortOptions}
              selectedItems={selectedItems}
              resourceName={resourceName}
              emptyState={<EmptyList />}
              items={notifications}
              sortValue={sortValue}
              renderItem={renderItem}
              onSortChange={setSortValue}
              onSelectionChange={setSelectedItems}
            />
          </Card>
        </Layout.Section>
        <Layout.Section>
          <Stack alignment="center" vertical>
            <Pagination
              onNext={nextPage}
              onPrevious={prevPage}
              hasNext={hasNext && !loading}
              hasPrevious={hasPrevious && !loading}
            />
          </Stack>
        </Layout.Section>
      </Layout>
    </Page>
  );

  function renderItem(item) {
    const {id, timestamp} = item;
    const timestampDate = new Date(timestamp);
    return (
      <ResourceItem id={id}>
        <Layout>
          <Layout.Section oneThird>
            <NotificationPopup
              {...item}
              truncateProductName={settings.truncateProductName}
              hideTimeAgo={settings.hideTimeAgo}
            />
          </Layout.Section>
          <Layout.Section>
            <Stack>
              <Stack.Item fill></Stack.Item>
              <Stack.Item>
                From {timestampDate.toLocaleString('en-us', {month: 'long'})}{' '}
                {timestampDate.getDate()},
              </Stack.Item>
            </Stack>
            <Stack>
              <Stack.Item fill></Stack.Item>
              <Stack.Item>{timestampDate.getFullYear()}</Stack.Item>
            </Stack>
          </Layout.Section>
        </Layout>
      </ResourceItem>
    );
  }
}
