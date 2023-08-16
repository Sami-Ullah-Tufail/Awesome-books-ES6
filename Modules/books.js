const booklist = document.getElementById('bookShelf');
const author = document.getElementById('author');
const book = document.getElementById('title');
const addButton = document.getElementById('addButton');
const books = JSON.parse(localStorage.getItem('books')) || [];
/* eslint no-use-before-define: "error" */
/* eslint-disable */
function storage() {
  localStorage.setItem('books', JSON.stringify(books));
}
function addbooks() {
  const bookname = book.value.trim();
  const titler = author.value.trim();
  // console.log(bookname);
  // console.log(titler);
  if (bookname !== '' && titler !== '') {
    const newbook = { bookname, titler };
    books.push(newbook);
    storage();
    renderbooks();
    // console.log(books,newbook);
    book.value = '';
    author.value = '';
  }
}
function renderbooks() {
  booklist.innerHTML = '';
  books.forEach((newbook, index) => {
    const bookStorage = document.createElement('li');
    bookStorage.classList.add('book');
    bookStorage.textContent = `${newbook.bookname} by ${newbook.titler}`;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove-button');
    removeButton.addEventListener('click', () => {
      removeBook(index);
    });

    book_storage.appendChild(removeButton);
    booklist.appendChild(book_storage);
  });
}

function removeBook(index) {
  books.splice(index, 1);
  storage();
  renderbooks();
}

export { renderbooks, addbooks, addButton };