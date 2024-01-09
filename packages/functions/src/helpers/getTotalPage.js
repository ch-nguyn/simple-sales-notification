/**
 *
 * @param {ref: doc, limit: number, id: string}
 * @returns {number}
 */
const getTotalPage = async ({ref, limit, id}) => {
  const snapshot = await ref.count().get();
  const totalData = snapshot.data().count;
  const totalPage = Math.ceil(totalData / limit);
  return totalPage;
};

export default getTotalPage;
