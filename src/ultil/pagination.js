import _ from "lodash";

//Find the index of the item that you want to at the start of each page
export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(items)
    .slice(startIndex)
    .take(pageSize)
    .value();
  //_.slice(array, [start=0], [end=array.length])

  //_.take(array, [(n = 1)]);
  //Creates a slice of array with n elements taken from the beginning.
}
