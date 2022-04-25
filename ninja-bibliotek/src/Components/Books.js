import books from '../assets/books.json'
import { Link } from 'react-router-dom'

function ShowAllBooks() {
    const allBooks = books;
    const bookList = allBooks.map((book) => 
        <Link to={`/book/${book.id}`}><li>{book.title}<br/>{book.author}<br/><br/></li></Link>
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