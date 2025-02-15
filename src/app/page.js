import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Wrapper from './components/wrapper'
import Charts from './components/chart'
import PersonChat from './components/personChat'
import ScrollBar from './components/scrollBar'

import { aboutData, latestAppointment, patientsReviews } from './data/data'

import {FiCalendar, MdOutlineCheck, LiaTimesSolid, LuUser2} from './assets/icons/vander'

export default function Home() {
  return (
    <Wrapper>
      <div className="container-fluid">
        <div className="layout-specing">
          <h5 className="mb-0">Dashboard</h5>

          <div className="row">
              {aboutData.map((item,index) =>{
                  let Icon = item.icon
                  return(
                      <div className="col-xl-2 col-lg-4 col-md-4 mt-4" key={index}>
                          <div className="card features feature-primary rounded border-0 shadow p-4">
                              <div className="d-flex align-items-center">
                                  <div className="icon text-center rounded-md">
                                      <Icon className="h3 mb-0"/>
                                  </div>
                                  <div className="flex-1 ms-2">
                                      <h5 className="mb-0">{item.title}</h5>
                                      <p className="text-muted mb-0">{item.desc}</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  )
              })}
          </div>

          <div className="row">
              <Charts/>
          </div>

          <div className="row">
              <div className="col-xl-4 col-lg-6 mt-4">
                  <div className="card border-0 shadow rounded">
                      <div className="d-flex justify-content-between align-items-center p-4 border-bottom">
                          <h6 className="mb-0"><FiCalendar className="text-primary me-1 h5 mb-0"/> Latest Appointment</h6>
                          <h6 className="text-muted mb-0">55 Patients</h6>
                      </div>

                      <ul className="list-unstyled mb-0 p-4 pt-0">
                          {latestAppointment.map((item,index) =>{
                              return(
                              <li className="ms-0 pt-4" key={index}>
                                  <div className="d-flex align-items-center justify-content-between">
                                      <div className="d-inline-flex">
                                          <Image src={item.image} width={45} height={45} className="avatar avatar-md-sm rounded-circle border shadow" alt=""/>
                                          <div className="ms-3">
                                              <h6 className="text-dark mb-0 d-block">{item.name}</h6>
                                              <small className="text-muted">{item.date}</small>
                                          </div>
                                      </div>
                                      <div>
                                          <Link href="#" className="btn btn-icon btn-pills btn-soft-success"><MdOutlineCheck /></Link>
                                          <Link href="#" className="btn btn-icon btn-pills btn-soft-danger ms-1"><LiaTimesSolid /></Link>
                                      </div>
                                  </div>
                              </li>
                              )
                          })}
                      </ul>
                  </div>
              </div>

              <div className="col-xl-4 col-lg-6 mt-4">
                  <PersonChat/>
              </div>

              <div className="col-xl-4 col-lg-12 mt-4">
                  <div className="card border-0 shadow rounded">
                      <div className="p-4 border-bottom">
                          <div className="d-flex justify-content-between align-items-center">
                              <h6 className="mb-0"><LuUser2 className="text-primary me-1 h5"/> Patients Reviews</h6>
                              
                              <div className="mb-0 position-relative">
                                  <select className="form-select form-control" id="dailypatient">
                                      <option defaultValue>New</option>
                                      <option>Old</option>
                                  </select>
                              </div>
                          </div>
                      </div>
                      <ScrollBar style={{height:'355px'}}>
                          <ul className="list-unstyled mb-0 p-4 pt-0">
                              {patientsReviews.map((item,index) =>{
                                  return(
                                      <li className="d-flex align-items-center justify-content-between mt-4" key={index}>
                                          <div className="d-flex align-items-center">
                                              <Image src={item.image} width={65} height={65} className="avatar avatar-small rounded-circle border shadow" alt=""/>
                                              <div className="flex-1 ms-3">
                                                  <span className="d-block h6 mb-0">{item.name}</span>
                                                  <small className="text-muted">{item.speciality}</small>

                                                  <ul className="list-unstyled mb-0">
                                                      <li className="list-inline-item text-muted">({item.rate})</li>
                                                      <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                      <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                      <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                      <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                      <li className="list-inline-item"><i className="mdi mdi-star text-warning"></i></li>
                                                  </ul>
                                              </div>
                                          </div>
                                          <p className="text-muted mb-0">{item.patients} Patients</p>
                                      </li>
                                  )
                              })}
                          </ul>
                      </ScrollBar>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
