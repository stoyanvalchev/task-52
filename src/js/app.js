// import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });

  let add_article = () => {
    const articleTemplate = document.createElement("article");
    articleTemplate.classList.add("message");
    articleTemplate.innerHTML = "pravq si proba";
    document.body.appendChild(articleTemplate);
  };

  // var flag = true;

  // if (flag == true) {
  document.body.addEventListener(
    "click",
    (event) => {
      event.preventDefault();

      let counter = 5;
      while (counter != 0) {
        add_article();
        counter--;
      }
      // flag = false;
    },
    { once: true }
  );
  // }
});
