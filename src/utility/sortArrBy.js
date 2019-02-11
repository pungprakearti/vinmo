/** sortArrBy is a function that accepts an array of objects, a key,
    and a boolean to determine sorting by ascending or descending order */
export default function sortArrBy(arr, key, ascend = true) {
  let resArr = [...arr];

  //sort by ascending or descending order
  if (ascend) resArr.sort((a, b) => a[key] - b[key]);
  else resArr.sort((b, a) => a[key] - b[key]);

  return resArr;
}
