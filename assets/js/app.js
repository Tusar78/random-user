// Base URL
const BASE_URL = "https://randomuser.me";

async function randomUser() {
  const res = await fetch(`${BASE_URL}/api`);
  const data = await res.json();
  displayUser(data.results);
  // userNamed(data.results);
  deathOfBirth(data.results);
}
randomUser();

const displayUser = (users) => {
  const userPhoto = document.getElementById("user-photo");
  const userSub = document.getElementById("user-sub");
  const userName = document.getElementById("user-name");
  for (const user of users) {
    userPhoto.src = user.picture.large;
    userSub.innerText = "Hi, I am";
    userName.innerText = `${user.name.first} ${user.name.last}`;
  }
};

// Create userName
const userNamed = (users) => {
  const btnName = document.getElementById("btn-name");
  const userSub = document.getElementById("user-sub");
  const userName = document.getElementById("user-name");
  btnName.addEventListener("click", function () {
    for (const user of users) {
      userSub.innerText = "Hi, I am";
      userName.innerText = `${user.name.first} ${user.name.last}`;
    }
  });
};

// Create death of birth
const deathOfBirth = (users) => {
  const birthdayBtn = document.getElementById("btn-birth");
  const userSub = document.getElementById("user-sub");
  const userName = document.getElementById("user-name");
  birthdayBtn.addEventListener("click", function () {
    for (const user of users) {
      userSub.innerText = "My birthday is";
      userName.innerText = `${user.dob.date.slice(0, 10)}`;
    }
  });
};
