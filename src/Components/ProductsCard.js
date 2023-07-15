import React from 'react'
import ReactStars from "react-rating-stars-component"
import { Link } from "react-router-dom"
const ProductsCard = () => {
    return (
        <>

            <div className="col-md-3 mb-4  home-wrapper-2">

                <div className="product-card position-relative">
                    <div className="wishlist-icon">
                        <Link>
                            <img src="images/wish.svg" alt="addcart" />
                        </Link>
                    </div>

                    <div className="product-images">

                        <img src="images/watch.jpg" alt="product image" />
                        <img src="images/watch-1.jpg" alt="product image" />
                    </div>
                    <div className="product-details">
                        <h6 className="brand">Havels</h6>
                        <h5 className="product-title">
                            Kids headphones bulk 10 pack multi colored for students
                        </h5>
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
                    <div className="action-bar ">
                        <div className="d-flex flex-column">
                            <Link>
                                <img src="images/prodcompare.svg" alt="prodcompare" />
                            </Link>
                            <Link>
                                <img src="images/view.svg" alt="viewsvg" />
                            </Link>
                            <Link>
                                <img src="images/add-cart.svg" alt="addcart" />
                            </Link>

                        </div>
                    </div>
                </div>


            </div>


        </>
    )
}

export default ProductsCard
