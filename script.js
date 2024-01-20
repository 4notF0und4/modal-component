// const arrow = (a, b) => a + b; // arrow funksyasinin sade numunesi
// console.log(arrow(9, 5));
// /* --------------------------------------------------- */

// const numbers1 = [1, 2, 3]; // "..."-spread operatoru iki arrayi bir-biriyle birleshdirir
// const numbers2 = [4, 5, 6];

// const concatNumbers = [...numbers1, ...numbers2];

// document.write(concatNumbers);
// /* --------------------------------------------------- */

// const ededler = [12, 16, 56, 63, 99]; //subtract emeliyyati  arrayin ichindeki elementlerin uzerinde riyazi emeller aparir
// document.getElementById("demo").innerHTML = ededler.reduce(myFunc);

// function myFunc(total, num) {
//   return total + num; //burada + yazdim deye topladi - yazsaydim cixacaqdi soldan saga cavab 246 oldu
// }

const popBtn = document.getElementById("openPopUp");
const wrapper = document.getElementById("wrapper");
const cancelBtn = document.getElementById("cancelBtn");

popBtn.addEventListener("click", () => {
  wrapper.style.display = "flex";
});

cancelBtn.addEventListener("click", () => {
  wrapper.style.display = "none";
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    wrapper.style.display = "none";
  }
});
