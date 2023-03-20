import { Todo } from "../todos/models/todo-model";

const Filters = {
  All: "All",
  Completed: "Completed",
  Pending: "Pending",
};

const state = {
  todos: [
    new Todo("Tarea 1"),
    new Todo("Tarea 2"),
    new Todo("Tarea 3"),
    new Todo("Tarea 4"),
  ],
  filters: Filters.All,
};

const initStore = () => {
  console.log("pinn 😜");
  console.log(state);
};

export default { initStore };
