/** findFilters finds all of the unique properties
    in each item to use as filters */
export default function findFilters(arr) {
  let options = {
    manufacturer: [],
    vintage: [],
    appellation: [],
    varietal: []
  };

  //iterate through array
  for (let item of arr) {
    //
    //iterate through each property
    for (let prop in options) {
      //
      //if property in item doesn't exist in options, add it
      if (options[prop].indexOf(item[prop]) === -1) {
        options[prop].push(item[prop]);
      }
    }
  }

  //sort options
  for (let prop in options) {
    options[prop].sort();
  }

  return options;
}
