function getFloorAndCeil(x, arr) {
  // code here
  let floor = null,
    ceil = null;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= x && (floor === null || arr[i] > floor)) floor = arr[i];
    else if (arr[i] >= x && (ceil === null || arr[i] < ceil)) ceil = arr[i];
    console.log(floor, ceil);
  }
  return [floor ?? -1, ceil ?? -1];
}
console.log(getFloorAndCeil(17, [36, 82, 88, 56, 21, 17, 73, 86]));
