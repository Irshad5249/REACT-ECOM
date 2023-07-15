import React from 'react'

function Footer() {
  return (
    <>
      <div className="container-fluid py-4 footer">
        <div className="row d-flex justify-content-evenly align-items-center footer1">
          <div className="col-md-5 d-flex">
            <h3 className='text-white'><i class="bi bi-telegram"></i></h3>
            <h4 className='px-2 text-white'>Sign Up For the Newsletter</h4>

          </div>
          <div className="col-md-5">
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
              <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
            </div>
          </div>
        </div>
        <div className="row container-fluid mt-5 d-flex justify-content-evenly footer2">
          <div className="col-md-2 text-white">
            <h3>Contact Us</h3>
            <p className='footerPara'>A-51 ,Mansaram Park <br />New Delhi Uttam Nagar <br />110059</p>
          </div>
          <div className="col-md-2 text-white ">
            <h3>Information</h3>
            <p>Privacy Policy</p>
            <p>Refund Policy</p>
            <p>Shipping Policy</p>
            <p>Terms Of services</p>
            <p>Blogs</p>
          </div>
          <div className="col-md-2 text-white">
            <h3>Account</h3>
            <p>Search</p>
            <p>About Us</p>
            <p>Faq</p>
            <p>Contact</p>
            <p>Size Chat</p>
          </div>
          <div className="col-md-2 text-white" >
            <h3>Quick Links</h3>
            <p>Accessories</p>
            <p>Laptops</p>
            <p>Headphones</p>
            <p>Smart Watches</p>
            <p>Tablets</p>
          </div>
          <div className="col-md-2 text-white footer3">
            <h3>Our App</h3>
            <p>Download Our App and Gets extra 15% Discount on ypur Firsts Order</p>
            <div className="row">
              <div className="col-9 d-flex justify-content-evenly footer-App mt-3">
                <h3><i class="bi bi-google-play"></i></h3>
                <span>Get it  On <br /> Google Play</span>

              </div>
              <div className="col-9 d-flex footer-App mt-2 justify-content-evenly mb-3">
                <h3><i class="bi bi-apple"></i></h3>
                <span>Download on  <br /> the App  Store</span>

              </div>
            </div>
          </div>
        </div>


        <div className="container-fluid">
          <div className="row">
            <div className="col-xs text-white d-flex justify-content-center align-items-center">
              <p><i class="bi bi-c-circle"></i></p>2022:powered by aeroTech
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Footer
