import { combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reduser";
let reducers = combineReducers({
  profileReducer,
  dialogsReducer,
  sidebarReducer,
  usersReducer,
});

let store = createStore(reducers);
window.store = store;

export default store;
