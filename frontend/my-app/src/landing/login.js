import React,{useState} from 'react'


const Login=({handlogin})=>{
    const [data,setdata]=useState({
        username:'',
        password:''
    })
const handlchange=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setdata({...data,[name]:value})
}
    
    return(
        <div className='container'>
        <div className="row">
          
 
           <div className="input-field">
             <input value={data.username} name='username'
             onChange={(e)=>handlchange(e)}
             id="first_name1" required type="text" className="validate"/>
             <label className="" htmlFor="first_name2">Usrname</label>
           </div>
           <div className="input-field ">
             <input value={data.password}
             name='password'
             type="password"
             onChange={(e)=>handlchange(e)}
             className="validate"/>
             <label className="" required htmlFor="first_name2">Password</label>
           </div>
         <div className="input-field ">
         <button className="btn waves-effect waves-light"
         onClick={()=>handlogin(data)}
         type="submit" name="action">Sign In</button>
           </div>
                          
           
         </div>
         </div>
    )
   
}

export default Login