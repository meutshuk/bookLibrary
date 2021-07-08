books = [
  {
    title: "Hello Utshuk Darling",
    author: "Utshuk Darling",
    page: 69,
    read: "Read",
  },
  {
    title: "How to",
    author: "Hero Bro Utshuk",
    page: 69,
    read: "Not Read",
  },
];
const displayArea = document.querySelector(".displayArea");

const addBookForm = document.querySelector(".addBookForm");

let addBookBtn = document.querySelector(".addBookBtn");
addBookBtn.addEventListener("click", () => {
  if (addBookBtn.innerText == "Add Books") {
    addBookForm.style.display = "block";
    addBookBtn.innerText = "Close";
  } else {
    addBookForm.style.display = "";
    addBookBtn.innerText = "Add Books";
  }
  addBookBtn.innerText =
    addBookForm.style.display == "block" ? "Close" : "Add Books";
});

const author = addBookForm.querySelector("#author");
const title = addBookForm.querySelector("#title");
const page = document.querySelector("#page");
const read = document.querySelector("#read");
const notRead = document.querySelector("#notRead");

const submitBtn = document.querySelector("#submitBtn");
submitBtn.addEventListener("click", addBookToLibrary);

class Book {
  constructor(title, author, page, read) {
    this.title = title;
    this.author = author;
    this.page = page;
    this.read = read;
  }
}

function display(boooks) {
  displayArea.innerHTML = "";
  boooks.forEach((book) => {
    let cardDiv = document.createElement("div");
    let authorH3 = document.createElement("h3");
    let titleH3 = document.createElement("h3");
    let pageH3 = document.createElement("h3");
    let readBtn = document.createElement("button");
    let removeBtn = document.createElement("button");

    //cardDiv.innerText = "";

    removeBtn.className = "removeBtn";
    cardDiv.classList = "eachGrid";

    authorH3.innerText = book.author;
    titleH3.innerText = book.title;
    pageH3.innerText = book.page;
    readBtn.innerText = book.read;

    readBtn.className = book.read == "Read" ? "readBook" : "didntReadBook";

    removeBtn.innerText = "Remove";

    cardDiv.appendChild(titleH3);
    cardDiv.appendChild(authorH3);
    cardDiv.appendChild(pageH3);
    cardDiv.appendChild(readBtn);
    cardDiv.appendChild(removeBtn);

    displayArea.appendChild(cardDiv);

    readBtn.addEventListener("click", (e) => {
      books.forEach((a) => {
        if (a.title == e.path[1].firstChild.innerText) {
          a.read = a.read == "Read" ? "Not Read" : "Read";
        }
      });

      readBtn.className =
        readBtn.innerText == "Read" ? "didntReadBook" : "readBook";
      display(books);
      //readBtn.innerText = readBtn.innerText == "Read" ? "Not Read" : "Read";
    });

    removeButton = document.querySelectorAll(".removeBtn");
    removeButton.forEach((btn) => btn.addEventListener("click", removeItem));
  });
}

function removeItem(e) {
  books = books.filter((book) => book.title !== e.path[1].firstChild.innerText);
  display(books);
}

function addBookToLibrary() {
  let ifRead = read.checked ? read.value : notRead.value;
  let NewBook = new Book(title.value, author.value, page.value, ifRead);
  books.push(NewBook);

  author.value = "";
  title.value = "";
  page.value = "";
  addBookForm.style.display = "";
  display(books);
}

display(books);
