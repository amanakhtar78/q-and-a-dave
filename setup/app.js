const questionBtn = document.querySelectorAll(".question-btn");
const questionTexts = document.querySelectorAll(".question-text");

// questionBtn.forEach((btn, index) => {
//   btn.addEventListener("click", () => {
//     questionText.forEach((text, i) => {
//       if (i !== index) {
//         text.classList.remove("show-text");
//       }
//     });

//     questionText[index].classList.toggle("show-text");
//   });
// });

// questionBtn.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     const qtn = e.currentTarget.parentElement.parentElement;

//     qtn.classList.toggle("show-text");
//   });
// });
const questions = document.querySelectorAll(".question");

questions.forEach((btn) => {
  const newBtn = btn.querySelector(".question-btn");

  newBtn.addEventListener("click", () => {
    questions.forEach((item) => {
      if (item !== btn) {
        item.classList.remove("show-text");
      }
    });
    btn.classList.toggle("show-text");
  });
});
