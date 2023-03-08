import React,{useState,useEffect} from 'react'

function Result() {
    const [res, setRes] = useState('');
    useEffect(()=>{
    fetch("http://localhost:3000/api").then(
      response => response.json()
    ).then(
      data=>{
        setRes(data.result)
      }
    )
  },[])
  
  return (
    <div>{res}</div>
  )
}

export default Result