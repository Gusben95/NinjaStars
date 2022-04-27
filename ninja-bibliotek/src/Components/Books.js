import books from '../assets/books.json'
import { Link } from 'react-router-dom'

import './Books.css'

function ShowAllBooks() {
    const allBooks = books;
    const bookList = allBooks.map((book) => 
        <Link to={`/book/${book.id}`}><li className="oneBook">{book.title}<br/>{book.author}<br/></li></Link>
    );

    return (
        <section>
            <ul className="booksContainer">
                {bookList}
            </ul>
        </section>
    )

}

export default ShowAllBooks;