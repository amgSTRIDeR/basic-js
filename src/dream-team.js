const { NotImplementedError } = require('../extensions/index.js');

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
  if(Array.isArray(members) === false) return false;
  let superDuperTeamName = '';
  members.forEach((item) => {
    if (typeof item === 'string') {
      superDuperTeamName += item.trim()[0].toUpperCase();
    }
  });

  superDuperTeamName = superDuperTeamName.split('').sort().join('');

  return superDuperTeamName;
}
module.exports = {
  createDreamTeam
};
