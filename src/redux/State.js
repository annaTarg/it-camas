import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 12 },
        { id: 2, message: "It is my first post", likesCount: 11 },
        { id: 3, message: "Dada", likesCount: 11 },
        { id: 4, message: "Blabla", likesCount: 11 },
      ],
      newPostText: "itkamasutre.com",
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Dimuch" },
        { id: 2, name: "Andrey" },
        { id: 3, name: "Sveta" },
        { id: 4, name: "Sasha" },
        { id: 5, name: "Victor" },
        { id: 6, name: "Valera" },
      ],
      messages: [
        { id: 1, message: "Hi!" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "Yo" },
      ],
    },
    newMessageBody: "aaa",
    sidebar: {},
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log("State changed");
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.profilePage = dialogsReducer(this._state.dialogsPage, action);
    this._state.profilePage = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  },
};

export default store;
window.store = store;
