var books = document.querySelectorAll('#book-list li .name');

Array.from(books).forEach(function(book){
   book.textContent+=' [Book Title]'
});

var bookList = document.querySelector('#book-list');
bookList.innerHTML='<h2>Books and More Books</h2>'
bookList.innerHTML+='<p>This is how you add HtmL</p>'



// const books = document.querySelectorAll('#book-list li .name');

// Array.from(books).forEach(function(book){
//   book.textContent += ' (Book title)';
// });

// const bookList = document.querySelector('#book-list');
// bookList.innerHTML = '<h2>Books and more books...</h2>';
// bookList.innerHTML += '<p>This is how you add HTML content</p>';
