import React,{useState,useEffect, useContext}from 'react'

import './App.css'
import Header from './components/Header'
import Register from './components/Register'
import { UserContext } from './context/UserContext'
// import Table from './Table'
// import {Users} from './users'


const App =() =>{

// const [query,setQuery] = useState("")
// const keys =["firstname","lastname","email","phone","address"]
// const search =(data) =>{
//   return data.filter((item)=>keys.some(key=>item[key].toLowerCase().includes(query))
//   )}

// console.log(query)

const [message,setMessage] = useState("")
const [token] = useContext(UserContext);


const getWelcomeMessage = async () => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch("/api", requestOptions);
  const data = await response.json();

  if (!response.ok) {
    console.log("something messed up");
  } else {
    setMessage(data.message);
  }
};

useEffect(() => {
  getWelcomeMessage();
}, []);
  return(
    <>
    {/* <input 
    type="text"
    placeholder="Search...."
    className="search"
    onChange={(e)=>setQuery(e.target.value)}
    />
    <Table data={search(Users)}/> */}

<Header title={message}/>
    <div className="columns">
      <div className="column"></div>
      <div className="column">
        {
          !token ? (
            <div className="column">
              <Register/><p>Login</p>
            </div>
          ):(
            <p>Table</p>
          )
        }
      </div>
      <div className="column"></div>
    </div>
    </>
  )
}

export default App;
