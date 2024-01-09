import {getCurrentShop} from '../helpers/auth';
import {getShopSettings, updateShopSettings} from '../repositories/settingsRepository';

export const getSettings = async ctx => {
  try {
    const id = getCurrentShop(ctx);
    if (!id) {
      throw new Error('Cannot get shop id');
    }
    const data = await getShopSettings(id);
    ctx.status = 200;
    ctx.body = {
      success: true,
      data
    };
  } catch (e) {
    ctx.status = 404;
    ctx.body = {
      success: false,
      message: e.message
    };
  }
};

export const updateSettings = async ctx => {
  try {
    const {data} = ctx.req.body;
    updateShopSettings(data.id, data);

    ctx.status = 200;
    ctx.body = {
      success: true
    };
  } catch (e) {
    ctx.status = 404;
    ctx.body = {
      success: false,
      message: e.message
    };
  }
};
