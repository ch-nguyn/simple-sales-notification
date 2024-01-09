import {Firestore} from '@google-cloud/firestore';
import {prepareDoc} from '../helpers/prepareDoc';
import getTotalPage from '../helpers/getTotalPage';
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

  const totalPage = await getTotalPage({ref: notiRef, limit: limitNumber, id});
  const pageInfo = getPageInfo(pageNumber, totalPage);

  return {
    data: snapshot.docs.map(doc => prepareDoc(doc)),
    pageInfo
  };
};

export const addNotification = async noti => {
  await notiRef.add(noti);
};

/**
 *
 * @param {string[]} ids
 */
export const removeList = async (ids = []) => {
  const jobs = ids.map(id => notiRef.doc(id).delete());
  await Promise.all(jobs);
};
