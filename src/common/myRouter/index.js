import React, { Component,Fragment } from 'react'
import {Route,Redirect} from 'react-router-dom'


export default class index extends Component {
  render() {
    let {path,component} = this.props;
    return (
      <Fragment>
        {sessionStorage.getItem("Token")?<Route path={path} component={component}/>:<Redirect to="/mine"/>}
      </Fragment>
    )
  }
}
