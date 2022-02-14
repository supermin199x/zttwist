import React, { useState, useEffect } from "react";
import axios from 'axios';
import "../Components/Table.css";

const Table = () => {

    const [data, setData] = useState({ datas: [] });

    useEffect(async () => {
    const result = await axios(
      'http://127.0.0.1:1880/selectall',
    );

    setData({ 
      datas: result.data 
        });
    }, 
    []);
   
    const [namePage, setnamePage] = useState({
        table1: 'ตารางแสดงข้อมูล',
        table2: 'สรุป',
    });

    const setName = () => {
        setnamePage({
            title: 'Machine ALL'
        });
    }

    return (
        <div className={'table'}>
            <div className={'table-show-l'}>
                <div className={'table-h-l'}>
                    <label onLoad={setName}>{namePage.table1}</label>
                </div>
                <div className={'table-b-l'}>
                    <table>
                        <thead>
                            <td className="td-no">No</td>
                            <td className="td-datetime">DateTime</td>
                            <td className="td-machine">MachineNo.</td>
                            <td className="td-sensor">SensorNo.</td>
                            <td className="td-errortime">ErrorTime.</td>
                            <td className="td-cleartime">ClearTime.</td>
                            <td className="td-faulttime">FaultTime(mins).</td>
                        </thead>
                        <tbody>
                            {data.datas.map(machine => (
                                <tr>
                                    <td>{}</td>
                                    <td>{machine.dateTime.substring(0, 10)}</td>
                                    <td>{machine.MachineNo}</td>
                                    <td>{machine.SensorNo}</td>
                                    <td>{machine.ErrorTime.substring(11, 16)}</td>
                                    <td>{machine.ClearTime.substring(11, 16)}</td>
                                    <td>{machine.FaultTime}</td>
                                </tr> 
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className={'table-show-r'}>
                <div className={'table-h-r'}>
                    <label onLoad={setName}>{namePage.table2}</label>
                </div>
                <div className={'table-b-r'}>
                    <table>
                        <thead>
                            <td>No</td>
                            <td>name</td>
                            <td>lastname</td>
                        </thead>
                        <tbody>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Table;