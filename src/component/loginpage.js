import React,{useState} from 'react';
import { useHistory } from 'react-router-dom';
import './css/login.css'
export  function Login(){
    
    const [uname,setuname]=useState();
    const [upass,setupass]=useState();
    const [user,setuser]=useState(false);
  const history = useHistory();
function handlechangeuname(e){
    e.preventDefault();
    
    setuname(e.target.value);
}
function handlechangeupass(e){
    e.preventDefault();

    setupass(e.target.value);
}
function handlesubmit(e){
        e.preventDefault();
        if(uname==="admin" && upass==="admin123"){
            
               console.log("yay")

               history.push("login/dashboard");
               
           

        }
        else{
            setuser(false)
            setuname("")
            setupass("")
            alert("credentials incorrect")
        }
}
    return(
        <div className="login">
            <h4>login page</h4>
            <input type="text" name="username" onChange={handlechangeuname} placeholder="enterusername" value={uname}/>
            <br/>
            <input type="password" name="password" onChange={handlechangeupass}  placeholder="enterpassword"value={upass}/><br/>
            <input type="button" onClick={handlesubmit} value="login"/>
        </div>
    )
}


