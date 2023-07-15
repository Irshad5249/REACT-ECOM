import React from 'react'
import { NavLink, Link } from 'react-router-dom'
// import {bsSearch} from 'react-icons/bs';
function Header() {
  return (
    <>
      <header className='header-top-strip container-fluid py-2' >
        <div className="container-xxl">
          <div className="row ">
            <div className="col-6 ">
              <p>Free Shipping over $100 and Free Return</p>
            </div>
            <div className="col-6">
              <p className='text-end'>
                HelpLine: <a href="tel:+7860947033" className='text-white'> 7860947033</a>
              </p></div>
          </div>
        </div>

      </header>



      <header className="header-upper container-fluid py-2 mb-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-2 d-flex justify-content-center align-items-center">
              <h2 className=' '>
                <Link to='/' className='text-white d-flex justify-content-center align-items-center'>Developers</Link>
              </h2>
            </div>
            <div className="col-5  mt-4">
              <div className="input-group mb-2 ">
                <input type="text" className="form-control" placeholder="search here...." aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button className="btn btn-outline-secondary" type="button" id="button-addon2">search</button>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-link d-flex justify-content-evenly align-items-center">


                <div className='text-white d-flex justify-content-center  gap-10'>
                  <Link to='/' > <img src="Images/compare.svg" alt="compare" /></Link>
                  <p  >compare <br /> products</p>
                </div>


                <div className='text-white d-flex justify-content-center  gap-10'>
                  <Link to='/' c > <img src="Images/wishlist.svg" alt="wishlist" /></Link>
                  <p >favroit wishlist <br /> products</p>
                </div>


                <div className='text-white d-flex justify-content-center  gap-10' >
                  <Link to='login' > <img src="Images/user.svg" alt="user" />Login  <br /> My Account</Link>
                  <p className='text-white '></p>
                </div>


                <div >
                  <Link to='/' > <img src="Images/cart.svg" alt="cart" /></Link>

                  <div className="d-flex flex-column gap-10">
                    <span className="badge bg-white text-dark mb-0">0</span>
                    <p className='text-white'>$ 500</p>

                  </div>


                </div>


              </div>
            </div>

          </div>
        </div>
      </header>
      <header className="header-bottom container-fluid py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="menu-bottom container-fluid">
             
               

           


                <div className="dropdown mt-0 d-flex justify-content-evenly align-items-center  ">
                <img src="Images/menu.svg" alt="" className='img-fluid   d-flex justify-content-center align-items-center ' />
                  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Shop categories
                  </button>
                  <ul className="dropdown-menu dropdown-menu-header">
                    <li><Link className="dropdown-item dropdown-item-header text-white" to="/">Action</Link></li>
                    <li><Link className="dropdown-item text-white" to="/">Another action</Link></li>
                    <li><Link className="dropdown-item text-white" to="/">Something else here</Link></li>
                  </ul>
                </div>




              </div>
            </div>
            <div className="col-8 ">
              <div className="menu-links  d-flex justify-content-evenly align-items-center text-white">
                <NavLink to=''>Home</NavLink>
                <NavLink to='store'>Our Store</NavLink>
                <NavLink to='blog'>Blog</NavLink>
                <NavLink to='contact'>Contact</NavLink>
              </div>
            </div>

          </div>
        </div>
      </header>
              


    </>
  )
}

export default Header
