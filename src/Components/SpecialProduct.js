import React from 'react'
// import { Link } from 'react-router-dom'
import ReactStars from "react-rating-stars-component"

const Specialproduct = () => {
    return (
        <>



            <div className="col-md-6 mb-4  home-wrapper-2">
                <div className="row">
                    <div className="col-md-5">
                        <div className="special-product-images">

                            <img src="images/watch.jpg" alt="product image" />
                        </div>
                    </div>
                    <div className="col-md-5">
                    <div className="special-product-content">
                                <h4 className="brand">Havells</h4>
                                <h6 className="title">


                                    Samsung Galaxy Note10+ Mobile Phone; Sim...
                                </h6>

                                <ReactStars
                                    count={5}
                                    // onChange={ratingChanged}
                                    size={24}
                                    value='4'
                                    edit={false}
                                    activeColor="#ffd700"
                                />
                                <p className="price"><span>$100</span> &nbsp; <strike>$200</strike> </p>
                                <div className="discount-till d-flex gap-2">
                                    <span>
                                        <b>5 Days</b>

                                    </span>
                                    <div className=" gap-3 align-items-center ">
                                        <span className='badge rounded-circle p-2  bg-warning'>1</span>:


                                        <span className='badge rounded-circle p-2  bg-warning'>1</span>:

                                        <span className='badge rounded-circle p-2 bg-warning'>1</span>
                                    </div>
                                </div>
                            </div>
                            <p>product:5</p>
                            <div className="progress">
                                <div className="progress-bar bg-success" role="progressbar" style={{ width: "20%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">


                                </div>
                            </div>
                            <button type="button" class="btn btnCart rounded btn-warning mt-3" >Add To Cart</button>


                    </div>
                </div>
            </div>






        </>
    )
}

export default Specialproduct
