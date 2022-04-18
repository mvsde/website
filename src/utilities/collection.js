/**
 * Change collection order
 * @param {Object} options
 * @param {Array} options.collection
 * @param {'ascending'|'descending'} [options.order]
 * @returns {Array}
 */
export function orderCollection ({ collection, order = 'descending' }) {
  if (order === 'ascending') {
    return collection
  }

  if (order === 'descending') {
    return collection.slice().reverse()
  }
}
