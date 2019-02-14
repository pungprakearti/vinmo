/** sortArrBy is a function that accepts an array of objects, a key,
    an optional boolean to determine sorting by ascending or descending
    order, and an optional secondaryKey */
export default function sortArrBy(
  products,
  key,
  ascend = true,
  secondaryKey = null
) {
  let resultArr = [...products];

  //if secondaryKey exists, combine both keys and use to sort
  //change the properties into strings, lowercase them, remove
  //empty spaces, join the two together and save them with a key
  //of newKey
  if (secondaryKey) {
    for (let i = 0; i < resultArr.length; i++) {
      resultArr[i] = {
        ...resultArr[i],
        newKey: resultArr[i][key]
          .toString()
          .toLowerCase()
          .split(' ')
          .join('')
          .concat(
            resultArr[i][secondaryKey]
              .toString()
              .toLowerCase()
              .split(' ')
              .join('')
          )
      };
    }

    //set sorting key to newKey
    key = 'newKey';
  }

  //sort
  if (ascend) {
    resultArr.sort((a, b) => {
      if (a[key] < b[key]) {
        return -1;
      }
      if (a[key] > b[key]) {
        return 1;
      }
      return 0;
    });
    //
    //descending order
  } else {
    resultArr.sort((b, a) => {
      if (a[key] < b[key]) {
        return -1;
      }
      if (a[key] > b[key]) {
        return 1;
      }
      return 0;
    });
  }

  return resultArr;
}
