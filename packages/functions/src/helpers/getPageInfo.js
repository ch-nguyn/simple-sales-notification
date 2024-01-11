/**
 *
 * @param {doc} ref
 * @param {number} limit
 * @param {number} page
 * @returns {{hasNext: boolean, hasPrevious:boolean}}
 */
const getPageInfo = async (ref, limit, page) => {
  const snapshot = await ref.count().get();
  const totalData = snapshot.data().count;
  const totalPage = Math.ceil(totalData / limit);

  const hasNext = page !== totalPage;
  const hasPrevious = page !== 1;

  return {
    hasNext,
    hasPrevious
  };
};

export default getPageInfo;
