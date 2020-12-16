
import React, {useState} from 'react'
import Modal from '../components/Modal'


export default function ShowBooks(books){
    // console.log(books.books);
    // console.log(books.books[0].volumeInfo.imageLinks);
    // {item.volumeInfo.imageLinks.thumbnail}
  const [modal,setModal] = useState(false)
  const [allbooks,setallbooks] =useState(books)

  // console.log(allbooks);

  function showmodal(){
    setModal(true)
  }

    return(  

        
    <div className="books-container" >
            {
            books.books.map((item,index)=>(
                     <div className="card-container"  key={index}>
                         <img src={item.volumeInfo.imageLinks.thumbnail}
                          alt={item.volumeInfo.title} />
                          <div className="text-overlay">
                          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            {index}
                          </button>
                            <p  className="texto" 
                           
                            >Description</p> 
                            
                            <a className="texto" target="_blank" href={item.volumeInfo.previewLink}>Preview</a>
                            {/* <Modal modalTitle= {item.volumeInfo.title} modalText = {item.volumeInfo.description} />  */}
                          </div>
                         

                          
                          <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h5 className="modal-title" id="exampleModalLabel">{item.volumeInfo.title}</h5>
                                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                  texto
                                </div>
                                <div className="modal-footer">
                                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                  <button type="button" className="btn btn-primary">Save changes</button>
                                </div>
                              </div>
                            </div>
                          </div>







                     </div>
                        ))   
                     
                          
            } 
             {/* <Modal modalTitle= {item.volumeInfo.title} modalText = {item.volumeInfo.description} />   */}






              
                          

             




             

           
           

    </div>

    )

    

}


// <!-- Button trigger modal -->
// <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
//   Launch demo modal
// </button>

// <!-- Modal -->
// <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//   <div class="modal-dialog">
//     <div class="modal-content">
//       <div class="modal-header">
//         <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
//         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//       </div>
//       <div class="modal-body">
//         ...
//       </div>
//       <div class="modal-footer">
//         <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//         <button type="button" class="btn btn-primary">Save changes</button>
//       </div>
//     </div>
//   </div>
// </div>
