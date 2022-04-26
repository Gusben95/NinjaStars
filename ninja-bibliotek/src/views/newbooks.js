import { useNavigate } from "react-router-dom"
import  { useRef } from "react";
import currentbooks from "../assets/books.json"
import ShowAllBooks from "../Components/Books";
export default function Error() {
    
    const navigate = useNavigate();
    function backTomenu(){
      navigate(-1);
        };

function addBook(){
 const newbook = {
     id: newId,
     title: titleinput.current.value ,
     author: authorinput.current.value ,
     genre: genreinput.current.value,
     lost: false,
     late: false, 
     loan: false,
     place: placeinput.current.value,
     library:libraryinput.current.value,
     amount: amountinput.current.value, 
 }
 console.log(newbook);
  currentbooks.push(newbook);
}
const newId = Math.floor((Math.random() * 100000000) + 1);;
const titleinput = useRef(null)
const authorinput = useRef(null)
const genreinput = useRef(null)
const placeinput = useRef(null)
const libraryinput = useRef(null)
const amountinput = useRef(null)
    return (
      <section id="Booksection">
        <h1 id="addBook">Add a new book</h1>
              <input id="Title" placeholder="Input Title" ref = {titleinput}></input> <br></br>
              <input id="Author" placeholder="Input Author" ref = {authorinput}></input> <br></br>
              <input id="Genre" placeholder="Input Genre"ref = {genreinput}></input> <br></br>
              <input id="Place" placeholder="Input Place" ref = { placeinput}></input> <br></br>
              <input id="Library" placeholder="Input Library" ref = {libraryinput}></input> <br></br>
              <input id="Amount" placeholder="Input Amount"ref = {amountinput} ></input> <br></br>
        <button id = "takeMeBack" onClick={backTomenu}> TAKE ME BACK </button>
        
        
        <div id="preview">
         <p ref={titleinput}></p>
         <p ref={authorinput}></p>
         <p ref={genreinput}></p>
         <p ref={placeinput}></p>
         <p ref={libraryinput}></p>
         <p ref={amountinput}></p>
         <button id = "test" onClick={addBook}> add book </button>
        </div>




      </section>
        
    );
  }