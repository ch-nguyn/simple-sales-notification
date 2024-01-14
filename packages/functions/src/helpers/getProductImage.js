/**
 *
 * @param {Shopify} shopify
 * @param {object[]} lineItems
 * @returns {string}
 */
export const getProductImage = async (shopify, lineItems) => {
  const product = await shopify.product.get(lineItems[0].product_id);
  return product.image.src;
};
