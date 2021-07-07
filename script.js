books = [
  {
    title: "Hello Utshuk Darling",
    author: "Utshuk Darling",
    pages: 69,
    read: "Read",
  },
  {
    title: "How to",
    author: "Hero Bro Utshuk",
    pages: 69,
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

function display(books) {
  books.forEach(eachBook => {
    
  })
}

function addBookToLibrary() {
  let ifRead = read.checked ? read.value : notRead.value;
  let NewBook = new Book(title.value, author.value, page.value, ifRead);
  books.push(NewBook);

  author.value = "";
  title.value = "";
  page.value = "";
}

display(books)