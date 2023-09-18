import { useState, useEffect } from 'react'
import './styles.css'
import ExpenseData from './ExpenseData'
import axios from 'axios'

// import ExpenseData from './ExpenseData';

function App() {
  const boilerPlate = {
    'transDate': '',
    'exsIns': '',
    'ncLevel': '',
    'category': '',
    'category2': '',
    'particulars': '',
    'purFrm': '',
    'rateQty': '',
    'DR': '',
    'CR': '',
    'debt': '',
    'lent': '',
    'cash': '',
    'bal': '',
    'debtRunningTotal': '',
    'cashBal': ''
  }

  const mongoJson = {
    "dataSource": "Cluster0","database": "ExpenseTracker","collection": "ExpenseTracker"
}

  const [expenses, setExpenses] = useState(boilerPlate);
  // const url = 'https://data.mongodb-api.com/app/data-syoug/endpoint/data/v1/action/insertOne'
  const url = 'https://data.mongodb-api.com/app/data-syoug/endpoint/data/v1/action/find'
  const api_key = 'ayGKqFrE5hqSFjVuWVAoA7aOHUJxoDXpyJC903ifQLvtKyINHNoYXtioWWHg1gwe'

  const v_headers = { 
   'Access-Control-Allow-Origin': '*'
  ,'Access-Control-Allow-Headers': '*'
  ,'Content-type': 'application/json'
  ,'api-key': api_key
}

  const getData = async (e) => {
    e.preventDefault()    

    let result = await fetch('https://data.mongodb-api.com/app/data-syoug/endpoint/data/v1/action/find', {
      // mode: 'no-cors',
      method: 'POST',
      body: JSON.stringify({"dataSource": "Cluster0","database": "ExpenseTracker","collection": "ExpenseTracker"}),
      headers: v_headers
    }).then(response => console.log('response then', response))
      .then(data => setExpenses(boilerPlate))
      .catch(error => {
        console.error('There was an error!', error)
      })

    // axios.post('https://data.mongodb-api.com/app/data-syoug/endpoint/data/v1/action/find', mongoJson, {
    //   headers: v_headers
    // })
    // .then(response => {
    //   console.log("response",response)
    // })
    // .catch(error => {
    //   console.log("error",error)
    // })
  }

  const saveData = async (e) => {
    e.preventDefault()

    let currentDate = new Date()    

    mongoJson.document = expenses

    console.log('saveData:: ', currentDate, JSON.stringify(mongoJson))

    let sample = {dataSource:"Cluster0",database:"ExpenseTracker",collection:"ExpenseTracker",document:{transDate:"1952",exsIns:"Roopa"}}

    let result = await fetch('https://data.mongodb-api.com/app/data-syoug/endpoint/data/v1/action/insertOne', {
      mode: 'no-cors',
      method: 'POST',
      body: sample,
      headers: { 'Content-Type': 'application/json'
                , 'Access-Control-Request-Headers': '*'
                ,'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT,DELETE'
                ,'Access-Control-Allow-Headers':'Origin, X-Requested-With, Content-Type, Accept, Authorization'
                ,'Accept':'*/*'
                ,'Connection':'keep-alive'
                ,'Accept-Encoding':'gzip, deflate, br'
                , 'api-key': api_key }
    }).then(response => console.log('response then', response))
      .then(data => setExpenses(boilerPlate))
      .catch(error => {
        console.error('There was an error!', error)
      })
  }

  return (<>
    <h1>Hisab Kitab</h1>

    <p>Sheets API Quickstart</p>

    {console.log('expenses', expenses)}
    {
      expenses !== null ? <ExpenseData boilerPlate={boilerPlate} expenses={expenses} setExpenses={setExpenses} saveData={getData} /> : <h4>Nothing to show</h4>
    }

  </>);
}

export default App
