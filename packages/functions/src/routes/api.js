import Router from 'koa-router';
import * as sampleController from '@functions/controllers/sampleController';
import * as shopController from '@functions/controllers/shopController';
import * as subscriptionController from '@functions/controllers/subscriptionController';
import * as appNewsController from '@functions/controllers/appNewsController';
import * as settingsController from '@functions/controllers/settingsController';
import * as notificationController from '@functions/controllers/notificationController';
import {getApiPrefix} from '@functions/const/app';

export default function apiRouter(isEmbed = false) {
  const router = new Router({prefix: getApiPrefix(isEmbed)});

  router.get('/notifications', notificationController.getNotifications);
  router.delete('/notifications', notificationController.removeNotifications);

  router.put('/settings', settingsController.updateSettings);
  router.get('/settings', settingsController.getSettings);

  router.get('/samples', sampleController.exampleAction);
  router.get('/shops', shopController.getUserShops);
  router.get('/subscription', subscriptionController.getSubscription);
  router.get('/appNews', appNewsController.getList);

  return router;
}
