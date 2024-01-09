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

    const settings = await getShopSettings(shop.id);
    const {data: notifications} = await getList({id: shop.id, limit: settings.maxPopsDisplay});

    ctx.status = 200;
    return (ctx.body = {
      success: true,
      data: {
        settings,
        notifications
      }
    });
  } catch (e) {
    ctx.status = 404;
    return (ctx.body = {
      message: e.message
    });
  }
};
