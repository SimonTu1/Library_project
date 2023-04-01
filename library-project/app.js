//DOM
const addBtn = document.querySelector(".add-book");
const form = document.getElementById("book-info");
const submit = document.getElementById("submit");
const deleteBtn = document.querySelector(".delete-btn");
// const bottomContainer = document.getElementById("book-section");

//////////////////////////////////////////
let myLibrary = [];

class Book {
  constructor(title, author, page, status) {
    this.title = title;
    this.author = author;
    this.page = page;
    this.status = status;
  }
}

Book.prototype.toggleRead = function () {
  this.status = !this.status;
};

function toggleRead(index) {
  myLibrary[index].toggleRead();
  console.log(myLibrary[index]);
  displayBook();
}

function clear(title, author, pages, status) {
  title = document.getElementById("title").value = "";
  author = document.getElementById("author").value = "";
  pages = document.getElementById("pages").value = "";
  status = document.getElementById("read").checked = false;
}
function addBookToLibrary() {
  // do stuff here
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("read").checked;
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

function removeBook(index) {
  console.log(index);
  myLibrary.splice(index, 1);
  displayBook();
}

function displayBook() {
  let myLibraryEl = document.getElementById("book-section");
  myLibraryEl.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    console.log(book);
    let bookEl = document.createElement("div");
    bookEl.classList.add("book-item");
    bookEl.innerHTML = `<h2>${book.title}</h2>
                        <p>${book.author}</p>
                        <p>${book.page}</p>
                        <p>${
                          book.status === true
                            ? '<label><input type="radio" checked/> Read</label>'
                            : '<label><input type="radio" /> Not read </label>'
                        }
                        <button class="delete-btn" onclick="removeBook(${i})">Delete</button>
                        <button class="edit" onclick="toggleRead(${i})">Status</button>
                        
                         `;

    myLibraryEl.appendChild(bookEl);
  }
}

//event listener
addBtn.addEventListener("click", function () {
  const form = document.getElementById("book-info");
  if (form.style.visibility === "hidden") {
    form.style.visibility = "visible";

    clear();
  } else {
    form.style.visibility = "hidden";
  }
});

submit.addEventListener("click", function (e) {
  e.preventDefault();

  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  // let read = document.getElementById("read").checked;

  if (title === "" && author === "" && pages === "") {
    alert("Please fill the form correctly");
  } else {
    addBookToLibrary();
    displayBook();
    clear();
  }
});
