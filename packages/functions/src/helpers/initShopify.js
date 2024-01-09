import {getShopByShopifyDomain} from '@avada/shopify-auth';
import Shopify from 'shopify-api-node';

const initShopify = async ctx => {
  const shopDomain = ctx.get('X-Shopify-Shop-Domain');
  const shop = await getShopByShopifyDomain(shopDomain);

  if (!shop) {
    throw new Error('Something went wrong');
  }

  const shopify = new Shopify({
    shopName: shopDomain,
    accessToken: shop.accessToken
  });

  return {shopify, shopDomain, shop};
};

export default initShopify;
