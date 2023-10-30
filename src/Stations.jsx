import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BASE_URL } from './const';
import './Station.css'

export default function Stations() {

    const [data, setData] = useState();

    useEffect(() => {
        async function fetchData() {
            const url = BASE_URL;
            await axios.get(url).then(
                res => {
                    console.log(res.data);
                    setData(res.data);
                },
                err => {
                    console.log(err)
                }
            )
        };
        fetchData();
    }, [])

    return (
        <div>
            <table className="bordered-table">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Area</th>
                        <th>Line</th>
                        <th>Station</th>
                    </tr>
                </thead>
                <tbody>
                    {data ? data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.area}</td>
                            <td>{item.line}</td>
                            <td>{item.station}</td>
                        </tr>
                    )) : "loading"}
                </tbody>
            </table>

        </div>
    );
}
