import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

import books from '../assets/books.json'

function SelectedBook() {
    const { id } = useParams();
    const [selectedBook, setSelectedBook] = useState({});
    const navigate = useNavigate();

    useEffect(() => { 
        const book = books.filter((book) => {
            if(book.id === parseInt(id)) {
                return book;
            }
        });
        console.log('Din bok: ', book);
        setSelectedBook(book[0])
    }, [id])

    return(
        <section>
            {selectedBook.title}<br/>
            {selectedBook.author}<br/>
            {selectedBook.amount}<br/>
            {selectedBook.library}<br/>
            {selectedBook.place}<br/>
            <button onClick={() => { navigate('/')}}>Tillbaka till startsidan</button>
        </section>
    )
}

export default SelectedBook;