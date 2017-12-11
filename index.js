// Code your solution in this file!
function distanceFromHqInBlocks (blocks) {
  return blocks > 42 ? blocks - 42 : 42 - blocks;
}

function distanceFromHqInFeet (blocks) {
  return distanceFromHqInBlocks(blocks) * 264;
}

function distanceTravelledInFeet(start, end){
  blocks = start > end ? end - start : start - end;
  return distanceFromHqInFeet(blocks);

}
