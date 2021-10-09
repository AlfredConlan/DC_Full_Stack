// FOR TESTING LOCALLY, USE "http://localhost:3300" IN THE FETCH
// WHEN DEPLOYING TO HEROKU, CHANGE BACK TO "https://cycling4life.herokuapp.com" IN THE FETCH

const registerUser1 = function () {
  fetch("https://cycling4life.herokuapp.com/registrationAttempt", {
    method: "POST",
    headers: {
      // Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user_name: document.getElementById("user_name").value,
      first_name: document.getElementById("first_name").value,
      last_name: document.getElementById("last_name").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
      skill_level: document.getElementById("skill_level").value,
    }),
  })
    .then((res) => res.json())
    .then((res) => console.log(res));
};

const loginUser1 = function () {
  fetch("https://cycling4life.herokuapp.com/loginAttempt", {
    method: "POST",
    headers: {
      // Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user_name: document.getElementById("user_name").value,
      password: document.getElementById("password").value,
    }),
  })
    .then((res) => res.json())
    .then((res) => console.log(res));
};
