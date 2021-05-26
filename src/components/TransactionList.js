import React,{useContext} from 'react'
import {Transaction} from "./Transaction";
import {GlobalContext} from "../context/GlobalState"
export const TransactionList = () => {
  const {transaction}  = useContext( GlobalContext);
  console.log(transaction);
    return (
        <>
        <h3>History</h3>
        <ul className="list">
          {transaction.map((transaction,ind)=>{
                 return <Transaction key={ind} transaction={transaction} />   
                   
          })}

        </ul>
        </>
    )
}
