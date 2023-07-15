import React from 'react'
import BlogCard from '../Components/BlogCard'
import BreadCrumb from '../Components/BreadCrumb'
import Meta from '../Components/Meta'
const Blog = () => {
    return (
        <>
            <Meta title='our Blog' />
            <BreadCrumb title='Our Blogs' />
            <div className="container-fluid">
                <div className="row stores-row">
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
                    </div>
                    <div className="col-md-9">
                        <div className="row">
                           <div className="col-md-5">
                            <BlogCard/>
                           </div>
                           <div className="col-md-5">
                            <BlogCard/>
                           </div>
                           <div className="col-md-5 mt-3">
                            <BlogCard/>
                           </div>

                           <div className="col-md-5 mt-3">
                            <BlogCard/>
                           </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Blog
