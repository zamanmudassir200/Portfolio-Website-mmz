let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let copyDiv = document.querySelector(".copyDiv");
let rgb1 = "#fff";
let rgb2 = "#000";
const hexValues = () => {
  let myhexvalues = "0123456789abcedf";
  let colors = "#";
  for (let i = 0; i < 6; i++) {
    colors = colors + myhexvalues[Math.floor(Math.random() * 16)];
  }
  return colors;
};

const handlebtn1 = () => {
  rgb1 = hexValues();
  console.log(rgb1);
  document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
  copyDiv.textContent = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`;
  btn1.innerText = rgb1;
};
const handlebtn2 = () => {
  rgb2 = hexValues();
  console.log(rgb2);
  document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
  copyDiv.textContent = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`;
  btn2.innerText = rgb2;
};
btn1.addEventListener("click", handlebtn1);
btn2.addEventListener("click", handlebtn2);
copyDiv.addEventListener("click", () => {
  navigator.clipboard.writeText(copyDiv.textContent);
  alert("Copied to Clipboard");
});
