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
export const updateShopSettings = async (id, data) => {
  await settingsRef.doc(id).update(data);
};

export const addShopSettings = async data => {
  await settingsRef.add(data);
};
