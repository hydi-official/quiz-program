import React, { useState } from 'react'
import logo from '../../assets/images/logo.jpg'
import Modal from 'react-modal';



const Testimonial = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  const openModal = (data) => {
   setSelectedData(data);
     setIsModalOpen(true);
  }

  const closeModal = () =>{
    setSelectedData(null);
    setIsModalOpen(false);
  }

  const data = [
    {id:1, image: logo ,name:"Nana", description:"jhbdvhbjhjbdvjhbvhbdjjh"} , 
    {id:2, image: logo ,name:"Kojo", description:"jhbdvhbjhjbdvjhbvhbdjjh"} , 
    {id:3, image: logo ,name:"Naa", description:"jhbdvhbjhjbdvjhbvhbdjjh"} , 

];

const modalStyles = {
  content: {
    width: '80%', // Adjust width for large screens
    maxWidth: '480px', // Set maximum width for smaller screens
    margin: 'auto', // Center the modal horizontally
    maxHeight: '80%', // Adjust maximum height for mobile
    overflowY: 'auto', // Enable scrolling if content overflows vertically
    borderRadius: '8px', // Add rounded corners
    padding: '20px', // Add padding around the content
  },
  overlay: {
    backgroundColor: 'primaryColor', // Adjust overlay color and opacity
  },
};



  return (
    <>
    <div className=' mt-8'>
    <h1 className='justify-center py-8 flex flex-col md:flex-row text-lg'>Testimonials</h1>
    <div className='flex flex-col items-center md:flex-row mt-4 justify-around mb-8 '>

    
     
            {data.map((data) =>
            <div key={data.id}  >
              <div className='bg-[#63828f] rounded-md px-5 py-5' onClick={() => openModal(data)}>
             <img className='mt-5 rounded-full shadow-md w-20 h-20 ml-12 justify-center ' src={data.image}/>
            <div className="mt-5 mb-5 font-semibold text-center">{data.name}</div>
            <div className='mt-3 mb-5  text-center'>{data.description}</div>
            </div>
            </div>
            )}



    </div>

    <Modal isOpen={isModalOpen} onRequestClose={closeModal} style={modalStyles}>
              {selectedData && (
                <>
                <div className='flex flex-col items-center'>
                  <img src={selectedData.image} className='rounded-full justify-center'/>
                  <div>{selectedData.name}</div>
                  <div>{selectedData.description}</div>
                  <button className='btn btn-primary px-3 py-2' onClick={closeModal}>Close</button>


                </div>
                
                </>
              )}

    </Modal>
    </div>
    </>
  )
}

export default Testimonial