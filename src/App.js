import logo from './logo.svg';
import './App.css';
import { useEffect,useState } from 'react';

function App() {
  const [data,setData]= useState([])
 // const dummy= "https://dummy.restapiexample.com/api/v1/employees"
  
  useEffect(()=>{
    //const facth= "https://dummy.restapiexample.com/api/v1/employees"
    fetch("https://dummyjson.com/products/categories").then(result=>{
      result.json().then((resp)=>{
        setData(resp)
      })
    
    })
    
  },[])
  console.log(data);
  return (
    <div className="App">
      <h1>Neha</h1>
      <td>Id</td>
    {
      data.map((item)=>
      <tr>
        <td></td>
      </tr>
      
      )
    }
   
    </div>
  );
}

export default App;
