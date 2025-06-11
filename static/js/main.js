const formEl = document.querySelector("form.new-todo");
const taskInput = document.getElementById("task");
const userInput = document.getElementById("user");

let todos;

window.addEventListener("load", async function () {
  const responseObj = await fetch("/todos");
  console.log(responseObj.body);
});

formEl.addEventListener("submit", async function (event) {
  event.preventDefault();
  const payload = {
    task: taskInput.value,
    user: userInput.value,
  };
  const responseObj = await fetch("/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  const response = await responseObj.json();
  console.log(response);
});
