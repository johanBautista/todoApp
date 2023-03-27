import { Todo } from "../todos/models/todo-model";

export const Filters = {
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
  console.log("init store 😜");
  loadStore();
};

// actions
const loadStore = () => {
  if (localStorage.getItem("state") === null) return;

  const { todos = [], filters = Filters.All } = JSON.parse(
    localStorage.getItem("state")
  );
  state.todos = todos;
  state.filters = filters;
};

const saveStateLocalStorage = () => {
  localStorage.setItem("state", JSON.stringify(state));
};
/**
 *
 * @param {String} filter
 */
const getTodos = (filter = Filters.All) => {
  switch (filter) {
    case Filters.All:
      return [...state.todos];
    case Filters.Completed:
      return state.todos.filter((todo) => todo.done);
    case Filters.Pending:
      return state.todos.filter((todo) => !todo.done);

    default:
      throw new Error(`This ${filter} is not valid.`);
  }
};

/**
 *
 * @param {String} description
 */
const addTodo = (description) => {
  if (!description) throw new Error("Description is required!");

  state.todos.push(new Todo(description));
  saveStateLocalStorage();
};
/**
 *
 * @param {String} todoId
 */
const toggleTodo = (todoId) => {
  state.todos = state.todos.map((todo) => {
    if (todo.id === todoId) {
      todo.done = !todo.done;
    }
    return todo;
  });
  saveStateLocalStorage();
};
/**
 *
 * @param {String} todoId
 */
const deleteTodo = (todoId) => {
  state.todos = state.todos.filter((todo) => todo.id !== todoId);
  saveStateLocalStorage();
};

const deleteCompleted = () => {
  state.todos = state.todos.filter((todo) => !todo.done);
  saveStateLocalStorage();
};

/**
 *
 * @param {Filters} filter
 */
const setFilter = (newFilter = Filters.All) => {
  state.filters = newFilter;
  saveStateLocalStorage();
};

const getCurrentFilter = () => {
  return state.filters;
};

export default {
  addTodo,
  deleteCompleted,
  deleteTodo,
  getCurrentFilter,
  getTodos,
  initStore,
  loadStore,
  setFilter,
  toggleTodo,
};
