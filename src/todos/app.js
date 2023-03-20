/**
 *
 * @param {String} elementId
 */

import htmlApp from "./app.html?raw";

export const App = (elementId) => {
  (() => {
    const app = document.createElement("div");
    app.innerHTML = htmlApp;
    document.querySelector(elementId).append(app);
  })();
};
