import './App.css';
import { Routes, Route } from 'react-router-dom';


import ShowAllBooks from './Components/Books';
import SelectedBook from './Components/SelectedBook'
import NewBooks from './views/newbooks.js'

function App() {
  return (
    <div className="App">
      <header>
        <h1>Detta är Örkelljunga bibliotek</h1>
      </header>
      <Routes>
        <Route path="/newbooks" element={<NewBooks/>} ></Route>
        <Route path="/" element={<ShowAllBooks />} />
        <Route path="/book/:id" element={<SelectedBook />} />
      </Routes>
    </div>
  );
}

export default App;
