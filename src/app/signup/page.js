import React from "react";
import Link from "next/link";
import Image from "next/image";

import { FiHome, AiFillFacebook, SlSocialGoogle} from '../assets/icons/vander'

export default function Signup(){
    return(
        <>
         <div className="back-to-home rounded d-none d-sm-block">
            <Link href="/" className="btn btn-icon btn-primary"><FiHome className="icons"/></Link>
        </div>

        <section className="bg-home d-flex bg-light align-items-center" style={{backgroundImage:`url('/images/bg/bg-lines-one.png')`, backgroundPosition:'center'}}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-5 col-md-8">
                        <Image src='/images/logo-dark.png' width={115} height={22} className="mx-auto d-block" alt=""/>
                        <div className="card login-page shadow mt-4 rounded border-0">
                            <div className="card-body">
                                <h4 className="text-center">Sign Up</h4>  
                                <form className="login-form mt-4">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="mb-3">                                               
                                                <label className="form-label">First name <span className="text-danger">*</span></label>
                                                <input type="text" className="form-control" placeholder="First Name" name="s" required=""/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-3">                                                
                                                <label className="form-label">Last name <span className="text-danger">*</span></label>
                                                <input type="text" className="form-control" placeholder="Last Name" name="s" required=""/>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="mb-3">
                                                <label className="form-label">Your Email <span className="text-danger">*</span></label>
                                                <input type="email" className="form-control" placeholder="Email" name="email" required=""/>
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="mb-3">
                                                <label className="form-label">Password <span className="text-danger">*</span></label>
                                                <input type="password" className="form-control" placeholder="Password" required=""/>
                                            </div>
                                        </div>

                                        <div className="col-md-12">
                                            <div className="mb-3">
                                                <div className="form-check">
                                                    <input className="form-check-input align-middle" type="checkbox" value="" id="accept-tnc-check"/>
                                                    <label className="form-check-label" htmlFor="accept-tnc-check">I Accept <Link href="#" className="text-primary">Terms And Condition</Link></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="d-grid">
                                                <button className="btn btn-primary">Register</button>
                                            </div>
                                        </div>

                                        <div className="col-lg-12 mt-3 text-center">
                                            <h6 className="text-muted">Or</h6>
                                        </div>
                                        
                                        <div className="col-6 mt-3">
                                            <div className="d-grid">
                                                <Link href="#" className="btn btn-soft-primary"><AiFillFacebook /> Facebook</Link>
                                            </div>
                                        </div>
                                        
                                        <div className="col-6 mt-3">
                                            <div className="d-grid">
                                                <Link href="#" className="btn btn-soft-primary"><SlSocialGoogle /> Google</Link>
                                            </div>
                                        </div>

                                        <div className="mx-auto">
                                            <p className="mb-0 mt-3"><small className="text-dark me-2">Already have an account ?</small> <Link href="/login" className="text-dark fw-bold">Sign in</Link></p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div> 
                </div>
            </div> 
        </section>
        </>
    )
}