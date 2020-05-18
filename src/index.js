import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import {Login} from './component/loginpage';
import Home from './component/home';
function Main(){


    return(
        <div className="main">
        <BrowserRouter>
       
            <Switch>
            <Route exact path="/login/" component={Login}></Route>
            <Route exact path="/login/dashboard" component={Home}></Route>
        </Switch>
        </BrowserRouter>
        </div>
    )    
}

ReactDOM.render(<Main/>,document.getElementById('root'));

