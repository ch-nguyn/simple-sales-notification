import {getCurrentShop} from '../helpers/auth';
import {getList, removeList} from '../repositories/notificationRepository';

export const getNotifications = async ctx => {
  try {
    const id = getCurrentShop(ctx);
    const {limit, page, sort} = ctx.req.query;

    if (!id) {
      throw new Error('Cannot get shop id');
    }

    const {data, pageInfo} = await getList({id, page, limit, sort});

    ctx.status = 200;
    ctx.body = {
      success: true,
      data,
      pageInfo
    };
  } catch (e) {
    ctx.status = 404;
    ctx.body = {
      success: false,
      message: e.message
    };
  }
};

export const removeNotifications = async ctx => {
  try {
    const {data} = ctx.req.body;
    await removeList(data);
    ctx.status = 200;
    return (ctx.body = {
      success: true
    });
  } catch (e) {
    ctx.status = 404;
    ctx.body = {
      success: false,
      message: e.message
    };
  }
};
