import {Firestore} from '@google-cloud/firestore';
import {prepareDoc} from '../helpers/prepareDoc';
import getPageInfo from '../helpers/getPageInfo';

const firestore = new Firestore();
const notiRef = firestore.collection('notifications');

/**
 *
 * @param {object} param
 * @returns {data, totalPage: number}
 */
export const getList = async ({id, page = 1, limit = 10, sort = 'timestamp:desc'} = {}) => {
  const sortOption = sort.split(':');
  const pageNumber = Number(page);
  const limitNumber = Number(limit);
  const offset = limit * (pageNumber - 1);

  const snapshot = await notiRef
    .where('shopId', '==', id)
    .orderBy(sortOption[0], sortOption[1])
    .offset(offset)
    .limit(limitNumber)
    .get();

  const pageInfo = await getPageInfo(notiRef, limitNumber, pageNumber);

  return {
    data: snapshot.docs.map(doc => prepareDoc(doc)),
    pageInfo
  };
};

/**
 *
 * @param {number} id
 * @returns
 */
export const getNotiByOrderId = async id => {
  const doc = await notiRef.where('orderId', '==', id).get();
  const [notification] = doc.docs;
  return notification;
};

/**
 *
 * @param {object} noti
 * @returns {Promise}
 */
export const addNotification = noti => {
  return notiRef.add(noti);
};

/**
 *
 * @param {string[]} ids
 * @returns {Promise}
 */
export const removeList = (ids = []) => {
  const jobs = ids.map(id => notiRef.doc(id).delete());
  return Promise.all(jobs);
};
