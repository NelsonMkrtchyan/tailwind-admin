'use client'
import React,{useState} from "react";
import Image from "next/image";
import Link from "next/link";

import Modal from 'react-bootstrap/Modal';

import {appointmentList, paymentList} from '../data/data'

import { LuClipboardList, AiOutlineSend, FiArrowRight, TbMailStar} from '../assets/icons/vander'
 
export default function PatientProfileTab(){

    let [activeIndex, setActiveIndex] = useState(1)
    let [show, setShow] = useState(false);

    return(
        <div className="col-lg-5 col-md-7 mt-4">
            <div className="card border-0 shadow overflow-hidden">
                <ul className="nav nav-pills nav-justified flex-column flex-sm-row rounded-0 shadow overflow-hidden mb-0">
                    <li className="nav-item">
                        <Link href="#" className={`${activeIndex === 1 ? 'active' : ''} nav-link rounded-0`} onClick={()=>setActiveIndex(1)}>
                            <div className="text-center pt-1 pb-1">
                                <h5 className="mb-0">Profile</h5>
                            </div>
                        </Link>
                    </li>
                    
                    <li className="nav-item">
                        <Link href="#" className={`${activeIndex === 2 ? 'active' : ''} nav-link rounded-0`} onClick={()=>setActiveIndex(2)}>
                            <div className="text-center pt-1 pb-1">
                                <h5 className="mb-0">Profile Settings</h5>
                            </div>
                        </Link>
                    </li>
                </ul>

                <div className="tab-content p-4">
                    {activeIndex === 1 ? 
                        <div className="tab-pane fade show active">
                            <h5 className="mb-0">Introduction:</h5>

                            <p className="text-muted mt-4 mb-0">Web designers to occupy the space which will later be filled with 'real' content. This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'. Dummy texts have been in use by typesetters since the 16th century.</p>
                        
                            <div className="row">
                                <div className="col-lg-6 col-12 mt-4">
                                    <h5>Appointment List</h5>
                                    {appointmentList.map((item, index) =>{
                                        let Icon = item.icon
                                        return(
                                        <div className="d-flex justify-content-between align-items-center rounded p-3 shadow mt-3" key={index}>
                                            <Icon className={item.iconClass}/>
                                            <div className="flex-1 overflow-hidden ms-2">
                                                <h6 className="mb-0">{item.title}</h6>
                                                <p className="text-muted mb-0 text-truncate small">{item.name}</p>
                                            </div>
                                            <span className="mb-0">{item.date}</span>
                                        </div>
                                        )
                                    })}
                                </div>
    
                                <div className="col-lg-6 col-12 mt-4">
                                    <h5>Payment List</h5>
                                    {paymentList.map((item, index) =>{
                                        return(
                                        <div className="d-flex justify-content-between align-items-center rounded p-3 shadow mt-3" key={index}>
                                            <div className="flex-1 overflow-hidden">
                                                <h6 className="flex-1 mb-0">{item.name}</h6>
                                                <p className="text-muted mb-0 text-truncate small">{item.title}</p>
                                            </div>
                                            <Link href="#" className="btn btn-icon btn-primary" onClick={() =>setShow(true)}><LuClipboardList /></Link>
                                        </div>
                                        )
                                    })}
                                </div>
                                <Modal show={show} onHide={() =>setShow(false)} size="lg" centered>
                                    <Modal.Header closeButton>
                                    <Modal.Title><h5 className="modal-title">Patient Invoice</h5></Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div className="row mb-4">
                                            <div className="col-lg-8 col-md-6">
                                                <Image src='/images/logo-dark.png' width={115} height={22} alt=""/>
                                                <h6 className="mt-4 pt-2">Address :</h6>
                                                <small className="text-muted mb-0">1419 Riverwood Drive, <br/>Redding, CA 96001</small>
                                            </div>

                                            <div className="col-lg-4 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                                <ul className="list-unstyled">
                                                    <li className="d-flex ms-0">
                                                        <small className="mb-0 text-muted">Invoice no. : </small>
                                                        <small className="mb-0 text-dark">&nbsp;&nbsp;#54638990jnn</small>
                                                    </li>
                                                    <li className="d-flex ms-0 mt-2">
                                                        <small className="mb-0 text-muted">Email : </small>
                                                        <small className="mb-0">&nbsp;&nbsp;<Link href="mailto:contact@example.com" className="text-dark">info@doctris.com</Link></small>
                                                    </li>
                                                    <li className="d-flex ms-0 mt-2">
                                                        <small className="mb-0 text-muted">Phone : </small>
                                                        <small className="mb-0">&nbsp;&nbsp;<Link href="tel:+152534-468-854" className="text-dark">(+12) 1546-456-856</Link></small>
                                                    </li>
                                                    <li className="d-flex ms-0 mt-2">
                                                        <small className="mb-0 text-muted">Website : </small>
                                                        <small className="mb-0">&nbsp;&nbsp;<Link href="#" className="text-dark">www.doctris.com</Link></small>
                                                    </li>
                                                    <li className="d-flex ms-0 mt-2">
                                                        <small className="mb-0 text-muted">Patient Name : </small>
                                                        <small className="mb-0">&nbsp;&nbsp;Mary Skeens</small>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="pt-4 border-top">
                                            <div className="row">
                                                <div className="col-lg-8 col-md-6">
                                                    <h5 className="text-muted fw-bold">Invoice <span className="badge rounded-pill bg-soft-success fw-normal ms-2">Paid</span></h5>
                                                    <h6>Surgery (Gynecology)</h6>
                                                </div>

                                                <div className="col-lg-4 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                                    <ul className="list-unstyled">
                                                        <li className="d-flex ms-0 mt-2">
                                                            <small className="mb-0 text-muted">Issue Dt. : </small>
                                                            <small className="mb-0 text-dark">&nbsp;&nbsp;25th Sep. 2020</small>
                                                        </li>

                                                        <li className="d-flex ms-0 mt-2">
                                                            <small className="mb-0 text-muted">Due Dt. : </small>
                                                            <small className="mb-0 text-dark">&nbsp;&nbsp;11th Oct. 2020</small>
                                                        </li>

                                                        <li className="d-flex ms-0 mt-2">
                                                            <small className="mb-0 text-muted">Dr. Name : </small>
                                                            <small className="mb-0 text-dark">&nbsp;&nbsp;Dr. Calvin Carlo</small>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            
                                            <div className="invoice-table pb-4">
                                                <div className="table-responsive shadow rounded mt-4">
                                                    <table className="table table-center invoice-tb mb-0">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col" className="text-start border-bottom p-3" style={{minWidth:'60px'}}>No.</th>
                                                                <th scope="col" className="text-start border-bottom p-3" style={{minWidth:'220px'}}>Item</th>
                                                                <th scope="col" className="text-center border-bottom p-3" style={{minWidth:'60px'}}>Qty</th>
                                                                <th scope="col" className="border-bottom p-3" style={{minWidth:'130px'}}>Rate</th>
                                                                <th scope="col" className="border-bottom p-3" style={{minWidth:'130px'}}>Total</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <th scope="row" className="text-start p-3">1</th>
                                                                <td className="text-start p-3">Hospital Charges</td>
                                                                <td className="text-center p-3">1</td>
                                                                <td className="p-3">$ 125</td>
                                                                <td className="p-3">$ 125</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row" className="text-start p-3">2</th>
                                                                <td className="text-start p-3">Medicine</td>
                                                                <td className="text-center p-3">1</td>
                                                                <td className="p-3">$ 245</td>
                                                                <td className="p-3">$ 245</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row" className="text-start p-3">3</th>
                                                                <td className="text-start p-3">Special Visit Fee(Doctor)</td>
                                                                <td className="text-center p-3">1</td>
                                                                <td className="p-3">$ 150</td>
                                                                <td className="p-3">$ 150</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>

                                                <div className="row">
                                                    <div className="col-lg-4 col-md-5 ms-auto">
                                                        <ul className="list-unstyled h6 fw-normal mt-4 mb-0 ms-md-5 ms-lg-4">
                                                            <li className="text-muted d-flex justify-content-between pe-3 ms-0">Subtotal :<span>$ 520</span></li>
                                                            <li className="text-muted d-flex justify-content-between pe-3 ms-0">Taxes :<span> 0</span></li>
                                                            <li className="d-flex justify-content-between pe-3 ms-0">Total :<span>$ 520</span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="border-top pt-4">
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <div className="text-sm-start text-muted text-center">
                                                            <small className="mb-0">Customer Services : <Link href="tel:+152534-468-854" className="text-warning">(+12) 1546-456-856</Link></small>
                                                        </div>
                                                    </div>

                                                    <div className="col-sm-6">
                                                        <div className="text-sm-end text-muted text-center">
                                                            <small className="mb-0"><Link href="#" className="text-primary">Terms & Conditions</Link></small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Modal.Body>
                                </Modal>
                            </div>

                            <h5 className="mb-0 mt-4 pt-2">Contact us</h5>
                            <div className="row">
                                <div className="col-md-12 col-lg-6 mt-4">
                                    <div className="card features feature-primary text-center border-0 p-4 rounded shadow">
                                        <div className="icon text-center rounded-lg mx-auto">
                                            <AiOutlineSend className="align-middle h3"/>
                                        </div>
                                        <div className="card-body p-0 mt-3">
                                            <Link href="#" className="title text-dark h6 d-block">New Messages</Link>
                                            <Link href="#" className="link">Read more <FiArrowRight className="align-middle"/></Link>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-md-12 col-lg-6 mt-4">
                                    <div className="card features feature-primary text-center border-0 p-4 rounded shadow">
                                        <div className="icon text-center rounded-lg mx-auto">
                                            <TbMailStar className="align-middle h3"/>
                                        </div>
                                        <div className="card-body p-0 mt-3">
                                            <Link href="#" className="title text-dark h6 d-block">Latest Proposals</Link>
                                            <Link href="#" className="link">View more <FiArrowRight className="align-middle"/></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> : ''
                    }
                    {activeIndex === 2 ?
                        <div className="tab-pane fade show active">
                            <h5 className="mb-0">Personal Information :</h5>
                            <div className="row align-items-center mt-4">
                                <div className="col-lg-2 col-md-4">
                                    <Image src='/images/client/09.jpg' width={80} height={80} className="avatar avatar-md-md rounded-pill shadow mx-auto d-block" alt=""/>
                                </div>

                                <div className="col-lg-5 col-md-8 text-center text-md-start mt-4 mt-sm-0">
                                    <h6 className="">Upload your picture</h6>
                                    <p className="text-muted mb-0">For best results, use an image at least 256px by 256px in either .jpg or .png format</p>
                                </div>

                                <div className="col-lg-5 col-md-12 text-lg-right text-center mt-4 mt-lg-0">
                                    <Link href="#" className="btn btn-primary">Upload</Link>
                                    <Link href="#" className="btn btn-soft-primary ms-2">Remove</Link>
                                </div>
                            </div>

                            <form className="mt-4">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="mb-3">
                                            <label className="form-label">First Name</label>
                                            <input name="name" id="name" type="text" className="form-control" placeholder="First Name :"/>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="mb-3">
                                            <label className="form-label">Last Name</label>
                                            <input name="name" id="name2" type="text" className="form-control" placeholder="Last Name :"/>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="mb-3">
                                            <label className="form-label">Your Email</label>
                                            <input name="email" id="email" type="email" className="form-control" placeholder="Your email :"/>
                                        </div> 
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="mb-3">
                                            <label className="form-label">Phone no.</label>
                                            <input name="number" id="number" type="text" className="form-control" placeholder="Phone no. :"/>
                                        </div>                                                                               
                                    </div>

                                    <div className="col-md-12">
                                        <div className="mb-3">
                                            <label className="form-label">Your Bio Here</label>
                                            <textarea name="comments" id="comments" rows="4" className="form-control" placeholder="Bio :"></textarea>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="row">
                                    <div className="col-sm-12">
                                        <input type="submit" id="submit" name="send" className="btn btn-primary" value="Save changes"/>
                                    </div>
                                </div>
                            </form>

                            <div className="mt-4 pt-2">
                                <h5 className="mb-0">Change Password :</h5>

                                <form className="mt-4">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="mb-3">
                                                <label className="form-label">Old password :</label>
                                                <input type="password" className="form-control" placeholder="Old password" required=""/>
                                            </div>
                                        </div>
    
                                        <div className="col-lg-12">
                                            <div className="mb-3">
                                                <label className="form-label">New password :</label>
                                                <input type="password" className="form-control" placeholder="New password" required=""/>
                                            </div>
                                        </div>
    
                                        <div className="col-lg-12">
                                            <div className="mb-3">
                                                <label className="form-label">Re-type New password :</label>
                                                <input type="password" className="form-control" placeholder="Re-type New password" required=""/>
                                            </div>
                                        </div>
    
                                        <div className="col-lg-12 mt-2 mb-0">
                                            <button className="btn btn-primary">Save password</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            
                            <div className="mt-4 pt-2">
                                <h5 className="mb-0">Account Notifications :</h5>

                                <div className="d-flex justify-content-between mt-4">
                                    <p className="mb-0">When someone mentions me</p>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                        <label className="form-check-label" htmlFor="flexCheckDefault"></label>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-2">
                                    <p className="mb-0">When someone follows me</p>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked1" defaultChecked/>
                                        <label className="form-check-label" htmlFor="flexCheckChecked1"></label>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-2">
                                    <p className="mb-0">When shares my activity</p>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2"/>
                                        <label className="form-check-label" htmlFor="flexCheckDefault2"></label>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-2">
                                    <p className="mb-0">When someone messages me</p>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked3" defaultChecked/>
                                        <label className="form-check-label" htmlFor="flexCheckChecked3"></label>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="mt-4 pt-2">
                                <h5 className="mb-0">Marketing Notifications :</h5>

                                <div className="d-flex justify-content-between mt-4">
                                    <p className="mb-0">There is a sale or promotion</p>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked4" defaultChecked/>
                                        <label className="form-check-label" htmlFor="flexCheckChecked4"></label>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-2">
                                    <p className="mb-0">Company news</p>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault5"/>
                                        <label className="form-check-label" htmlFor="flexCheckDefault5"></label>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-2">
                                    <p className="mb-0">Weekly jobs</p>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault6"/>
                                        <label className="form-check-label" htmlFor="flexCheckDefault6"></label>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-2">
                                    <p className="mb-0">Unsubscribe News</p>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked7" defaultChecked/>
                                        <label className="form-check-label" htmlFor="flexCheckChecked7"></label>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 pt-2">
                                <h5 className="mb-0 text-danger">Delete Account :</h5>

                                <p className="mb-0 mt-4">Do you want to delete the account? Please press below "Delete" button</p>
                                <div className="mt-4">
                                    <button className="btn btn-danger">Delete Account</button>
                                </div>
                            </div>
                        </div> :''
                    }
                </div>                     
            </div>
        </div>
     
    )
}
