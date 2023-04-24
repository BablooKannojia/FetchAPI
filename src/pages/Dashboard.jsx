import React from 'react';
import {FaBell, FaDollarSign, FaHome, FaRegSun, FaSearch, FaUser, FaArrowRight, FaCarAlt} from "react-icons/fa";

const Dashboard = () => {
    return (
        <>
           <div className='dashboard-container'>
            <div className='dash-breadcrumb text-white'>
                <div className='d-flex justify-content-between'>
                    <div className='left-inner'>
                        <p><FaHome /> / Profile</p>
                        <p><strong>Profile</strong></p>
                    </div>
                    <div className='right-inner d-flex'>
                        <div class="input-group mb-3">
                            <span class="input-group-text text-white" id="basic-addon1"><FaSearch/></span>
                            <input type="text" class="form-control" placeholder="Type here.." aria-label="type-here" aria-describedby="basic-addon1"/>
                        </div>
                            <p className='ms-3'><FaUser className='me-2'/>Sign In</p>
                            <p className='ms-3'><FaRegSun /></p>
                            <p className='ms-3'><FaBell /></p>
                    </div>
                </div>
            </div>
           </div>
           <div className='middle-dashboard d-flex justify-content-between'>
                <div className='left-wrapper d-flex'>
                    <div className='dollar-sign d-flex align-items-center text-white'>
                        <p className='dollar-before'><p className='dollor'><FaDollarSign /></p></p>
                    </div>
                    <div className='text-white ms-3'>
                        <p><strong>Babloo Kannojia</strong></p>
                        <p><small>bablookmr143@gmail.com</small></p>
                    </div>
                </div>
                <div className="right-wrapper">
                    <a href="#" className='right-link' activeclassName="active">OVERVIEW</a>
                    <a href="#" className='right-link ms-3' activeclassName="active">TEAM</a>
                    <a href="#" className='right-link ms-3' activeclassName="active">PROJECTS</a>
                </div>
            </div>
            <div className='card-section mt-5'>
                <div className='row'>
                    <div className='col-lg-3'>
                        <div className='card-main mt-5'>
                            <div className="card welcome">
                                <div className="card-body pt-0 text-white">
                                    <h3 className="card-title">Welcome back!</h3>
                                    <p className="card-text">Nice to see you, Babloo Kannojia</p>
                                    <a href="#" className="btn btn-record me-2 text-white mt-5">Tap to Record<FaArrowRight /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className='card p-3'>
                            <div class="row">
                                <div class="col-md-4 col-sm-6">
                                    <div class="progress blue bg-white">
                                        <span class="progress-left">
                                            <span class="progress-bar"></span>
                                        </span>
                                        <span class="progress-right">
                                            <span class="progress-bar"></span>
                                        </span>
                                        <div class="progress-value">68%</div>
                                    </div>
                                </div>
                                <div class="col-md-4 col-sm-6">
                                    <div class="card battery-health p-2 text-white">
                                        <div className='d-flex justify-content-between'>
                                            <div className='battery-content'>
                                                <p>Battery Health</p>
                                                <p><strong>76%</strong></p>
                                            </div>
                                            <div className='right-icon'>
                                                <p><FaCarAlt /></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card battery-health mt-2 p-2 text-white">
                                        <div className='d-flex justify-content-between'>
                                            <div className='battery-content'>
                                                <p>Battery Health</p>
                                                <p><strong>76%</strong></p>
                                            </div>
                                            <div className='right-icon'>
                                                <p><FaCarAlt /></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 col-sm-6">
                                    <div class="card battery-health p-2 text-white">
                                        <div className='d-flex justify-content-between'>
                                            <div className='battery-content'>
                                                <p>Efficiency</p>
                                                <p><strong>+20%</strong></p>
                                            </div>
                                            <div className='right-icon'>
                                                <p><FaCarAlt /></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card battery-health mt-2 p-2 text-white">
                                        <div className='d-flex justify-content-between'>
                                            <div className='battery-content'>
                                                <p>This Week</p>
                                                <p><strong>1.342km</strong></p>
                                            </div>
                                            <div className='right-icon'>
                                                <p><FaCarAlt /></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3'>
                        <div className='card profile'>
                            <div className='card-body text-white'>
                                <p><strong>Profile Information</strong></p>
                                <p>lorem ipsum dolor it lorem ipsum dolor it lorem ipsum dolor it lorem ipsum dolor it</p>
                                <p className='mt-4'><span className='text-label'>Full Name :</span>Babloo Kannojia</p>
                                <p className='mt-2'><span className='text-label'>Mobile :</span>8115353051</p>
                                <p className='mt-2'><span className='text-label'>Email :</span>abc@gmail.com</p>
                                <p className='mt-2'><span className='text-label'>Location :</span>India</p>
                                <p className='mt-2'><span className='text-label'>Social :</span>Babloo Kannojia</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;