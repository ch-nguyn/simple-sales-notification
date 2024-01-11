import {domain} from '../const/app';

/**
 *
 * @param {Shopify} shopify
 * @param {string} topic
 * @returns {Promise<Array>}
 */
const webhookCreationService = async (shopify, topic = 'orders/create') => {
  // Delete old webhooks
  const webhooks = await shopify.webhook.list();
  const jobs = webhooks.map(webhook => shopify.webhook.delete(webhook.id));
  await Promise.all(jobs);

  // Create Webhook
  const webhookData = {
    topic,
    address: `${domain}/webhook/order/new`,
    format: 'json'
  };
  return shopify.webhook.create(webhookData);
};

export default webhookCreationService;
