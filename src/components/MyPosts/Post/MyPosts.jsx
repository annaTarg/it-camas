import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post";

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post key={p.message} message={p.message} likesCount={p.likesCount} />
  ));
  let newPostElement = React.createRef();
  let onAddPost = () => {
    props.addPost();
  };
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
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
              onAddPost();
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
