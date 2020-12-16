import React from 'react'

const Pagination = ({booksPerPage,totalBooks,paginate}) => {

    const pageNumbers=[];
    const x = Math.ceil(totalBooks/booksPerPage)



    for (let i=1; i <= Math.ceil(totalBooks/booksPerPage) ; i++ ){
        pageNumbers.push(i)
    }

    // console.log(booksPerPage+"booksper page");
    // console.log(totalBooks+"total books");
    // console.log(pageNumbers + "pagenumbers");
    // console.log(x + "math ceil");


    return(
        <nav aria-label="Page navigation example">
            <ul className="pagination">  
                {pageNumbers.map(number=>(
                    <li key={number} className="page-item">
                        <a  onClick={()=>paginate(number)} href="#" className="page-link">{number}</a>
                        
                    </li>
                ))}
            </ul>
        </nav>
                  
       
       
    )

}

export default Pagination

// onClick={()=>paginate(number)}