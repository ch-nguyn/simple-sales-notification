import React, {useState} from 'react';
import {Card, Layout, Page, Tabs} from '@shopify/polaris';
import NotificationPopup from '../../components/NotificationPopup/NotificationPopup';
import DisplayTab from '../../components/DisplayTab/DisplayTab';
import TriggerTab from '../../components/TriggerTab/TriggerTab';
import useFetchApi from '../../hooks/api/useFetchApi';
import useEditApi from '../../hooks/api/useEditApi';
import defaultSettings from '../../const/defaultSettings';
import SkeletonSettings from '../../components/SkeletonSettings/SkeletonSettings';

/**
 * @return {JSX.Element}
 */
export default function Settings() {
  const [selected, setSelected] = useState(0);
  const [isChange, setIsChange] = useState(false);
  const {data: settings, setData: setSettings, loading} = useFetchApi({
    url: '/settings',
    defaultData: defaultSettings
  });
  const {editing: loadingEdit, handleEdit} = useEditApi({url: '/settings'});

  const handleChange = (key, value) => {
    setIsChange(true);
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const updateSettings = async data => {
    await handleEdit(data);
  };

  const tabs = [
    {
      id: 'display-tab',
      content: 'Display',
      component: <DisplayTab value={settings} onChange={handleChange}></DisplayTab>
    },
    {
      id: 'trigger-tab',
      content: 'Trigger',
      component: <TriggerTab value={settings} onChange={handleChange}></TriggerTab>
    }
  ];

  if (loading) {
    return <SkeletonSettings />;
  }

  return (
    <Page
      fullWidth
      title="Settings"
      subtitle="Decide how your notifications will display"
      primaryAction={{
        content: 'Save',
        disabled: !isChange,
        loading: loadingEdit,
        onAction: () => updateSettings(settings)
      }}
    >
      <Layout>
        <Layout.Section oneThird>
          <NotificationPopup
            truncateProductName={settings.truncateProductName}
            hideTimeAgo={settings.hideTimeAgo}
          />
        </Layout.Section>
        <Layout.Section>
          <Card>
            <Tabs tabs={tabs} selected={selected} onSelect={setSelected}>
              <Card.Section>{tabs[selected].component}</Card.Section>
            </Tabs>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}

Settings.propTypes = {};
