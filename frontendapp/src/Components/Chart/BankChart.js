import React from 'react'
import Chart from 'react-google-charts';

const BankChart = ({type,width,height,data}) => {
    return (
        <>
           <Chart chartType={type} width={width} height={height} data={data}/>
        </>
    )
}

export default BankChart
