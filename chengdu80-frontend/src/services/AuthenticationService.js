import users from "../data/users";

function authenticate(username, password) {
  for (let user of users) {
    if (user.username === username && user.password === password) {
      return user;
    }
  }
  return null;
}

function isLoggedIn() {
  return JSON.parse(localStorage.getItem("user")) !== null;
}

function getLoggedInUser() {
  return JSON.parse(localStorage.getItem("user"));
}

function resetUser() {
  localStorage.removeItem("user");
}

function setUser(user) {
  localStorage.setItem("user", JSON.stringify(user));
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  authenticate,
  isLoggedIn,
  getLoggedInUser,
  resetUser,
  setUser,
};
