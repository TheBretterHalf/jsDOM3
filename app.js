var bookList = document.querySelector('#book-list');

console.log('booklist next sibling is:', bookList.nextSibling)
console.log('booklist next sibling is:', bookList.nextElementSibling)

console.log('booklist next sibling is:', bookList.previousSibling)
console.log('booklist next sibling is:', bookList.previousElementSibling)

bookList.previousElementSibling.querySelector('p').innerHTML+='<br>Too Cool For Everyone Else'


// const bookList = document.querySelector('#book-list');

// console.log('#book-list next sibling:', bookList.nextSibling);
// console.log('#book-list next element sibling:', bookList.nextElementSibling);
// console.log('#book-list previous sibling:', bookList.previousSibling);
// console.log('#book-list previous element sibling:', bookList.previousElementSibling);

// bookList.previousElementSibling.querySelector('p').innerHTML += '<br />Too cool for everyone else!';
