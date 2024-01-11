import {getShopByShopifyDomain} from '@avada/shopify-auth';
import Shopify from 'shopify-api-node';
import createWebhook from './webhookCreationService';
import syncOrder from './orderSynchronizationService';
import {addShopSettings} from '../repositories/settingsRepository';
import {defaultSettings} from '../const/app';

/**
 *
 * @param ctx
 */
const afterInstall = async ctx => {
  try {
    const shopifyDomain = ctx.state.shopify.shop;
    const shop = await getShopByShopifyDomain(shopifyDomain);

    if (!shop) {
      throw Error('There is no shop with that domain');
    }

    const shopify = new Shopify({
      shopName: shopifyDomain,
      accessToken: shop.accessToken
    });

    // const webhooks = await shopify.webhook.list();
    // const jobs = webhooks.map(webhook => shopify.webhook.delete(webhook.id));
    // await Promise.all(jobs);

    await Promise.all([
      createWebhook(shopify),
      syncOrder({shopify, shop, shopifyDomain}),
      addShopSettings({...defaultSettings, shopifyDomain, shopId: shop.id})
    ]);
  } catch (e) {
    console.error(e);
  }
};

export default afterInstall;
