const voted = {};

function check_voter(name) {
  if (voted[name]) {
    console.log("kick them out!");
  } else {
    voted[name] = true;
    console.log("let them vote!");
  }
}

check_voter("tom"); // let them vote!
check_voter("mike"); // let them vote!
check_voter("mike"); // kick them out!

console.group("voted");
console.log(voted);
console.groupEnd();
