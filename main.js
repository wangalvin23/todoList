function todoBullet(todo) {
  let li = document.createElement("li");
  li.textContent = todo;
  return li;
}

function checkEnter(keyEvent) {
  if (keyEvent.key === "Enter") {
    let inp = keyEvent.target.value;
    if (inp !== "") {
      const todoList = document.getElementById("todoList");
      todoList.appendChild(todoBullet(inp));
      keyEvent.target.value = "";
    }
  }
}

document.getElementById("inputs").addEventListener("keydown", checkEnter);
