import React, { Component } from 'react';
import Search from "../home/search";
import Classification from "./classification"

export default class list extends Component {
  render(){
    return(
        <div>
          <Search></Search>
          <Classification></Classification>
        </div>
    )
  }
}