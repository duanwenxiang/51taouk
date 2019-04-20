import React, { Component } from 'react'
import loading from '@/img/loading.gif'
export default class index extends Component {
  render() {
    return (
      <div style={{width:"100%",height:"100%",position:"fixed",top:"0",zIndex:"5"}}>
        <img src={loading} style={{width:"100%",height:"100%"}}/>
      </div>
    )
  }
}
