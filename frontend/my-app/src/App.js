import React,{useState,} from 'react'
import './App.css';
import Login from './landing/login'
import CarsList from './landing/Cars'
import axios from 'axios'
import qs from 'qs'


function App() {
  const [islogin,setislogin]=useState(false)
  const handlogin=(data)=>{
    axios({
      method:'POST',
      url:"http://localhost:5000/login",
      data: qs.stringify(data)
    }).then(res=>{
      try{
          const data=res.data
          localStorage.setItem('token',data.token)
          setislogin(true)
          alert('login succsesfuly')
      }catch{
       
        alert('hhhhhhhhhhhhhhhhhhhhhhhhhh')

      }
    
      
    })
  }


  return (
    <div className="App">
      {islogin?<CarsList/>:<Login handlogin={handlogin}/>}
    </div>
  );
}

export default App;
