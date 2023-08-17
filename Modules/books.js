/* eslint-disable no-use-before-define */
const booklist = document.getElementById('bookShelf');
const author = document.getElementById('author');
const book = document.getElementById('title');
const addButton = document.getElementById('addButton');
const books = JSON.parse(localStorage.getItem('books')) || [];

function storage() {
  localStorage.setItem('books', JSON.stringify(books));
}

function removeBook(index) {
  books.splice(index, 1);
  storage();
  renderbooks();
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

    bookStorage.appendChild(removeButton);
    booklist.appendChild(bookStorage);
  });
}

function addbooks() {
  const bookname = book.value.trim();
  const titler = author.value.trim();
  if (bookname !== '' && titler !== '') {
    const newbook = { bookname, titler };
    books.push(newbook);
    storage();
    renderbooks();
    book.value = '';
    author.value = '';
  }
}

export { renderbooks, addbooks, addButton };
