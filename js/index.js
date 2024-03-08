document.addEventListener("DOMContentLoaded", () => {
  initialise();
});

function initialise() {
  fetch("http://localhost:3000/books")
    .then((res) => res.json())
    .then((data) => createBookList(data));
}

function createBookList(data) {
  const bookList = document.querySelector("#list");
  for (let i = 0; i < data.length; i++) {
    let li = document.createElement("li");
    li.textContent = data[i].title;
    li.addEventListener("click", () => {
      showBookDetails(data[i]);
    });
    bookList.append(li);
  }
}

function showBookDetails(data) {
  const show = document.querySelector("#show-panel");
  show.innerHTML = "";

  const img = document.createElement("img");
  img.setAttribute("src", data.img_url);

  const title = document.createElement("h1");
  title.textContent = data.title;

  const subtitle = document.createElement("h2");
  subtitle.textContent = data.subtitle;

  const author = document.createElement("h2");
  author.textContent = data.author;

  const description = document.createElement("p");
  description.textContent = data.description;

  const ul = document.createElement("ul");
  for (let i = 0; i < data.users.length; i++) {
    let li = document.createElement("li");
    li.textContent = data.users[i].username;
    console.log(data.users[i]);
    ul.append(li);
  }

  const button = document.createElement("button");
  button.textContent = "Like";

  show.append(img, title, subtitle, author, description, ul, button);
  //const users
}
