import React, { Component } from "react";
import Search from "./search";
import Slide from './slide';
import CountDown from './countDown'
import SwiperImg from './swiperImg'
import { SearchStyle, SlideStyle, CountDownStyle } from './homeStyle'
export default class home extends Component {
  render() {
    return (
      <div style={{marginBottom:'0.5rem'}}>
        <SearchStyle>
          <Search />
        </SearchStyle>
        <SlideStyle>
          <Slide />
        </SlideStyle>
        <CountDownStyle>
          <CountDown />
        </CountDownStyle>
          <SwiperImg/>
      </div>
    );
  }
}
