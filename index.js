// Code your solution in this file!


const headQ = 42
const feet = 264
// const start = 43
// const destination = 48

function distanceFromHqInBlocks(pickup) {
  if (pickup > 42) {
    return (pickup - headQ);
  } else if (pickup < 42) {
    return (headQ - pickup)
  }
}

function distanceFromHqInFeet(pickup) {
  if (pickup > 42) {
    return ((pickup - headQ) * 264);
  } else if (pickup < 42) {
    return ((headQ - pickup) * 264)
  }

}

function distanceTravelledInFeet(start, destination) {
  if (destination > 42) {
    return ((destination - start) * 264);
  } else if (destination < 42) {
    return ((start - destination) * 264)
  }


}
//  const dist = distanceTravelledInFeet()


function calculatesFarePrice (start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return .02 * (distance - 400);
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}