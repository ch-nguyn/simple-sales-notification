import {domain} from '../const/app';

/**
 *
 * @param {Shopify} shopify
 * @param {string} topic
 * @returns {Promise<Array>}
 */
const webhookCreationService = async shopify => {
  // Create Webhook
  const webhookData = {
    topic: 'orders/create',
    address: `${domain}/webhook/order/new`,
    format: 'json'
  };

  return shopify.webhook.create(webhookData);
};

export default webhookCreationService;
