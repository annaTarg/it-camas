const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
let initialState = {
  users: [
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
  ],
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS: {
      return { ...state, users: action.users };
    }

    default:
      return state;
  }
};
export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });
export default userReducer;
