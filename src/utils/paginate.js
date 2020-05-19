import _ from 'lodash';

function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  // convert to lodash wrapper '_(items)' so methods can be chained
  // slice array starting from startIndex
  // take() picks items for that array 
  // value() converts wrapper to a regular array
  return _(items)
    .slice(startIndex)
    .take(pageSize)
    .value();
}

export default paginate;