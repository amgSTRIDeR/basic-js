const { NotImplementedError } = require('../lib');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if(!Array.isArray(members)) {
    return false;
  }

  return members.map(member => {
    if(typeof member === 'string') {
      return member.trim().at(0);
    }
    return '';
  }).sort((a, b) => a.localeCompare(b)).join('').toUpperCase();
}

module.exports = {
  createDreamTeam
};
