/**
 *
 * @param order
 * @returns {object}
 */
const prepareNoti = order => {
  const arr = order.node.id.split('/');

  return {
    city: order.node.billingAddress.city,
    country: order.node.billingAddress.country,
    firstName: order.node.billingAddress.firstName,
    productId: order.node.lineItems.edges[0].node.product.id,
    productImage: order.node.lineItems.edges[0].node.image.src,
    productName: order.node.lineItems.edges[0].node.title,
    timestamp: order.node.createdAt,
    orderId: Number(arr[arr.length - 1])
  };
};

export default prepareNoti;
