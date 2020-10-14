const selectors = {
  popup: document.querySelector("#popup"),
};

const state = {
  formData: {},
};

//toggle email popup on sales.html

const togglePopup = () => selectors.popup.classList.toggle("hidden");

const onChange = (e) => {
  state.formData = { [e.target.name]: e.target.value };
};

const formSubmit = (e, next) => {
  e.preventDefault();
  window.localStorage.setItem("userEmail", state.formData.email);
  if (next) return (window.location = next);
};

//expose functions
const main = () => {
  console.log("loaded");
};

//load initial function call
if (typeof window !== "undefined") {
  window.addEventListener("load", () => main());
}
