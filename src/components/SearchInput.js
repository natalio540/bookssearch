import React,{ useState } from 'react'
import ShowBooks from './ShowBooks'
import Pagination from './Pagination'

const apikey = process.env.REACT_APP_BOOK_KEY

export default function SearchInput(){

    // states 
    const [inputSearch, setInput] = useState("");
    const [books, setBookResult] =useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [booksPerPage,setBooksPerPage] =useState(10);
    const [show, setShow] = useState(false)

    // fetch function to retrieve data
    async function fetchBooks (){
            const res = await fetch(
                `https://www.googleapis.com/books/v1/volumes?q=${inputSearch}&key=${apikey}&maxResults=40`
            )
            const data = await res.json()
            setBookResult(data.items)
            
        };
    
    function handleSearch(e){
        e.preventDefault();
        fetchBooks()
        // for ( let x in books){
        //     console.log(books[x].volumeInfo.imageLinks);
        // }
        // console.log(books);
       
    };    

// Get current books
const indexOfLastBook = currentPage *  booksPerPage;
const indexOfFirstBook = indexOfLastBook - booksPerPage;
const currentBook = books.slice(indexOfFirstBook,indexOfLastBook)
const paginate = pageNumber => setCurrentPage(pageNumber)
console.log(currentBook);

// retorno de html------------------
    return(
        <div className="container">
            <h2>search book</h2>
           < p>libro: {inputSearch}</p> 
           <form onSubmit={handleSearch} className="form-group" > 
               <input placeholder="Title, Author"
               className="form-control "
               
                type="text"
                value={inputSearch}
                onChange={e=>{setInput(e.target.value)}}/>
                <button type= "submit" 
                className="btn btn-primary"
                onClick={() => setShow(true)}
                > Search</button>
           </form>

           {
               show ? (<ShowBooks books={currentBook} /> ) : ( <div>no mostres nada</div> )
           }
           
           <Pagination 
            booksPerPage={booksPerPage}
            totalBooks={books.length}  
            paginate={paginate}/> 

           
            
                
           


        </div>


    )
}




{/* <div className="row row-cols-auto">
                        <h3>{item.volumeInfo.title}</h3>
                        <img src={item.volumeInfo.imageLinks.thumbnail} alt={item.volumeInfo.title} key={index} />
                      <p>{item.volumeInfo.description}</p> 
                    </div> */}




                    // <div class="card mb-3" style={{maxWidth: "540px;"}} key={index} >
                    // <div className="row g-0">
                    //     <div className="col-md-4">
                    //     <img src={item.volumeInfo.imageLinks.thumbnail} alt={item.volumeInfo.title} />
                    //     </div>
                    //     <div className="col-md-8">
                    //     <div className="card-body">
                    //         <h5 className="card-title">{item.volumeInfo.title}</h5>
                    //         <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    //         <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    //     </div>
                    //     </div>
                    // </div>
                    // </div>