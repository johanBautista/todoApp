import { Todo } from "../models/todo-model";
import { createElementHTML } from "./";

/**
 *
 * @param {String} elementId
 * @param {Todo} todos
 */

let element;
export const renderTodos = (elementId, todos = []) => {

  if (!element) element = document.querySelector(elementId);

  if (!element) throw new Error(`Element  ${element} not found.`);

  element.innerHTML = "";

  todos.forEach((todo) => {
    element.append(createElementHTML(todo));
  });
};
// create a component title with two props a react