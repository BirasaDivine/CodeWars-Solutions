//Define the function
//Have seconds as an argument
//It should return a string all components
//Create an object with Year,day,hours...

function getHumanReadableTime(seconds) {
  if (seconds === 0) {
    return "now";
  }
  const components = {
    year: 60 * 60 * 24 * 365,
    day: 60 * 60 * 24,
    hour: 60 * 60,
    minute: 60,
    second: 1
  };
  const resultArray = [];
  for (const key in components) {
    const value = components[key];
    const unit = Math.floor(seconds / value);
    seconds = seconds % value;
    if (unit !== 0) resultArray.push(`${unit} ${key}${unit > 1 ? "s" : ""}`);
  }
  if (resultArray.length === 1) return resultArray[0];
  return [
    resultArray.slice(0, -1).join(", "),
    resultArray[resultArray.length - 1]
  ].join(" and ");
}

console.log(getHumanReadableTime(0));
