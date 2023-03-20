import { App } from "./src/todos/app";
import "./style.css";
import todoStore from "./src/store/todo.store.js";

todoStore.initStore();
App("#app");
