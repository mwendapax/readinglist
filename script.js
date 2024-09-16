const body = document.querySelector('body');
const addCard = document.querySelector('.add-button');
const shelve = document.querySelector('.main-container');

const myLibrary = [];


class Book {
    constructor(title, author, pages, status) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.status = status;
    }

    card () {
        let card = document.createElement('div');
        let bookDetail = document.createElement('div');
        let bookStatus = document.createElement('div');
    
        card.classList.add('book-card');
        bookDetail.classList.add('book-detail');
        bookStatus.classList.add('status');
    
        let bookTitleSec = document.createElement('div');
        bookTitleSec.classList.add('title-sec');
    
        let bookSecTitle = document.createElement('div');
        bookSecTitle.classList.add('sec-title');
        bookSecTitle.textContent = 'Title';
    
        let bookTitle = document.createElement('div');
        bookTitle.classList.add('title');
        bookTitle.textContent = this.title;
    
        bookTitleSec.appendChild(bookSecTitle);
        bookTitleSec.appendChild(bookTitle);
        bookDetail.appendChild(bookTitleSec);
    
        let bookAuthorSec = document.createElement('div');
        bookAuthorSec.classList.add('author-sec');
    
        let bookSecAuthor = document.createElement('div');
        bookSecAuthor.classList.add('sec-title');
        bookSecAuthor.textContent = 'Author';
    
    
        let bookAuthor = document.createElement('div');
        bookAuthor.classList.add('author');
        bookAuthor.textContent = this.author;
    
        bookAuthorSec.appendChild(bookSecAuthor);
        bookAuthorSec.appendChild(bookAuthor);
        bookDetail.appendChild(bookAuthorSec);
    
        let bookPagesSec = document.createElement('div');
        bookPagesSec.classList.add('pgs-sec');
    
        let bookSecPages = document.createElement('div');
        bookSecPages.classList.add('sec-title');
        bookSecPages.textContent = 'Pages';
    
        let bookPageNumbers = document.createElement('div');
        bookPageNumbers.classList.add('pgs');
        bookPageNumbers.textContent = this.pages;
    
        bookPagesSec.appendChild(bookSecPages);
        bookPagesSec.appendChild(bookPageNumbers);
        bookDetail.appendChild(bookPagesSec);
    
        let bookReadStatus = document.createElement('div');
        bookReadStatus.classList.add('read-status');
    
        if (this.status === 'read') {
            bookReadStatus.classList.add('read');
            bookReadStatus.textContent = 'Have Read';
        }else {
            bookReadStatus.classList.add('unread');
            bookReadStatus.textContent = 'To Read';
        }

        bookReadStatus.addEventListener('click', function () {
            bookReadStatus.classList.toggle('read');
            bookReadStatus.classList.toggle('unread');
            if (bookReadStatus.textContent === 'To Read') {
                bookReadStatus.textContent = 'Have Read';
            }else {
                bookReadStatus.textContent = 'To Read';
            }
        })
    
        let removeBook = document.createElement('div');
        removeBook.classList.add('remove-book');
        removeBook.textContent = 'Remove';
    
        removeBook.addEventListener('click', () => {
            shelve.removeChild(card);
        });
    
        bookStatus.appendChild(bookReadStatus);
        bookStatus.appendChild(removeBook);
    
    
        card.appendChild(bookDetail);
        card.appendChild(bookStatus);
        shelve.appendChild(card);
    }
}


function addBookToLibrary (item) {
    myLibrary.push(item);

    for (item of myLibrary) {
        if (item == myLibrary[myLibrary.length -1]) {
            item.card();
        }
    }
}

let i = 0;


