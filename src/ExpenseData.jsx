import { useState } from "react";
import './styles.css'

export default function ExpenseData({ boilerPlate, expenses, setExpenses, saveData }) {

    return (
        <>
            <div className="forms">
                <form action="">
                    <input type="text" placeholder="transDate" onChange={(e) => {expenses.transDate = e.target.value; setExpenses(expenses)}} />
                    <input type="text" placeholder="exsIns" onChange={(e) => {expenses.exsIns = e.target.value; setExpenses(expenses)}} />
                    <input type="text" placeholder="ncLevel" onChange={(e) => {expenses.ncLevel = e.target.value; setExpenses(expenses)}} />
                    <input type="text" placeholder="category" onChange={(e) => {expenses.category = e.target.value; setExpenses(expenses)}} />
                    <input type="text" placeholder="category2" onChange={(e) => {expenses.category2 = e.target.value; setExpenses(expenses)}} />
                    <input type="text" placeholder="particulars" onChange={(e) => {expenses.particulars = e.target.value; setExpenses(expenses)}} />
                    <input type="text" placeholder="purFrm" onChange={(e) => {expenses.purFrm = e.target.value; setExpenses(expenses)}} />
                    <input type="text" placeholder="rateQty" onChange={(e) => {expenses.rateQty = e.target.value; setExpenses(expenses)}} />
                    <input type="text" placeholder="DR" onChange={(e) => {expenses.DR = e.target.value; setExpenses(expenses)}} />
                    <input type="text" placeholder="CR" onChange={(e) => {expenses.CR = e.target.value; setExpenses(expenses)}} />
                    <input type="text" placeholder="debt" onChange={(e) => {expenses.debt = e.target.value; setExpenses(expenses)}} />
                    <input type="text" placeholder="lent" onChange={(e) => {expenses.lent = e.target.value; setExpenses(expenses)}} />
                    <input type="text" placeholder="cash" onChange={(e) => {expenses.cash = e.target.value; setExpenses(expenses)}} />
                    <input type="text" placeholder="bal" onChange={(e) => {expenses.bal = e.target.value; setExpenses(expenses)}} />
                    <input type="text" placeholder="debtRunningTotal" onChange={(e) => {expenses.debtRunningTotal = e.target.value; setExpenses(expenses)}} />
                    <input type="text" placeholder="cashBal" onChange={(e) => {expenses.cashBal = e.target.value; setExpenses(expenses)}} />
                    <input type="submit" value="Submit" onClick={saveData}/>
                </form>
            </div>
        </>
    )
}