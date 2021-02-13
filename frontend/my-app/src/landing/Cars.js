import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Cars from './listcars'
import Loading from './loadin'


const CarsList=()=>{
    const [cars,setcars]=useState([])
    const [loading,setloading]=useState(false)

    const fetchdata=()=>{
        axios({
          method:'get',
          url:"http://localhost:5000/data",
          headers:{'x-access-token':localStorage.getItem('token')},
    
        }).then(res=>{
          const data=res.data
          console.log(data.cars);
          setcars(data.cars)
          setloading(true)
          
        })
      }
    
    useEffect(()=>{
        setTimeout(()=>{
            fetchdata()
        },5000)
       
      },[])
    
    return(
        <div className='container'>
        <div className="row">
          {loading?<Cars cars={cars}/>:<Loading/>}
         </div>
         </div>
    )
   
}


export default CarsList