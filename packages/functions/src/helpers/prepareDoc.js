import moment from 'moment';

/**
 *
 * @param doc
 * @returns {doc}
 */
export const prepareDoc = doc => {
  const timestamp = doc.data().timestamp;
  return {
    ...doc.data(),
    id: doc.id,
    relativeTime: timestamp && moment(timestamp).fromNow()
  };
};
