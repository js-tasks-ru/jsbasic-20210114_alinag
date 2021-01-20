/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  let strNew=str.toLowerCase();
  if (strNew.includes("1xbet") || strNew.includes("xxx")){
    return true;
  } else {
    return false;
  }
}
