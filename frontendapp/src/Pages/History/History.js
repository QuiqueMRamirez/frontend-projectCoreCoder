import React from 'react'
import TableFilter from '../../Components/TableFilter/Table'
import './History.css'
const History = ({ height, width}) => {


    return (
        <>
            <div className="containerHistory">
                <div className="contenedor">
                <TableFilter/>
                </div>
                
            </div>
        </>
    )
}

export default History
