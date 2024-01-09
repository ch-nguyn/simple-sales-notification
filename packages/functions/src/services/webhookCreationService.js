import {domain} from '../const/app';

/**
 *
 * @param {Shopify} shopify
 */
const webhookCreationService = async shopify => {
  const webhookData = {
    topic: 'orders/create',
    address: `${domain}/webhook/order/new`,
    format: 'json'
  };

  await shopify.webhook.create(webhookData);
};

export default webhookCreationService;
