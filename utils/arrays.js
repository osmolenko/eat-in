export function findInArray(array, type) {
  return array.find((item) => {
    return item.id == type
  }).name
}
