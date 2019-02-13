/** filterProducts takes a selection of filters and a list of products and
    finds all of the matches and returns a single array of products */
export default function filterProducts(filterSelection, products) {
  let resultArr = [];

  //if filterSelection section has an item, search all products for it
  for (let section in filterSelection) {
    if (filterSelection[section].length > 0) {
      let marker = 0;

      //loop through all of the products
      while (marker < products.length) {
        if (
          filterSelection[section].indexOf(products[marker][section]) !== -1
        ) {
          //if the product matches the filter, add it to the resultArr
          resultArr.push(products[marker]);
        }
        marker++;
      }
    }
  }

  return resultArr;
}
