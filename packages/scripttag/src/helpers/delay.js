/**
 *
 * @param {number} ms
 * @returns {Promise}
 */
const delay = ms => new Promise(resolve => setTimeout(resolve, ms * 1000));

export default delay;
