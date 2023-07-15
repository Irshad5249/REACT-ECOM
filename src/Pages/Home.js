import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from "react-fast-marquee";
import BlogCard from '../Components/BlogCard';
import ProductsCard from '../Components/ProductsCard';
import SpecialProduct from '../Components/SpecialProduct';

const Home = () => {
  return (
    <>
      <div className="container-fluid">
        <section className='home-wrapper-1 py-5'>
          <div className="container-xxl">
            <div className="row">
              <div className="col-6">
                <div className="main-banner position-relative">


                  <img src="Images/main-banner-1.jpg" className='img-fluid rounded-3' alt="main banner" />
                  <div className="main-banner-content position-absolute">
                    <h4>SUPERCHARGED FOR PROPS</h4>
                    <h5>iPad S13+ Pro</h5>
                    <p>From $999.00 or $41.62/mo</p>
                    <Link className='button'>Buy NOw</Link>
                  </div>

                </div>
              </div>
              <div className="col-6">
                <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                  <div className="small-banner position-relative">
                    <img
                      src="images/catbanner-01.jpg"
                      className="img-fluid rounded-3"
                      alt="main banner"
                    />
                    <div className="small-banner-content position-absolute">
                      <h4>Best Sake</h4>
                      <h5>iPad S13+ Pro.</h5>
                      <p>
                        From $999.00 <br /> or $41.62/mo.
                      </p>
                    </div>
                  </div>
                  <div className="small-banner position-relative">
                    <img
                      src="images/catbanner-02.jpg"
                      className="img-fluid rounded-3"
                      alt="main banner"
                    />
                    <div className="small-banner-content position-absolute">
                      <h4>NEW ARRIVAL</h4>
                      <h5>But IPad Air</h5>
                      <p>
                        From $999.00 <br /> or $41.62/mo.
                      </p>
                    </div>
                  </div>
                  <div className="small-banner position-relative ">
                    <img
                      src="images/catbanner-03.jpg"
                      className="img-fluid rounded-3"
                      alt="main banner"
                    />
                    <div className="small-banner-content position-absolute">
                      <h4>NEW ARRIVAL</h4>
                      <h5>But IPad Air</h5>
                      <p>
                        From $999.00 <br /> or $41.62/mo.
                      </p>
                    </div>
                  </div>
                  <div className="small-banner position-relative ">
                    <img
                      src="images/catbanner-04.jpg"
                      className="img-fluid rounded-3"
                      alt="main banner"
                    />
                    <div className="small-banner-content position-absolute">
                      <h4>NEW ARRIVAL</h4>
                      <h5>But IPad Air</h5>
                      <p>
                        From $999.00 <br /> or $41.62/mo.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="home-wrapper-2 py-5 mb-5 ">
          <div className="container-xxl">
            <div className="row ">
              <div className="col-12 ">
                <div className="services mb-5 d-flex justify-content-evenly align-items-center ">
                  <div className='d-flex justify-content-between align-items-center ' >
                    <img src="Images/service.png" alt="services" />
                    <div className='px-2'>
                      <h6>Free Shipping</h6>
                      <p className="mb-0">From all orders over $5</p>
                    </div>
                  </div>



                  <div className='d-flex justify-content-evenly align-items-center' >
                    <img src="Images/service-02.png" alt="services" />
                    <div className='px-2'>
                      <h6 >Daily Surprise offers</h6>
                      <p className="mb-0">Save Upto 25% off</p>
                    </div>
                  </div>




                  <div className='d-flex justify-content-evenly align-items-center' >
                    <img src="Images/service-03.png" alt="services" />
                    <div className='px-2'>
                      <h6>Support 24/7</h6>
                      <p className="mb-0">Shop with an Experts</p>
                    </div>
                  </div>




                  <div className='d-flex justify-content-evenly align-items-center' >
                    <img src="Images/service-04.png" alt="services" />
                    <div className='px-2'>
                      <h6>Affortable Price</h6>
                      <p className="mb-0">Get Factory Default Price</p>
                    </div>
                  </div>




                  <div className='d-flex justify-content-evenly align-items-center' >
                    <img src="Images/service-05.png" alt="services" />
                    <div className='px-2'>
                      <h6>Secure Payment </h6>
                      <p className="">100% Protected Payment</p>
                    </div>
                  </div>



                </div>
              </div>
            </div>
          </div>
        </section>


        <section class1="home-wrapper-3   py-5">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <div className="categories mb-5 d-flex justify-content-between flex-wrap align-items-center">
                  <div className="d-flex gap align-items-center">
                    <div>
                      <h6>Music & Gaming</h6>
                      <p>10 Items</p>
                    </div>
                    <img src="images/camera.jpg" alt="camera" />
                  </div>
                  <div className="d-flex gap align-items-center">
                    <div>
                      <h6>Cameras</h6>
                      <p>10 Items</p>
                    </div>
                    <img src="images/camera.jpg" alt="camera" />
                  </div>
                  <div className="d-flex gap align-items-center">
                    <div>
                      <h6>Smart Tv</h6>
                      <p>10 Items</p>
                    </div>
                    <img src="images/tv.jpg" alt="camera" />
                  </div>
                  <div className="d-flex gap align-items-center">
                    <div>
                      <h6>Smart Watches</h6>
                      <p>10 Items</p>
                    </div>
                    <img src="images/headphone.jpg" alt="camera" />
                  </div>
                  <div className="d-flex gap align-items-center">
                    <div>
                      <h6>Music & Gaming</h6>
                      <p>10 Items</p>
                    </div>
                    <img src="images/camera.jpg" alt="camera" />
                  </div>
                  <div className="d-flex gap align-items-center">
                    <div>
                      <h6>Cameras</h6>
                      <p>10 Items</p>
                    </div>
                    <img src="images/camera.jpg" alt="camera" />
                  </div>
                  <div className="d-flex gap align-items-center">
                    <div>
                      <h6>Smart Tv</h6>
                      <p>10 Items</p>
                    </div>
                    <img src="images/tv.jpg" alt="camera" />
                  </div>
                  <div className="d-flex gap align-items-center">
                    <div>
                      <h6>Smart Watches</h6>
                      <p>10 Items</p>
                    </div>
                    <img src="images/headphone.jpg" alt="camera" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>



        <div className="Products featured-wrapper ">
          <div className="row  mb-3">

            <div className="col-12">
              <h3 className="section-heading">Feature Collections-)</h3>
            </div>

          </div>


          <div className="row justify-content-evenly">

            <ProductsCard />
            <ProductsCard />
            <ProductsCard />
            <ProductsCard />



          </div>

        </div>

        {/* <div className="container"> */}
        <div className="famous-card mt-5 mb-5 ">
          <div className="row justify-content-between">

            <div className="col-md-3 home-wrapper-famou position-relative ">
              <img src="images/famous-1.webp" alt="famous" className='img-fluid img-famous-1' />
              <div className="famous-content">
                <h5>
                  BIG SCREEN</h5>
                <h6>Smart Watch Series 7</h6>
                <p>From $399or $16.62/mo. for 24 mo.*</p>
              </div>
            </div>
            <div className="col-md-3  home-wrapper-famous position-relative">
              <img src="images/famous-2.webp" alt="" className='img-fluid' />
              <div className="famous-content-1">
                <h5>
                  BIG SCREEN</h5>
                <h6>Smart Watch Series 7</h6>
                <p>From $399or $16.62/mo. for 24 mo.*</p>
              </div>
            </div>
            <div className="col-md-3 home-wrapper-famous position-relative">
              <img src="images/famous-3.webp" alt="" className='img-fluid ' />
              <div className="famous-content-1">
                <h5>
                  BIG SCREEN</h5>
                <h6>Smart Watch Series 7</h6>
                <p>From $399or $16.62/mo. for 24 mo.*</p>
              </div>
            </div>
            <div className="col-md-3  home-wrapper-famous position-relative">
              <img src="images/famous-3.webp" alt="" className='img-fluid' />
              <div className="famous-content-1">
                <h5>
                  BIG SCREEN</h5>
                <h6>Smart Watch Series 7</h6>
                <p>From $399or $16.62/mo. for 24 mo.*</p>
              </div>
            </div>

          </div>
        </div>
        {/* </div> */}

        <div className="SpeacialProducts featured-wrapper ">
          <div className="row  mb-3">

            <div className="col-12">
              <h3 className="section-heading">Our Speacial Products-)</h3>
            </div>
          </div>

          <div className="row  justify-content-between ">

            < SpecialProduct />


            < SpecialProduct />
            < SpecialProduct />

          </div>
        </div>



        <section className="marque-wrapper home-wrapper-2 py-2 mb-5  mt-5">
          <div className="container-xxl">
            <div className="row ">
              <div className="col-12">
                <div className="marquee-inner-wrapper card-wrapper py-3 mb-5 ">
                  <Marquee className="d-flex">
                    <div className="mx-4 w-25">
                      <img src="images/brand-01.png" alt="brand" />
                    </div>
                    <div className="mx-4 w-25">
                      <img src="images/brand-02.png" alt="brand" />
                    </div>
                    <div className="mx-4 w-25">
                      <img src="images/brand-03.png" alt="brand" />
                    </div>
                    <div className="mx-4 w-25">
                      <img src="images/brand-04.png" alt="brand" />
                    </div>
                    <div className="mx-4 w-25">
                      <img src="images/brand-05.png" alt="brand" />
                    </div>
                    <div className="mx-4 w-25">
                      <img src="images/brand-06.png" alt="brand" />
                    </div>
                    <div className="mx-4 w-25">
                      <img src="images/brand-07.png" alt="brand" />
                    </div>
                    <div className="mx-4 w-25">
                      <img src="images/brand-08.png" alt="brand" />
                    </div>
                  </Marquee>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class1="blog-wrapper py-5 home-wrapper-2">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <h3 className="section-heading">Our Latest Blogs</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4">
                <BlogCard />
              </div>
              <div className="col-sm-4">
                <BlogCard />
              </div>
              <div className="col-sm-4">
                <BlogCard />
              </div>
              <div className="col-sm-4">
                <BlogCard />
              </div>


            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Home
