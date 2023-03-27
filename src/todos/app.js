import todoStore, { Filters } from "../store/todo.store";
import htmlApp from "./app.html?raw";
import { renderPending } from "./use-cases";
import { renderTodos } from "./use-cases/render-todos";
/**
 *
 * @param {String} elementId
 */

const elementIDs = {
  TodoList: ".todo-list",
  NewTodoInput: "#new-todo-input",
  ClearCompleted: ".clear-completed",
  TodoFilters: ".filtro",
  CounterPending: "#pending-count",
};

export const App = (elementId) => {
  // obtener todos
  const displayTodos = () => {
    const todos = todoStore.getTodos(todoStore.getCurrentFilter());
    updatePendingCount();
    renderTodos(elementIDs.TodoList, todos);
  };

  // contar todos pendientes
  const updatePendingCount = () => {
    renderPending(elementIDs.CounterPending);
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
  const todoListUL = document.querySelector(elementIDs.TodoList);
  const deleteAllCompleted = document.querySelector(elementIDs.ClearCompleted);
  const todoFilters = document.querySelectorAll(elementIDs.TodoFilters);

  // listener
  newDescriptionInput.addEventListener("keyup", (event) => {
    // hacer la validacion con el enter
    if (event.keyCode !== 13) return;
    if (event.target.value.trim().length === 0) return;

    todoStore.addTodo(event.target.value);
    displayTodos();
    event.target.value = "";
  });

  // toogle
  todoListUL.addEventListener("click", (event) => {
    const elemetParent = event.target.closest("[data-id]");
    const elementId = elemetParent.getAttribute("data-id");
    todoStore.toggleTodo(elementId);
    displayTodos();
  });

  // delete Todo
  todoListUL.addEventListener("click", (event) => {
    const isDestroyElement = event.target.className === "destroy";
    const elemetParent = event.target.closest("[data-id]");
    if (!elemetParent || !isDestroyElement) return;

    const elementId = elemetParent.getAttribute("data-id");
    todoStore.deleteTodo(elementId);
    displayTodos();
  });

  // delete all completed
  deleteAllCompleted.addEventListener("click", (event) => {
    if (!event.target.className === "clear-completed") return;

    todoStore.deleteCompleted();
    displayTodos();
  });

  // manejo de filtros
  todoFilters.forEach((element) => {
    element.addEventListener("click", (e) => {
      todoFilters.forEach((el) => el.classList.remove("selected"));
      element.classList.add("selected");
      switch (e.target.text) {
        case "Todos":
          todoStore.setFilter(Filters.All);
          break;
        case "Pendientes":
          todoStore.setFilter(Filters.Pending);
          break;
        case "Completados":
          todoStore.setFilter(Filters.Completed);
          break;
      }
      displayTodos();
    });
  });
};
