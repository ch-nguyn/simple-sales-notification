const prepareNoti = order => ({
  city: order.node.billingAddress.city,
  country: order.node.billingAddress.country,
  firstName: order.node.billingAddress.firstName,
  productId: order.node.lineItems.edges[0].node.product.id,
  productImage: order.node.lineItems.edges[0].node.image.src,
  productName: order.node.lineItems.edges[0].node.title,
  timestamp: order.node.createdAt
});

export default prepareNoti;
