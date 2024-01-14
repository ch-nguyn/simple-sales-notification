import {domain} from '../const/app';

/**
 *
 * @param {Shopify} shopify
 * @param {string} topic
 * @returns {Promise<Array>}
 */
const webhookCreationService = async shopify => {
  const webhooks = await shopify.webhook.list();
  const jobs = webhooks.map(webhook => shopify.webhook.delete(webhook.id));
  await Promise.all(jobs);

  const webhookData = {
    topic: 'orders/create',
    address: `${domain}/webhook/order/new`,
    format: 'json'
  };

  return shopify.webhook.create(webhookData);
};

export default webhookCreationService;
