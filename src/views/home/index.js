import React, { Component } from "react";
import Search from "./search";
import Slide from './slide';
import './homeStyle.css'

export default class home extends Component {
  render() {
    return (
      <div>
          <Search/>
          <Slide/>
      </div>
    );
  }
}
