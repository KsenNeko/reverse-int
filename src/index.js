module.exports = function reverse (n) {
  let arr = n.toString().split('');
    arr = arr.reverse();
    let str = arr.join('');
    return parseInt(str);
}
