// Code your solution in this file!
function distanceFromHqInBlocks (blocks) {
  return blocks > 42 ? blocks - 42 : 42 - blocks;
}

function distanceFromHqInFeet (blocks) {
  return distanceFromHqInBlocks(blocks) * 264;
}

function distanceTravelledInFeet(start, end){
  blocks = start > end ? start - end : end - start;
  return blocks * 264;
}

function calculatesFarePrice(start, destination){
  distance = start > end ? (start - end) * 264 : (end - start) * 264;
  if (distance < 2000){
    return distance * .02;
  } else if (distance < 2500) {
    return 25;
    }
    return 'cannot travel that far';

}
