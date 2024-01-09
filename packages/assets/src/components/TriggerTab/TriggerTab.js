import React from 'react';
import {Select, TextField, Stack} from '@shopify/polaris';
import PropTypes from 'prop-types';

/**
 *
 * @param {InputValue} value
 * @param {function} onChange
 * @returns {JSX.Element}
 */
const TriggerTab = ({value, onChange}) => {
  const {allowShow, includedUrls, excludedUrls} = value;
  const options = [
    {label: 'All Pages', value: 'all'},
    {label: 'Specific Pages', value: 'specific'}
  ];

  return (
    <Stack vertical spacing="loose">
      <Select
        label="PAGES RESTRICTION"
        options={options}
        onChange={value => onChange('allowShow', value)}
        value={allowShow}
      />
      {allowShow !== 'all' && (
        <TextField
          label="Included pages"
          helpText="Page URLs to show the pop-up (separated by new lines)"
          multiline={4}
          value={includedUrls}
          onChange={value => onChange('includedUrls', value)}
        ></TextField>
      )}
      <TextField
        label="Excluded pages"
        helpText="Page URLs NOT to show the pop-up (separated by new lines)"
        multiline={4}
        value={excludedUrls}
        onChange={value => onChange('excludedUrls', value)}
      ></TextField>
    </Stack>
  );
};

TriggerTab.propTypes = {
  value: PropTypes.object,
  onChange: PropTypes.func
};

export default TriggerTab;
