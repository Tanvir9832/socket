import React, { useEffect, useState } from 'react';
import {io} from "socket.io-client";

const App = () => {
  const socket = io("http://localhost:4000");
  const [data,setData] = useState("");
  useEffect(()=>{
    socket.on("connect",()=>{
      console.log("connect");
    })

    socket.emit("hi","HI MAN HOW ARE YOU DOING");
    socket.on("A",(d)=>{
      setData(d)
    })
  },[])

  return (
    <div>{data}</div>
  )
}

export default App
