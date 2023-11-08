import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import store, {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/dialogs-reducer";

const Dialogs = () => {
  let state = store.getState();

  let dialogsElement = state.dialogsPage.dialogsDate.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messagesElements = state.dialogsPage.messagesDate.map((m) => (
    <Message message={m.message} />
  ));
  let newMessageBody = state.newMessageBody;
  let onSendMessageClick = () => {
    store.dispatch(sendMessageCreator());
  };
  let onNewMessageChange = (e) => {
    let body = e.target.value;
    store.dispatch(updateNewMessageBodyCreator(body));
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElement}</div>
      <div className={s.message}>{messagesElements}</div>
      <div>
        <div>
          <textarea
            value={newMessageBody}
            onChange={onNewMessageChange}
            placeholder="Enter your message"
          />
        </div>
        <div>
          <button onClick={onSendMessageClick}>Send</button>
        </div>
      </div>
    </div>
  );
};
export default Dialogs;
