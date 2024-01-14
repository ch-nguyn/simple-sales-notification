import {getShopByShopifyDomain} from '@avada/shopify-auth';
import {getList} from '../repositories/notificationRepository';
import {getShopSettings} from '../repositories/settingsRepository';

/**
 *
 * @param ctx
 * @returns
 */
export const getShopData = async ctx => {
  try {
    const {shopifyDomain} = ctx.req.query;
    const shop = await getShopByShopifyDomain(shopifyDomain);

    if (!shop) {
      throw new Error('Wrong shopifyDomain');
    }

    const [settings, noti] = await Promise.all([
      getShopSettings(shop.id),
      getList({id: shop.id, limit: 80})
    ]);

    ctx.status = 200;
    return (ctx.body = {
      success: true,
      data: {
        settings,
        notifications: noti.data
      }
    });
  } catch (e) {
    ctx.status = 404;
    return (ctx.body = {
      message: e.message
    });
  }
};
