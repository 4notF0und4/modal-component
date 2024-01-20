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
