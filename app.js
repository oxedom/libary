const books = [{
        name: `The Little Prince`,
        author: 'Antoine de Saint-Exupéry',
        pages: 102
    },
    {
        name: `Linux for hackers`,
        author: 'OccupytheWeb',
        pages: 777
    },
    {
        name: `Steve Jobs autobiography`,
        author: 'Steve Jobs',
        pages: 333
    }
]
let contentArea = document.getElementById('content')

const appendBook = (book) => {
    let div = document.createElement("div")

    let textName = document.createTextNode(`Name: ${book.name}`)
    let textAuthor = document.createTextNode(`Author: ${book.author}`)
    let textPages = document.createTextNode(`Pages: ${book.pages}`)

    let pName = document.createElement("p")
    let pAuthor = document.createElement("p")
    let pPages = document.createElement("p")

    //Appends Text Nodes to pTag
    pName.appendChild(textName)
    pAuthor.appendChild(textAuthor)
    pPages.appendChild(textPages)

    //Appends All Ptags to DIV
    div.appendChild(pName);
    div.appendChild(pAuthor)
    div.appendChild(pPages)

    div.classList.add("card");
    //Inserts Div into the DOM
    contentArea.appendChild(div)
}

books.forEach(book => {
    appendBook(book)
})

//Book Class Maker
// function Book(name, author, pages) {
//     this.name = name;
//     this.author = author;
//     this.pages = pages
// }


 class Book {
    constructor(name, author, pages) {
        this.name = name;
        this.author = author;
        this.pages = pages
    }
 }


const addBtn = document.getElementById('add-btn')
const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    // Retrieve Form Data
    const formData = new FormData(e.target)
    const formProps = Object.fromEntries(formData)
    const newBook = new Book(formProps.name, formProps.author, formProps.pages)
    //Add new Book to Array of Books
    books.push(newBook)
    appendBook(newBook)
})