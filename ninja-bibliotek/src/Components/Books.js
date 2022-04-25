import books from '../assets/books.json'
import { Link } from 'react-router-dom'

function ShowAllBooks() {
    const allBooks = books;
    const bookList = allBooks.map((book) => 
        <li>{book.title}<br/>{book.author}<br/><br/></li>
    );

    return (
        <section>
            <h2>Alla våra böcker</h2>
            <ul>
                {bookList}
            </ul>
        </section>
    )

}

export default ShowAllBooks;