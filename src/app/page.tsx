"use client"
import React from "react";
import axios from "axios";



export default function Home() {

  const [users, setUsers] = React.useState([])

  const fetchUsers = async () => {
    const {data} = await axios.get(
      'http://localhost:3000/api/users'
    );
    console.log('data = ', userArray);
    
    setUsers(data)
  }


    const userArray = users.length ? users.map((user)=> {
      return (
        <div className="user">
          <div>{user.name}</div>
          <div>{user.username}</div>
          <div>{user.email}</div>
        </div>
      ) 
    }) : []



  return (
    <main className="container"> 
      <button className="button" onClick={fetchUsers}>GET DATA</button>
      <div className="body">
          {userArray}
      </div>
    </main>
  );
}
