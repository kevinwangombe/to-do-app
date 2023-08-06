const todoList = [];

const dateInput = document.querySelector("#date-input");
const date = new Date();
let month = date.getUTCMonth() + 1; //months from January to December
const day = date.getUTCDate();
const year = date.getUTCFullYear();

if (month < 10) {
  month = "0" + month;
}

dateInput.setAttribute("min", "${year}-${month}-${day}");
dateInput.value = "${year}-${month}-${day}";

function renderTodoList() {
  const listEl = document.querySelector(".js-to-list");
  listEl.innerHTML = "";

  todoList.forEach((todoObj, index) => {
    const { name, dueDate } = todoObj;

    const nameEl = document.createElement("div");
    nameEl.innerHTML = name;
    nameEl.classList.add("padding");

    const dateEl = document.createElement("div");
    dateEl.innerHTML = dueDate;
    dateEl.classList.add("padding");

    const de1BtnE1 = document.createElement("button");
    de1BtnE1.textContent = "Delete";
    de1BtnE1.classList.add("delete-btn");
    de1BtnE1.onclick = function () {
      todoList.splice(index, 1);
      renderTodoList();
    };

    list.append(nameEl, de1BtnE);
  });
}

document.querySelector(".js-add-todo-btn").addEventListener("click", () => {
  addTodo();
});

function addTodo() {
  const todoNameEl = document.querySelector(".todo-name");
  const dataInput = document.querySelector(".due-date-input");
  const name = todoNameEl.value;
  const dueDate = dataInput.value;

  todoList.push({ name, dueDate });

  todoNameEl.value = "";

  renderTodoList();
}
