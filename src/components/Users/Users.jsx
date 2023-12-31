import React, { useEffect } from "react";
import styles from "./users.module.css";

const users = [
  {
    id: 1,
    photoUrl:
      "https://ichef.bbci.co.uk/news/1024/cpsprodpb/06DB/production/_130055710_mishov2.png",
    followed: false,
    fullName: "Dmitry",
    status: "I am boss",
    location: { city: "Minsk", country: "Belarus" },
  },
  {
    id: 2,
    photoUrl:
      "https://ichef.bbci.co.uk/news/1024/cpsprodpb/06DB/production/_130055710_mishov2.png",
    followed: true,
    fullName: "Sasha",
    status: "I am boss too",
    location: { city: "Moscow", country: "Russia" },
  },
  {
    id: 3,
    photoUrl:
      "https://ichef.bbci.co.uk/news/1024/cpsprodpb/06DB/production/_130055710_mishov2.png",
    followed: false,
    fullName: "Adrey ",
    status: "I am boss too",
    location: { city: "Kiev", country: "Ukraina" },
  },
];

let Users = (props) => {
  useEffect(() => {
    if (props.users.length === 0) {
      props.setUsers(users)
    }
  }, [props])

  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.photoUrl} className={styles.userPhoto} alt="userPhoto" />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};
export default Users;
