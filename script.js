let ageEl = document.querySelector("#age");
let nameEl = document.querySelector("#name");
let buttonEl = document.querySelector("#btn");

buttonEl.addEventListener("click", () => {
  if (ageEl.value.trim().length !== 0 && nameEl.value.trim().length !== 0) {
    let age = parseInt(ageEl.value.trim());
    let name = nameEl.value.trim();

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (age > 18) {
          resolve(`Welcome, ${name} . You can vote.`);
        } else {
          reject("Oh sorry . You aren't old enough.");
        }
      }, 4000);
    })
      .then((res) => alert(res))
      .catch((rej) => alert(rej));
  } else {
    alert("Please enter valid details.");
  }
});
