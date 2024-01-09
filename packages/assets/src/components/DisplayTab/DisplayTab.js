import React from 'react';
import {Stack, Checkbox, Heading, FormLayout} from '@shopify/polaris';
import PropTypes from 'prop-types';
import DesktopPositionInput from '../DesktopPositionInput/DesktopPositionInput';
import Slider from '../Silder/Slider';
import './DisplayTab.scss';
// import {PropTypes} from 'prop-types';

/**
 *
 * @param {object} value
 * @param {func} onChange
 * @returns {JSX.Element}
 */
const DisplayTab = ({value, onChange}) => {
  const {
    position,
    hideTimeAgo,
    truncateProductName,
    displayDuration,
    firstDelay,
    popsInterval,
    maxPopsDisplay
  } = value;
  return (
    <Stack vertical spacing="">
      <Heading>APPEARANCE</Heading>
      <DesktopPositionInput
        label={'Display Position'}
        value={position}
        onChange={value => onChange('position', value)}
        helpText="The display position of the pop on your website."
      />
      <Checkbox
        label="Hide time ago"
        checked={hideTimeAgo}
        onChange={() => onChange('hideTimeAgo', !hideTimeAgo)}
      />
      <Checkbox
        label="Truncate content text"
        helpText="If your product name is long for one line, it will be truncated to 'Product na...'"
        checked={truncateProductName}
        onChange={() => onChange('truncateProductName', !truncateProductName)}
      />
      <Heading>TIMING</Heading>

      <FormLayout>
        <FormLayout.Group>
          <Slider
            value={displayDuration}
            onChange={value => onChange('displayDuration', value)}
            label="Display duration"
            helpText="How long each pop will display on your page"
          />

          <Slider
            value={firstDelay}
            onChange={value => onChange('firstDelay', value)}
            label="Time before the first pop"
            helpText="The delay time before the first notification"
          />
        </FormLayout.Group>

        <FormLayout.Group>
          <Slider
            value={popsInterval}
            onChange={value => onChange('popsInterval', value)}
            label="Gap time between two pops"
            helpText="The time interval between two popup notifications"
          />

          <Slider
            value={maxPopsDisplay}
            onChange={value => onChange('maxPopsDisplay', value)}
            label="Maxium of popups"
            helpText="The maxium number of the popups are allowed to show after page loading. Maxium number is 80."
            max={80}
            suffixContent="pop(s)"
          />
        </FormLayout.Group>
      </FormLayout>
    </Stack>
  );
};

DisplayTab.propTypes = {
  value: PropTypes.object,
  onChange: PropTypes.func
};

export default DisplayTab;
