import {getProductImage} from '../helpers/getProductImage';
import initShopify from '../helpers/initShopify';
import {addNotification, getNotiByOrderId} from '../repositories/notificationRepository';

export const listenNewOrder = async ctx => {
  try {
    const {billing_address: billingAddress, line_items: lineItems, created_at, id} = ctx.req.body;
    const [shopifyObj, notification] = await Promise.all([initShopify(ctx), getNotiByOrderId(id)]);

    const {shopify, shopDomain, shop} = shopifyObj;

    const productImage = await getProductImage(shopify, lineItems);

    if (notification) {
      ctx.status = 200;
      return (ctx.body = {
        success: true
      });
    }

    await addNotification({
      city: billingAddress.city,
      country: billingAddress.country,
      firstName: billingAddress.first_name,
      productId: lineItems[0].product_id,
      productImage,
      productName: lineItems[0].name,
      shopId: shop.id,
      shopifyDomain: shopDomain,
      timestamp: new Date(created_at).toISOString(),
      orderId: id
    });

    ctx.status = 200;
    return (ctx.body = {
      success: true
    });
  } catch (e) {
    console.log(e);
    ctx.status = 404;
    ctx.body = {
      message: e.message
    };
  }
};
