'use client'
import React,{useState} from "react";
import Link from "next/link"
import Image from "next/image";

import Modal from 'react-bootstrap/Modal';

import { FiEye, MdOutlineCheckCircleOutline, AiOutlineCloseCircle, LiaTimesCircleSolid } from '../../assets/icons/vander'

export default function Crud(){

    let [showDetail, setShowDetail] = useState(false);
    let [acceptsAppointment, setAcceptsAppointment] = useState(false);
    let [cancle, setCancle] = useState(false);

    return(
        <>
        <td className="text-end p-3">
            <Link href="#" className="btn btn-icon btn-pills btn-soft-primary" onClick={() =>setShowDetail(!showDetail)}><FiEye /></Link>
            <Link href="#" className="btn btn-icon btn-pills btn-soft-success mx-1" onClick={() =>setAcceptsAppointment(!acceptsAppointment)}><MdOutlineCheckCircleOutline /></Link>
            <Link href="#" className="btn btn-icon btn-pills btn-soft-danger" onClick={() =>setCancle(!cancle)}><AiOutlineCloseCircle /></Link>
        </td>
        <Modal show={showDetail} onHide={() =>setShowDetail(!showDetail)} animation={false} centered>
            <Modal.Header closeButton>
            <Modal.Title className='h5'>Appointment Detail</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="modal-body p-3 pt-4">
                    <div className="d-flex align-items-center">
                        <Image src='/images/client/01.jpg' width={65} height={65} className="avatar avatar-small rounded-pill" alt=""/>
                        <h5 className="mb-0 ms-3">Howard Tanner</h5>
                    </div>
                    <ul className="list-unstyled mb-0 d-md-flex justify-content-between mt-4">
                        <li>
                            <ul className="list-unstyled mb-0">
                                <li className="d-flex ms-0">
                                    <h6>Age:</h6>
                                    <p className="text-muted ms-2">25 year old</p>
                                </li>

                                <li className="d-flex ms-0">
                                    <h6>Gender:</h6>
                                    <p className="text-muted ms-2">Male</p>
                                </li>

                                <li className="d-flex ms-0">
                                    <h6 className="mb-0">Department:</h6>
                                    <p className="text-muted ms-2 mb-0">Cardiology</p>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <ul className="list-unstyled mb-0">
                                <li className="d-flex ms-0">
                                    <h6>Date:</h6>
                                    <p className="text-muted ms-2">20th Dec 2020</p>
                                </li>

                                <li className="d-flex ms-0">
                                    <h6>Time:</h6>
                                    <p className="text-muted ms-2">11:00 AM</p>
                                </li>

                                <li className="d-flex ms-0">
                                    <h6 className="mb-0">Doctor:</h6>
                                    <p className="text-muted ms-2 mb-0">Dr. Calvin Carlo</p>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </Modal.Body>
        </Modal>
        <Modal show={acceptsAppointment} onHide={() =>setAcceptsAppointment(!acceptsAppointment)} animation={false} centered>
            <Modal.Body>
                <div className="modal-body py-5">
                    <div className="text-center">
                        <div className="icon d-flex align-items-center justify-content-center bg-soft-success rounded-circle mx-auto" style={{height:'95px',width:'95px'}}>
                            <span className="mb-0"><MdOutlineCheckCircleOutline  className="h1 mb-0"/></span>
                        </div>
                        <div className="mt-4">
                            <h4>Accept Appointment</h4>
                            <p className="para-desc mx-auto text-muted mb-0">Great doctor if you need your family member to get immediate assistance, emergency treatment.</p>
                            <div className="mt-4">
                                <Link href="#" className="btn btn-soft-success">Accept</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
        <Modal show={cancle} onHide={() =>setCancle(!cancle)} animation={false} centered>
            <Modal.Body>
                <div className="modal-body py-5">
                    <div className="text-center">
                        <div className="icon d-flex align-items-center justify-content-center bg-soft-danger rounded-circle mx-auto" style={{height:'95px',width:'95px'}}>
                            <span className="mb-0"><LiaTimesCircleSolid className='h1 mb-0'/></span>
                        </div>
                        <div className="mt-4">
                            <h4>Cancel Appointment</h4>
                            <p className="para-desc mx-auto text-muted mb-0">Great doctor if you need your family member to get immediate assistance, emergency treatment.</p>
                            <div className="mt-4">
                                <Link href="#" className="btn btn-soft-danger">Cancel</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
        </>
    )
}