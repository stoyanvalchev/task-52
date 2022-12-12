import "../scss/app.scss";

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

  document.body.addEventListener("click", (event) => {
    event.preventDefault();

    let flag = 6;
    while (flag != 0) {
      add_article();
      flag--;
    }
  });
});
