books = [
  // {
  //   title: "Hello Utshuk Darling",
  //   author: "Utshuk Darling",
  //   pages: 69,
  //   read: "Read",
  // },
  // {
  //   title: "How to",
  //   author: "Hero Bro Utshuk",
  //   pages: 69,
  //   read: "Not Read",
  // },
];

let addBookForm = document.querySelector(".addBookForm");

author = addBookForm.querySelector("#author");
title = addBookForm.querySelector("#title");
page = document.querySelector("#page");
read = document.querySelector("#read");
notRead = document.querySelector("#notRead");

submitBtn = document
  .querySelector("#submitBtn")
  .addEventListener("click", addBookToLibrary);



function Book(title, author, page, read) {
  this.title = title;
  this.author = author;
  this.page = page;
  this.read = read;
}

function addBookToLibrary() {
  let ifRead = read.checked ? read.value : notRead.value;
  let NewBook = new Book(title.value, author.value, page.value, ifRead);
  books.push(NewBook);
}

console.log('apple')