// FUNCTION TO TOGGLE PASSWORD VISIBILITY
function togglePassword(){
  const passwordId = document.getElementById("password");
  const passwordIcon2 = document.querySelector(".passwordIcon");
  if(passwordId.type === "password"){
    passwordId.type = "text"; 
    passwordIcon2.classList.add("active");
  } else {
    passwordId.type = "password";
    passwordIcon2.classList.remove("active");
  }
}
// addEventListener for toggle password visibility
document.querySelector(".passwordIcon").addEventListener("click", () => {
  togglePassword()
})


// CODE FOR THE LOGIN BUTTON
// document.getElementById("js-login-button").addEventListener("click", () => {});

// JS FOR FISHING INFO

const loginButton = document.getElementById("js-login-button");

loginButton.addEventListener('click', () => {

const UsernameInfo = document.getElementById("username").value;
const PasswordInfo = document.getElementById("password").value;

// Object to hold login info 

const LoginInfo = {
  Username: UsernameInfo,
  Password: PasswordInfo
};
// CONVERT OBJECT TO STRING, SAVE IN LOCAL STORAGE AND LOG TO CONSOLE
localStorage.setItem("user", JSON.stringify(LoginInfo));

// GET ITEM SAVED IN LOCAL STORAGE AND LOG TO CONSOLE
const storedUser = localStorage.getItem("user");
JSON.parse(storedUser);
console.log(storedUser);

});

const SubmitButton = document.getElementById("password");

SubmitButton.addEventListener('keydown', (event) => {
  if (event.key === "Enter") {
    const UsernameInfo = document.getElementById("username").value;
    const PasswordInfo = document.getElementById("password").value;

    // Object to hold login info 

    const LoginInfo = {
      Username: UsernameInfo,
      Password: PasswordInfo
    };
    // CONVERT OBJECT TO STRING, SAVE IN LOCAL STORAGE AND LOG TO CONSOLE
    localStorage.setItem("user", JSON.stringify(LoginInfo));

    // GET ITEM SAVED IN LOCAL STORAGE AND LOG TO CONSOLE
    const storedUser = localStorage.getItem("user");
    JSON.parse(storedUser);
    console.log(storedUser);
  }
});














































