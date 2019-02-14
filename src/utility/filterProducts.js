/** filterProducts takes a selection of filters and a list of products and
    finds all of the matches and returns a single array of products */
export default function filterProducts(filterSelection, products) {
  let resultArr = [];
  let tempProducts = [...products];
  let index = 0;

  for (let section in filterSelection) {
    //
    //check if filter section has any selected options
    if (filterSelection[section].length > 0) {
      while (tempProducts.length > 0 && index < tempProducts.length) {
        //
        //check if selection is in product
        if (
          filterSelection[section].indexOf(tempProducts[index][section]) !== -1
        ) {
          //add to result and remore entry from tempProducts
          resultArr.push(tempProducts[index]);
          tempProducts.splice(index, 1);
          //
          //no matches, move index
        } else {
          index++;
        }
      }
    }
    index = 0;
  }

  return resultArr;
}
