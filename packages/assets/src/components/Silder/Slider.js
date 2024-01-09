import React from 'react';
import {RangeSlider} from '@shopify/polaris';
import './Slider.scss';
import PropTypes from 'prop-types';

/**
 *
 * @param {number} value
 * @param {string} label
 * @param {string} helpText
 * @param {string} suffixContent
 * @param {number} max
 * @param onChange
 * @returns {JSX.Element}
 */
const Slider = ({
  value,
  label = '',
  helpText = '',
  onChange = () => {},
  max = 60,
  suffixContent = 'second(s)'
}) => {
  return (
    <RangeSlider
      max={max}
      label={label}
      helpText={helpText}
      value={value}
      onChange={onChange}
      suffix={
        <div className="Avada-Slider__Suffix--container">
          {value}
          <span className="Avada-Slider__Suffix--content">{suffixContent}</span>
        </div>
      }
    />
  );
};

Slider.propTypes = {
  value: PropTypes.number,
  label: PropTypes.string,
  helpText: PropTypes.string,
  onChange: PropTypes.func,
  max: PropTypes.number,
  suffixContent: PropTypes.string
};

export default Slider;
