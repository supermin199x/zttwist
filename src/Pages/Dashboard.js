import React, { useState, useEffect } from "react";
import axios from 'axios';
import "../Pages/Dashboard.css";
import Navbar from  "../Components/Navbar";

const Dashboard = () => {
    
    const [data, setData] = useState({ users: [] });

    useEffect(async () => {
    const result = await axios(
      'http://127.0.0.1:1880/selectmachine',
    );

    setData({ 
      users: result.data 
        });
    }, 
    
    []);

    return (
        <div className={'dashboard'}>
            <div className={'dashboard-layout'}>
                <div className={'dashboard-navbar'}>
                    <Navbar />
                </div>    
                <div className={'namepage'}>
                    <h1>Dashboard</h1>
                </div>
                <div className={'card'}>
                    <div className={'card-show-all'}>
                        <p className={'card-h-all'}>
                            <label>Machine ALL</label>
                        </p>
                        <p className={'card-b'}>
                            {data.users.map(user => (
                                <label>เครื่องหมายเลขที่ : {user.countMachineNo}</label>
                            ))}
                        </p>
                    </div>
                    <div className={'card-show-on'}>
                    <p className={'card-h-on'}>
                            <label>Machine ON</label>
                        </p>
                        <p className={'card-b'}>
                        <label>หมายเลขเครื่อง : 1</label>
                            <label>หมายเลขเครื่อง : 2</label>
                            <label>หมายเลขเครื่อง : 3</label>
                            <label>หมายเลขเครื่อง : 4</label>
                            <label>หมายเลขเครื่อง : 5</label>
                            <label>หมายเลขเครื่อง : 6</label>
                            <label>หมายเลขเครื่อง : 7</label>
                        </p>
                    </div>
                    <div className={'card-show-off'}>
                    <p className={'card-h-off'}>
                            <label>Machine OFF</label>
                        </p>
                        <p className={'card-b'}>
                            <label>หมายเลขเครื่อง : 8</label>
                            <label>หมายเลขเครื่อง : 9</label>
                            <label>หมายเลขเครื่อง : 10</label>
                        </p>
                    </div>
                    <div className={'card-show-overview'}>
                    <p className={'card-h-overview'}>
                            <label>Task Overiew</label>
                        </p>
                        <p className={'card-b'}>
                            <label>Working 70 %</label>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;