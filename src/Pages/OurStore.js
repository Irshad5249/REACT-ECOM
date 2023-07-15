import React from 'react'
import BreadCrumb from '../Components/BreadCrumb'
import Meta from '../Components/Meta'
import ReactStars from "react-rating-stars-component"
import ProductsCard from '../Components/ProductsCard'

const OurStore = () => {
  return (
    <div>
      <>
        <Meta title='our SSStores' />
        <BreadCrumb title='Our Stores' />
        <div className="container-fluid">
          <div className="row justify-content-between stores-row">

            <div className="col-md-3 ">
              <div className="col-md-12 stores-left-card ">
                <h3 className='py-1 '>Shop categories</h3>
                <div className="py-1 stores-left-card-para">
                  <p>Watch</p>
                  <p>Tv</p>
                  <p>Camera</p>
                  <p>Laptop</p>
                </div>

              </div>
              <div className="col-md-12 stores-left-card mt-3">
                <h4 className=''>Filter By</h4>
                <h5 className="py-3">Availability</h5>

                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label" for="flexCheckDefault">
                    In stock(1)
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                  <label className="form-check-label" for="flexCheckChecked">
                    Out of Stock(0)
                    <div className="text-dark mt-2">Price</div>
                    <div className="row py-2">
                      <div className="col-md-6"><input class="form-control form-control-sm" type="text" placeholder="From" aria-label=".form-control-sm example"></input></div>
                      <div className="col-md-6"><input class="form-control form-control-sm" type="text" placeholder="To" aria-label=".form-control-sm example"></input></div>
                    </div>
                    <div className="mt-3">
                      <p className='text-dark'>Colors</p>
                      <div className="d-flex justify-content-between mt-2">
                        <i class="bi bi-circle-fill"></i>
                        <i class="bi bi-circle-fill " style={{ color: "red" }}></i>
                        <i class="bi bi-circle-fill" style={{ color: "blue" }}></i>
                        <i class="bi bi-circle-fill" style={{ color: "pink" }}></i>
                        <i class="bi bi-circle-fill" style={{ color: "green" }}></i>
                        <i class="bi bi-circle-fill" style={{ color: "yellow" }}></i>
                        <i class="bi bi-circle-fill" style={{ color: "brown" }}></i>

                      </div>
                    </div>
                    <div className="k mt-3">
                      <p className='text-dark'>Size</p>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" for="flexCheckDefault">
                          S(4)
                        </label>
                      </div>
                      <div className="form-check mt-2">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" for="flexCheckDefault">
                          M(3)
                        </label>
                      </div>
                    </div>


                  </label>
                </div>

              </div>

              <div className="col-md-12 stores-left-card mt-3">
                <h5>Products tags</h5>
                <div className="row">
                  <div className="col-md-6 py-2">
                    <p className='text-dark-products-tags bg-light rounded'>Headphones</p>

                  </div>
                  <div className="col-md-6 py-2">
                    <p className='text-dark-products-tags bg-light rounded'>Laptops</p>

                  </div>

                </div>
                <div className="row">
                  <div className="col-md-6 py-2">
                    <p className='text-dark-products-tags bg-light rounded'>Headphones</p>

                  </div>
                  <div className="col-md-6 py-2">
                    <p className='text-dark-products-tags bg-light rounded'>Headphones</p>

                  </div>
                </div>
              </div>
              <div className="col-md-12 py-4 stores-left-card mt-3 mb-2">
                <h5>Random Products</h5>
                <div className="row">
                  <div className="col-md-6"><img src="images/watch.jpg" alt="" /></div>
                  <div className="col-md-6"><b>
                    Kids headphones bulk 10 pack multi colored for students</b>
                    <ReactStars
                      count={5}
                      // onChange={ratingChanged}
                      size={24}
                      value='4'
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="price">$100.00</p>

                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-6"><img src="images/watch.jpg" alt="" /></div>
                  <div className="col-md-6"><b>
                    Kids headphones bulk 10 pack multi colored for students</b>
                    <ReactStars
                      count={5}
                      // onChange={ratingChanged}
                      size={24}
                      value='4'
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="price">$100.00</p>

                  </div>
                </div>
              </div>

            </div>
            <div className="col-md-9">
              <div className="col-md-12 py-2 stores-left-card d-flex">

                <div class="dropdown  d-flex">
                  <p className='mx-2 justify-content-center align-items-center d-flex'>Sort By:</p>
                  <a class="btn btn-secondary dropdown-toggle" className='dropdown-Link py-2 px-1' href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown link
                  </a>

                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item dropdown-item-store" href="#">Featured</a></li>
                    <li><a class="dropdown-item dropdown-item-store" href="#">Best Selling</a></li>
                    <li><a class="dropdown-item dropdown-item-store" href="#">Alphabetically ,A to Z</a></li>
                    <li><a class="dropdown-item dropdown-item-store" href="#">Alphabetically ,Z -A</a></li>
                    <li><a class="dropdown-item dropdown-item-store" href="#">Price low to high</a></li>
                    <li><a class="dropdown-item dropdown-item-store" href="#">Price high to low</a></li>
                    <li><a class="dropdown-item dropdown-item-store" href="#">Date, old to New</a></li>
                    <li><a class="dropdown-item dropdown-item-store" href="#">Date , New to Old</a></li>

                  </ul>
                </div>

              </div>
              <div className='row mt-4 '>
               
                  <ProductsCard/>
                  <ProductsCard/>
              
              </div>
            </div>

          </div>
        </div>
      </>
    </div>
  )
}

export default OurStore
