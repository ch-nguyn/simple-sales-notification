import {Firestore} from '@google-cloud/firestore';
import {prepareDoc} from '../helpers/prepareDoc';

const firestore = new Firestore();
const settingsRef = firestore.collection('settings');

/**
 *
 * @param {string} id
 * @returns {settings}
 */
export const getShopSettings = async id => {
  const doc = await settingsRef
    .where('shopId', '==', id)
    .limit(1)
    .get();
  return prepareDoc(doc.docs[0]);
};

/**
 *
 * @param {string} id
 * @param data
 */
export const updateShopSettings = (id, data) => {
  return settingsRef.doc(id).update(data);
};

/**
 *
 * @param {object} data
 * @returns {Promise}
 */
export const addShopSettings = data => {
  return settingsRef.add(data);
};
