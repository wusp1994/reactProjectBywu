import React,{Component} from "react";
import { Switch,Route,Redirect } from "react-router-dom"

import Index from "../view/index/index";
import Details from "../view/detail/index";
import User from "../view/user/index";
import About from "../view/about/index";
import Book from "../view/book/index";

class RouterIndex extends Component{
  render(){
    return (
      <Switch>
        <Route path="/" exact render={()=>(<Redirect to="/index" />)}/>
        <Route path="/index" component={Index}/>
        <Route path="/details" component={Details}/>
        <Route path="/user" component={User}/>
        <Route path="/book" component={Book}/>
        <Route path="/about" component={About}/>
      </Switch>
    );
  }
}

export default RouterIndex;