import React,{useEffect,useState} from 'react'
import './App.css';
import Login from './landing/login'
import CarsList from './landing/Cars'
import axios from 'axios'
import qs from 'qs'


function App() {
  const [islogin,setislogin]=useState(false)

  const checkislogin=()=>{
    const token=localStorage.getItem('token')
    if(token){
      setislogin(true)
    }else{
      setislogin(false)

    }
  }
  useEffect(()=>{
    checkislogin()
  },[])

  const logout=()=> {
    setislogin(false)
    localStorage.removeItem('token')
  }

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
      {islogin?<CarsList logout={logout}/>:<Login handlogin={handlogin}/>}
    </div>
  );
}

export default App;
