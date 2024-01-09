import {addNotification} from '../repositories/notificationRepository';
import queryOrdersGraphql from '../const/queryOrdersGraphql';

const orderSynchronizationService = async ({shopify, shop, shopifyDomain}) => {
  try {
    const resp = await shopify.graphql(queryOrdersGraphql);
    const orders = resp.orders.edges;

    orders.forEach(order => {
      const {billingAddress, lineItems} = order.node;
      addNotification({
        city: billingAddress.city,
        country: billingAddress.country,
        firstName: billingAddress.firstName,
        productId: lineItems.edges[0].node.product.id,
        productImage: lineItems.edges[0].node.image.src,
        productName: lineItems.edges[0].node.title,
        shopId: shop.id,
        shopifyDomain: shopifyDomain,
        timestamp: order.node.createdAt
      });
    });
  } catch (e) {
    console.error(e);
  }
};

export default orderSynchronizationService;
