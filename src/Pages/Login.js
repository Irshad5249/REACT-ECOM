import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../Components/BreadCrumb";
import Meta from "../Components/Meta";
// import Container from "../Components/Container";
// import CustomInput from "../Components/CustomInput";

const Login = () => {
    return (
        <>
            <Meta title={"Login"} />
            <BreadCrumb title="Login" />

            <div className="login-wrapper py-5 home-wrapper-2 container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className="text-center mb-3">Login</h3>
                            <form action="" className="d-flex flex-column gap-15">
                                <input type="email" name="email" placeholder="Email" />
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                />
                                <div>
                                    <Link to="/forgot-password">Forgot Password?</Link>

                                    <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                                        <button className="button border-0 mx-3" type="submit">
                                            Login
                                        </button>
                                        <Link to="/signup" className="button signup">
                                            SignUp
                                        </Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
