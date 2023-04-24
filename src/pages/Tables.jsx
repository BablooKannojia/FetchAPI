import React, { useEffect, useState } from 'react';
import {FaBell, FaHome, FaRegSun, FaSearch, FaUser} from "react-icons/fa";

const Tables = () => {

    const [isOnline, setIsOnline] = useState(navigator.onLine);

    const [data, setData] = useState();

    useEffect(() => {
        fetch("https://mocki.io/v1/ea39d6c9-4b9f-4a46-8986-2043dbabab2f")
            .then((result) => {
                result.json().then((resp) => {
                    console.warn("result", resp)
                    setData(resp);
                })
            })
    }, [])

    useEffect(() => {
        const handleStatusChange = () => {
            setIsOnline(navigator.onLine);
        }

        window.addEventListener('online', handleStatusChange);

        window.addEventListener('offline', handleStatusChange);

        return () => {
            window.removeEventListener('online', handleStatusChange);
            window.removeEventListener('offline', handleStatusChange);
        };
    }, [isOnline]);

    return (
        <>
           <div className='dashboard-container'>
            <div className='dash-breadcrumb text-white'>
                <div className='d-flex justify-content-between'>
                    <div className='left-inner'>
                        <p><FaHome /> / Tables</p>
                        <p><strong>Tables</strong></p>
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
           <div className='author-table'>
            <div className='table-main text-white'>
                <h4>Authors Table</h4>
                <table className="table text-white">
                  <thead>
                    <tr>
                      <th scope="col">AUTHOR</th>
                      <th scope="col">FUNCTION</th>
                      <th scope="col">STATUS</th>
                      <th scope="col">EMPLOYED</th>
                      <th scope="col">ACTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                    data.map((users, index) => (

                      <tr key={index}>
                        <td>{users.name}</td>
                        <td>{users.function}</td>
                        <td>
                                {isOnline ? (
                                    <h1 className='online'>Online</h1>
                                ) : (
                                    <h1 className='offline'>Offline</h1>
                                )}

                        </td>
                        <td>{users.employed}</td>
                        <td>{users.action}</td>
                      </tr>

                    ))
                    }
                  </tbody>
                </table>
              </div>
            </div>
        </>
    );
};

export default Tables;