// You live in the city of Cartesia where all roads are laid out in a perfect grid.
// You arrived ten minutes too early to an appointment,
// so you decided to take the opportunity to go for a short walk.
// The city provides its citizens with a Walk Generating App on their phones --
// everytime you press the button it sends you an array of one-letter
// strings representing directions to walk (eg. ['n', 's', 'w', 'e']).
// You always walk only a single block for each letter (direction) and you know
// it takes you one minute to traverse one city block, so create a function that will return
// true if the walk the app gives you will take you exactly ten minutes
// (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

function isValidWalk(walk) {
  let result = {};
  //   for (let i = 0; i < walk.length; i++) {
  //     if (walk.length === 10 && walk[1] === walk[9]) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   }
  for (direction of walk) {
    if (result[direction]) {
      result[direction] += 1;
    } else {
      result[direction] = 1;
    }
  }
  if (
    walk.length == 10 &&
    (result["n"] || 0) == (result["s"] || 0) &&
    (result["e"] || 0) == (result["w"] || 0)
  ) {
    return true;
  } else {
    return false;
  }
}
console.log(
  isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"])
);