addCard.addEventListener('click', () => {
    if (i === 0) {
        i = 1;

    body.setAttribute('style', 'grid-template-rows: 10% 1fr 50%');

    let formSection = document.createElement('div');
    formSection.classList.add('form-sec');

    let form = document.createElement('form');
    form.setAttribute('action', '#');
    form.setAttribute('method', 'post');

    let formItems = document.createElement('div');
    formItems.classList.add('form-items');

    let formHeader = document.createElement('h2');
    formHeader.textContent = 'Add a new book to shelf!';

    let authorTitle = document.createElement('div');
    authorTitle.classList.add('author-title');

    let title = document.createElement('div');
    title.classList.add('title');

    let titleLabel = document.createElement('label');
    titleLabel.setAttribute('for', 'title');
    titleLabel.textContent = 'Title';

    let titleSpan = document.createElement('span');
    titleSpan.setAttribute('aria-label', 'required');
    titleSpan.textContent = '* :';

    titleLabel.appendChild(titleSpan);

    let titleInput = document.createElement('input');
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('name', 'book_title');
    titleInput.setAttribute('id', 'title');
    titleInput.setAttribute('placeholder', 'First among equals');
    titleInput.setAttribute('required', '');

    title.appendChild(titleLabel);
    title.appendChild(titleInput);

    let author = document.createElement('div');
    author.classList.add('author');

    let authorLabel = document.createElement('label');
    authorLabel.setAttribute('for', 'author');
    authorLabel.textContent ='Author';

    let authorSpan = document.createElement('span');
    authorSpan.setAttribute('aria-label', 'required');
    authorSpan.textContent = '* :';

    authorLabel.appendChild(authorSpan);

    let authorInput = document.createElement('input');
    authorInput.setAttribute('type', 'text');
    authorInput.setAttribute('name', 'book_author');
    authorInput.setAttribute('id', 'author');
    authorInput.setAttribute('placeholder', 'Jeffrey Archer');
    authorInput.setAttribute('required', '');


    author.appendChild(authorLabel);
    author.appendChild(authorInput);

    authorTitle.appendChild(title);
    authorTitle.appendChild(author);
    
    formItems.appendChild(formHeader);
    formItems.appendChild(authorTitle);

    let bookPages = document.createElement('div');
    bookPages.classList.add('pages');

    let pagesLabel = document.createElement('label');
    pagesLabel.setAttribute('for', 'pages');
    pagesLabel.textContent = 'Number of pages :';

    let pagesInput = document.createElement('input');
    pagesInput.setAttribute('type', 'number');
    pagesInput.setAttribute('name', 'book_pages');
    pagesInput.setAttribute('id', 'pages');

    bookPages.appendChild(pagesLabel);
    bookPages.appendChild(pagesInput);
    formItems.appendChild(bookPages);

    let fieldset = document.createElement('fieldset');
    let legend = document.createElement('legend');
    legend.textContent = 'Read Status';

    let fieldInput = document.createElement('input');
    fieldInput.setAttribute('type', 'radio');
    fieldInput.setAttribute('name', 'read_status');
    fieldInput.addEventListener('click', () => {
        fieldInput.setAttribute('value', 'read');
    })
    fieldInput.setAttribute('id', 'read');

    let fieldLabel = document.createElement('label');
    fieldLabel.setAttribute('for', 'read');
    fieldLabel.textContent = 'Read';

    let unreadInput = document.createElement('input');
    unreadInput.setAttribute('type', 'radio');
    unreadInput.setAttribute('name', 'read_status');
    unreadInput.setAttribute('value', 'unread');
    unreadInput.setAttribute('id', 'unread');

    let unreadLabel = document.createElement('label');
    unreadLabel.setAttribute('for', 'unread');
    unreadLabel.textContent = 'Yet to read';

    fieldset.appendChild(legend);
    fieldset.appendChild(fieldInput);
    fieldset.appendChild(fieldLabel);
    fieldset.appendChild(unreadInput);
    fieldset.appendChild(unreadLabel);
    formItems.appendChild(fieldset);

    form.appendChild(formItems);

    let submitButton = document.createElement('div');
    submitButton.classList.add('submit-button');

    let btnSubmit = document.createElement('button');
    btnSubmit.setAttribute('type',  'button');
    btnSubmit.classList.add('btn-submit');
    btnSubmit.textContent = 'Add';

    submitButton.appendChild(btnSubmit);

    form.appendChild(submitButton);
    formSection.appendChild(form);
    body.appendChild(formSection);

    submitButton.addEventListener('click', () => {
        let authorDiv = document.querySelector('#author');
        let titleDiv = document.querySelector('#title');
        let pgsDiv = document.querySelector('#pages');
        let readStatus = document.querySelector('#read');

        let book = new Book(titleDiv.value, authorDiv.value, pgsDiv.value, readStatus.value);
        addBookToLibrary(book);

        body.removeChild(formSection);
        body.setAttribute('style', 'grid-template-rows: 10% 1fr');

        i = 0;
    })
} else {
    alert('Please use the current form');
}

});


