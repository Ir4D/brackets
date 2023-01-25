module.exports = function check(str, bracketsConfig) {
  let arr = str.split('');
  let flag = false;
  let storage = [];
  for (let i = 0; i < arr.length; i++) {
    storage.push(arr[i]);
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (storage.at(-2) == bracketsConfig[j][0] && storage.at(-1) == bracketsConfig[j][1]) {
        storage.pop();
        storage.pop();
      }
    } 
  }
  if (storage.length == 0) {
    flag = true;
  }
  return flag;
}
