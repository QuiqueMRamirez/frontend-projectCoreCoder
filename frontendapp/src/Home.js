import React from 'react'
import './Home.css'
import Transactions from './Transactions';
import ExpenseIncome from './ExpenseIncome'
import Charts from './Components/Chart/BankChart';

const data = [
    ["Element", "Density", { role: "style" }],
    ["Copper", 8.94, "#b87333"], // RGB value
    ["Silver", 10.49, "silver"], // English color name
    ["Gold", 19.3, "gold"],
    ["Platinum", 21.45, "color: #e5e4e2"] // CSS-style declaration
  ];

const Home = () => {
    return (
        <>
        <div className="containerIndexHome">
            <Transactions height width/>
            <ExpenseIncome height width/>
            <Charts type="ColumnChart" width="90%" height="400px" data={data}/>
        </div>
        </>
        
    )
}

export default Home
