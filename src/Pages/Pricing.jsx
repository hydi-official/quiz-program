import React,{useState} from 'react'
import logo from '../assets/images/logo.jpg';
import Dark from './Dark';
import Modal from 'react-modal';



const Pricing = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedItems, setSelectedItems]= useState(null);

    const openModal = (items) =>{
        setSelectedItems(items);
        setIsModalOpen(true);
    }

    const closeModal = () =>{
        setSelectedItems(null);
        setIsModalOpen(false);
    }

    const items=[
        {id:1, name:"test" ,description:"I'm a nice boy" ,image:logo}, 
        {id:2, name:"Hill", description:"Lorem  jehvbhjbdvhbhjd" ,image:logo}, 
        {id:3, name:"Meek", description:"jbdhsbjhjbhjbvshh j" ,image:logo},
         {id:4, name:"Kofik", description:"jbdhsbjhjdbhvhjvbhjdvbhbjhdfg" ,image:logo}
    ]


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
    <div>Pricing</div>
    <div className='  justify-evenly px-4 py-8'>
        <div className=' grid grid-col-1 px-8 py-8 ml-8  md:grid-cols-3 gap-8' >
        {items.map((items) =>
        <div key={items.id} className='items-center'>
            <div className='bg-primaryColor items-center py-8 px-8 rounded-md cursor-pointer hover:shadow-lg transition duration-300'   
             onClick={() => openModal(items)}>
            <img src={items.image} className='shadow-md rounded-full ml-8 w-14 justify-center h-14'/>
            <h1 className='font-semibold mt-4 '>{items.name}</h1>
            <p>{items.description}</p>
            </div>
        </div>
        )}
        </div>
    </div>

    <Modal isOpen={isModalOpen} onRequestClose={closeModal} style={modalStyles}>

    {selectedItems && (
    <>
      <div className="flex flex-col items-center">
        <img
          src={selectedItems.image}
          alt={selectedItems.name}
          className="w-full object-contain mb-4 rounded-md"
          style={{ maxWidth: '100%', maxHeight: '50vh' }} // Adjust image size for mobile
        />
        <h2 className="text-lg font-semibold mb-2 text-center">{selectedItems.name}</h2>
        <p className="text-sm text-center px-4" style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>{selectedItems.description}</p>
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={closeModal}
        >
          Close
        </button>
      </div>
    </>
  )}
      </Modal>

    <section>
        Nana
        <Dark/>
    </section>

   

    </>
  )
}

export default Pricing