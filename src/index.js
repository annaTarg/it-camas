import store from "./redux/State";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

export let rerenderEntireTree = (state) => {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <App
        State={store.getState()}
        dispatch={store.dispatch.bind(store)}
        store={store}
      />
    </React.StrictMode>
  );
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);
