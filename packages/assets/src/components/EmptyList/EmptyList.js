import {EmptyState} from '@shopify/polaris';
import React from 'react';

function EmptyList({
  heading = 'Upload a file to get started',
  content = 'You can use the Files section to upload images, videos, and other documents',
  title = 'Upload files',
  onAction = () => {},
  image = 'https://cdn.shopify.com/s/files/1/2376/3301/products/emptystate-files.png'
}) {
  return (
    <EmptyState heading={heading} action={{content: title, onAction}} image={image}>
      <p>{content}</p>
    </EmptyState>
  );
}

export default EmptyList;
