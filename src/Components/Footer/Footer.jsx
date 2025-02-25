import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/images/logo.jpg';





const Footer = () => {
    const year = new Date().getFullYear()

    return(
<footer className="pb-16 pt-10 bg-primaryColor" >
            <div className="container ">
                <div className="flex justify-between flex-col md:flex-row  ">
                  {/* footer logo */}
                    <div className='flex flex-col md:flex-row justify-between gap-8'>
                        <img src={logo} alt="" className='w-12 h-12'/>
                        </div>


                        {/* Footer menu */}
                        <div>
                          <Link to='/about'>
                    <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-white hover:text-violet-600">About Us</h2>
                    </Link>
                </div>

                <div>
                    <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-white hover:text-violet-600">Blog</h2>
                 
                </div>

                <div>
                    <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-white hover:text-violet-600">Services</h2>
                  
                </div>

                  {/* form section */}
                <div className='flex'>
      <form>
        <input
          type="text"
          placeholder='Enter your E-mail'
          className='rounded-md py-1 px-6 outline-white'
          style={{ border: '1px solid white' }} 
        />
        <input
          type='submit'
          value='Subscribe'
          className='rounded-md bg-indigo-950 text-white py-1 px-4 outline-white font-semibold' // Add font-semibold for a bit bold
          style={{ border: '2px solid white' }} 
        />
      </form>
    </div>

                    </div>

                    {/* horizontal line */}
                    <div className='mt-2 '>
        <hr style={{ backgroundColor: 'white', height: '2px', border: 'none', fontWeight: 'bold' }} />
      </div>

                  {/* copyright section */}
             
                    <div>
                        <p className="text-[16px] leading-7 font-[400] text-white mt-4">Copyright © {year} pfgo pharmacueticals
                        </p>
                        </div>
                </div>

            

        </footer>
    );
};

export default Footer;