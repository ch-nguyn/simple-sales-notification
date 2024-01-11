import {addNotification} from '../repositories/notificationRepository';
import queryOrdersGraphql from '../const/queryOrdersGraphql';
import prepareNoti from '../helpers/prepareNoti';

const orderSynchronizationService = async ({shopify, shop, shopifyDomain}) => {
  const resp = await shopify.graphql(queryOrdersGraphql);
  const orders = resp.orders.edges;

  const promiseOrder = orders.map(order => {
    return addNotification({...prepareNoti(order), shopId: shop.id, shopifyDomain});
  });

  return promiseOrder;
};

export default orderSynchronizationService;
