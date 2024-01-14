import {EmptyState} from '@shopify/polaris';
import PropTypes from 'prop-types';
import React from 'react';

function EmptyList({
  heading = 'There are not any notifications',
  content = '',
  image = 'https://cdn.shopify.com/s/files/1/2376/3301/products/emptystate-files.png'
}) {
  return (
    <EmptyState heading={heading} image={image}>
      <p>{content}</p>
    </EmptyState>
  );
}

EmptyList.propTypes = {
  heading: PropTypes.string,
  content: PropTypes.string,
  image: PropTypes.string
};

export default EmptyList;
