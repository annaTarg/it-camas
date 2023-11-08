import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post";
import {
  addPostActionCreator,
  updateNewPostActionCreator,
} from "../../../redux/profile-reducer";
const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post key={p.message} message={p.message} likesCount={p.likesCount} />
  ));
  let newPostElement = React.createRef();
  let addPost = () => {
    props.dispatch({ addPostActionCreator });
  };
  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updateNewPostActionCreator(text);
    props.dispatch(action);
  };
  return (
    <div className={s.postsBlock}>
      <h3>My post</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value="it-kamasutra.com"
          />
        </div>
        <div>
          <button
            onClick={() => {
              addPost();
            }}
          >
            Add a post
          </button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
