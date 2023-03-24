import todoStore from "../store/todo.store";
import htmlApp from "./app.html?raw";
import { renderTodos } from "./use-cases/render-todos";
/**
 *
 * @param {String} elementId
 */

const elementIDs = {
  TodoList: ".todo-list",
  NewTodoInput: "#new-todo-input",
};

export const App = (elementId) => {
  // obtener todos
  const displayTodos = () => {
    const todos = todoStore.getTodos(todoStore.getCurrentFilter());
    renderTodos(elementIDs.TodoList, todos);
  };

  // inicializar app
  (() => {
    const app = document.createElement("div");
    app.innerHTML = htmlApp;
    document.querySelector(elementId).append(app);
    displayTodos();
  })();

  // referencias html
  const newDescriptionInput = document.querySelector(elementIDs.NewTodoInput);

  // listener
  newDescriptionInput.addEventListener("keyup", (event) => {
    // hacer la validacion con el enter
    if (event.keyCode !== 13) return;
    if (event.target.value.trim().length === 0) return;

    todoStore.addTodo(event.target.value);
    displayTodos();
    event.target.value = "";
  });
};
