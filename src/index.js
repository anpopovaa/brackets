module.exports = function brackets(str, bracketsConfig){
  let newArr = [];
  str = str.split('').forEach(item => {
    let arrItem = bracketsConfig.findIndex(index => index.includes(item));
    if(item === bracketsConfig[arrItem][1] && newArr[newArr.length - 1] === bracketsConfig[arrItem][0]) {
      newArr.pop();
    } else {
      newArr.push(item);
    }
  })
  return newArr.length === 0;
}
