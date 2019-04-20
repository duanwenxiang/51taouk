import React, { Component } from 'react';
import TabBarCom from "@/common/tabBar"
import {HashRouter,Switch,Route,Redirect} from 'react-router-dom'
import Home from "@/views/home"
import List from "@/views/list"
import Shopping from "@/views/shopping"
import Mine from "@/views/mine"
import MyRouter from "@/common/myRouter"

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/list" component={List}/>
          <MyRouter path="/shopping" component={Shopping}/>
          <Route path="/mine" component={Mine}/>
          <Redirect path="/" to="/home"/>
        </Switch>
        <TabBarCom/>
      </HashRouter>
    )
  }
}

export default App;
