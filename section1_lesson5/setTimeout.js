console.log("1: start app");

var holdOn = setTimeout(toprint, 1000);

console.log("3: end app");

function toprint() {
  console.log("2: set time out");
}
