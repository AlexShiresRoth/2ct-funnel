const selectors = {
  popup: document.querySelector("#popup"),
  imgGrid: document.querySelector(".inner-grid"),
};

const state = {
  formData: {},
  date: "",
  imgArrLength: 0,
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

const getTimeFromNow = () => {
  if (document.querySelector(".date-display")) {
    const dateDisplay = document.querySelector(".date-display");
    const tenDaysFromNow = new Date(Date.now() + 10 * 24 * 60 * 60 * 1000);
    console.log(tenDaysFromNow.toString().split(" "));
    const splitDate = tenDaysFromNow.toString().split(" ");
    dateDisplay.textContent = splitDate.slice(0, 3).join(" ");
  }
};

//review images
const images = [
  "https://images.clickfunnels.com/a7/80d371190045639495fec081a37495/thumbnail_IMG_4829.jpg",
  "https://images.clickfunnels.com/bc/922299d27e4519b9858e5aa671c61d/thumbnail_IMG_4818.jpg",
  "https://images.clickfunnels.com/35/1997b3e0b74ed8a445b25d6eaaa65a/thumbnail_IMG_4805.jpg",
  "https://images.clickfunnels.com/39/d07695070a4fdf8d73d47fafe37eb9/thumbnail_IMG_4802.jpg",
  "https://images.clickfunnels.com/3f/f6360b9b214cddabdaf88c4ed5c160/thumbnail_IMG_4784.jpg",
  "https://images.clickfunnels.com/32/7b2c85c2784808b1dc5fdc9fe14355/thumbnail_IMG_4783.jpg",
  "https://images.clickfunnels.com/96/e8ca06e4cd4c22848011ce820701b8/thumbnail_IMG_4781.jpg",
  "https://images.clickfunnels.com/8e/9caadc371245d09ac2781b14a7df19/thumbnail_IMG_4779.jpg",
  "https://images.clickfunnels.com/c2/f59143c45446658e83ae532cd16301/thumbnail_IMG_4776.jpg",
  "https://images.clickfunnels.com/7c/ed1e2f5aca483c841f81f87f344f94/thumbnail_IMG_4775.jpg",
  "https://images.clickfunnels.com/76/3c907a4cc54775888c7a07ecec6de2/IMG_4832.jpg",
  "https://images.clickfunnels.com/ca/339fdaf06c4751887790c3fcc7ca6c/IMG_4829.jpg",
];

const loadImages = () => {
  state.imgArrLength = 6;
  const newImgs = images;
  return newImgs.slice(0, state.imgArrLength).forEach((img) => {
    const element = document.createElement("div");
    const imageElement = document.createElement("img");
    element.classList.add("col");
    element.classList.add("image-select");
    element.appendChild(imageElement);
    imageElement.src = img;
    selectors.imgGrid.appendChild(element);
  });
};

//fix this function to toggle between length instead of readding the images
const toggleImageArrayLength = () => {
  console.log([document.querySelectorAll(".image-select")]);
};
//expose functions
const main = () => {
  console.log("loaded");
  //
  getTimeFromNow();
  //load images on order page
  loadImages();
};

//load initial function call
if (typeof window !== "undefined") {
  window.addEventListener("load", () => main());
}
