import initShopify from '../helpers/initShopify';
import {addNotification} from '../repositories/notificationRepository';

export const listenNewOrder = async ctx => {
  try {
    const {billing_address: billingAddress, line_items: lineItems, created_at} = ctx.req.body;
    const {city, country, first_name} = billingAddress;
    const {product_id, name} = lineItems[0];

    const {shopify, shopDomain, shop} = await initShopify(ctx);

    const product = await shopify.product.get(lineItems[0].product_id);
    const productImage = product.image.src;

    await addNotification({
      city,
      country,
      firstName: first_name,
      productId: product_id,
      productImage,
      productName: name,
      shopId: shop.id,
      shopifyDomain: shopDomain,
      timestamp: new Date(created_at).toISOString()
    });

    ctx.status = 201;
    ctx.body = {
      success: true
    };
  } catch (e) {
    ctx.status = 404;
    ctx.body = {
      message: e.message
    };
  }
};
