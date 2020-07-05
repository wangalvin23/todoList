// document.addEventListener("keydown", logKey);

// function logKey(e) {
//   log.textContent += ` ${e.code}`;
// }

function checkEnter(keyEvent) {
  //   console.log("keyboardEvent", keyEvent);
  if (keyEvent.key === "Enter") {
    const inp = keyEvent.target.value;
    console.log("enter", inp);
    // if (inp === "") {
    //   console.log("false");
    // } else {
    //   console.log("true");
    // }
  }
}

document.getElementById("inputs").addEventListener("keydown", checkEnter);
