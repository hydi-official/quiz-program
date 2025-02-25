import React from 'react';
import hero from '../assets/images/hero.jpg';
import tablet from '../assets/images/tablet-pic.jpg';
import doc_illustration from '../assets/images/doc-illustration.jpg';
import support_illustration from '../assets/images/support-illustration.jpg';
import pharmacy_illustration from '../assets/images/pharmacy-illustration.jpg';
const Home = () => {
  return (
    <>
    <div>
      <div className='mt-2 '>
        <hr style={{ backgroundColor: '#4D06A7', height: '2px', border: 'none', fontWeight: 'bold' }} />
      </div>
                      {/* Hero */}
      <div className=' py-[40px] px-12 pt-[50px] 2xl:h-[900px] mx-auto flex flex-col  md:flex-row items-center bg-[#b78eec]'>
        <div className="flex flex-col md:flex-row justify-between ">
        </div>

        <div className=' md:w-1/2 flex justify-end'>
            <img src={hero} className='w-full h-full'/>
          </div>

        <div className='container md:w-1/2 ml-5'>
          <div className='mt-5'>
            <h3 className='text-[36px]  leading-[46px]  font-[100] '>Welcome to</h3> 
            </div>
          <div>
            <h1 className='text-primaryColor  text-[36px]  leading-[46px]  font-[800] md:text-[60px] md:leading-[70px]'>PFAGO</h1> 
            <h1 className='text-primaryColor text-[36px]  leading-[46px]  font-[800] md:text-[60px] md:leading-[70px]'>CHEMIST</h1>
            <div className='mt-4'>
            <p className=''>For your no.1 heath store </p>
            </div>
            <div className='mt-8 flex' >
            <buton className="rounded-md py-2 px-8 mt-2 text-white bg-primaryColor">
              Browse catagories
            </buton>
            </div>
            </div>

          </div>

          
      </div>
                    {/* New to the system */}
      <div className=' py-[20px] px-12 pt-[20px] 2xl:h-[900px] mx-auto flex flex-col  md:flex-row items-center'>
        <div className="flex flex-col md:flex-row justify-between ">
        </div>
        <div className=' md:w-1/2'>
          <div className=''>
            <h3 className='text-[36px]'>NEW TO THE SYSTEM ?</h3> 
            </div>
          <div>
            <p className='text-lg text-right'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse accusamus corrupti ipsa itaque ut sit aliquam provident deleniti tempora ratione omnis ullam voluptatem, doloremque suscipit praesentium saepe, iusto quia voluptate?
              </p> 
            <div className='mt-4 '>
            <p className='text-right text-lg'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A libero repellat numquam illo eos ex officiis culpa. Tenetur, totam rem corporis, asperiores quae cumque illum eaque id doloribus quibusdam cum!
            </p>
            </div>
            <div className='mt-8 flex justify-end'>
            <buton className="rounded-md py-2 px-8 mt-2 text-white bg-primaryColor">
              Sign Up
            </buton>
            </div>
            </div>

          </div>

           <div className=' md:w-1/2'>
            <img src={tablet} className='w-full h-full'/>
          </div>
      </div>

                  {/* BACK FOR SOME MORE*/}
                  <div className=' py-[40px] px-12 pt-[50px] 2xl:h-[900px] mx-auto flex flex-col  md:flex-row items-center bg-[#b78eec]'>
        <div className="flex flex-col md:flex-row justify-between ">
        </div>

        <div className=' md:w-1/2 flex justify-end'>
            <img src={doc_illustration} className='w-full h-full'/>
          </div>

        <div className=' md:w-1/2 ml-5'>
          <div className=''>
            <h3 className='text-[36px]  leading-[46px]  font-[100] '>BACK FOR SOME MORE?</h3> 
            </div>
          <div className=''>
            <p className=' text-left  text-[18px] leading-6 ]'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dolorum et vel quo placeat eum voluptates cupiditate deserunt non excepturi id accusamus sit optio nulla distinctio, eos inventore necessitatibus exercitationem.
              </p> 
            <p className=' text-left mt-5  text-[18px] leading-6 ]'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quaerat, a quos aut, officia, vitae sunt neque veritatis sit libero ipsam deserunt modi velit fugit ullam iure. Explicabo, inventore temporibus?
              </p>
            <div className='mt-4'>
            </div>
            <div className='mt-8'>
            <buton className="rounded-md py-2 px-8 mt-2 text-white bg-primaryColor">
              SignIn To Continue
            </buton>
            </div>
            </div>

          </div>

          
      </div>
                    {/* service*/}
      <div className=' py-[20px] px-12 pt-[20px] 2xl:h-[900px] mx-auto flex flex-col  md:flex-row items-center'>
        <div className="flex flex-col md:flex-row justify-between ">
        </div>
        <div className=' md:w-1/2'>
          <div className=''>
            <h3 className='text-[36px]'>IN NEED OF EXTRA SERVICE ?</h3> 
            </div>
          <div>
            <p className='text-lg text-right'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse accusamus corrupti ipsa itaque ut sit aliquam provident deleniti tempora ratione omnis ullam voluptatem, doloremque suscipit praesentium saepe, iusto quia voluptate?
              </p> 
            <div className='mt-4 '>
            <p className='text-right text-lg'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A libero repellat numquam illo eos ex officiis culpa. Tenetur, totam rem corporis, asperiores quae cumque illum eaque id doloribus quibusdam cum!
            </p>
            </div>
            <div className='mt-8 flex justify-end'>
            <buton className="rounded-md py-2 px-8 mt-2 text-white bg-primaryColor">
              Contact Us
            </buton>
            </div>
            </div>

          </div>

           <div className=' md:w-1/2 flex justify-center'>
            <img src={support_illustration} className='w-[500px] h-full'/>
          </div>
      </div>

            {/* feature */}
      <sction>
        <div>
          <img src={pharmacy_illustration} className='w-full'/>
        </div>

        </sction>
        </div>
    </>
  );
}

export default Home;
