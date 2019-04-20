import React, { Component } from 'react';
import { Header } from "./styled";
import { Nav } from "./styled";
import { Transport } from "./styled";
import { Deliver } from "./styled";
import { Bottom } from "./styled";
import {HashRouter as Router,NavLink} from "react-router-dom";
import Img from "../../img/use.png";
export default class mine extends Component {
  render() {
    return (
      <div>
        <Header>
        <div className="img_user"><img src={Img} /></div>
        <div className="box">
          <div className="login">
            <NavLink className="login" to="./login/index.js">
              登陆/注册
            </NavLink>
          </div>
        </div>
        </Header>
        <Nav>
          <div className="nav">
            <div className="Order">商城订单</div>
            <div className="see">查看全部订单&gt;</div>
          </div>
          <div className="details">
            <div className="payment four">
              <img src="https://m.51taouk.com/static/svg/icon_order_not_pay.svg"></img>
              <p>待付款</p>
            </div>
            <div className="plan four">
              <img src="https://m.51taouk.com/static/svg/icon_order_wait_ship.svg"></img>
              <p>待发货</p>
            </div>
            <div className="Shipped four">
              <img src="https://m.51taouk.com/static/svg/icon_order_shipping.svg"></img>
              <p>已发货</p>
            </div>
            <div className="Received four">
              <img src="https://m.51taouk.com/static/svg/icon_order_reach.svg"></img>
              <p>已寄到</p>
            </div>
          </div>
        </Nav>
        <Transport>
          <div className="both">
            <div className="transport">
              <img src="https://m.51taouk.com/static/svg/icon_my_transport.svg"></img>
              <h6>我的转运</h6>
              <h5>查看海淘转运订单&gt;</h5>
            </div>
            <div className="transport">
              <img src="https://m.51taouk.com/static/svg/icon_my_transport.svg"></img>
              <h6>我要发货</h6>
              <h5>创建订单&gt;</h5>
            </div>
          </div>
        </Transport>
        <Deliver>
            <div className="information">
                <div className="information_branch">
                  <img src="https://m.51taouk.com/static/svg/icon_my_normal_info.svg"></img>
                  <h4>常用信息</h4>
                  <h3>创建订单&gt;</h3>
                </div>
                <div className="information_branch">
                  <img src="https://m.51taouk.com/static/svg/icon_my_red_bounds.svg"></img>
                  <h4>优惠券</h4>
                  <h3>无可用优惠券&gt;</h3>
                </div>
                <div className="information_branch">
                  <img src="https://m.51taouk.com/static/svg/icon_my_money.svg"></img>
                  <h4>我的余额</h4>
                  <h3>￥0.00</h3>
                </div>
                <div className="information_branch">
                  <img src="https://m.51taouk.com/static/svg/icon_my_point.svg"></img>
                  <h4>我的积分</h4>
                  <h3>0&gt;</h3>
                </div>
            </div>
        </Deliver>
        <Bottom>
          <div class="bottom">
            <div className="mine">
              <h2>关于我们</h2>
              <p>&gt;</p>
            </div>
            <h1>51taouk v2.35.6902</h1>
          </div>
        </Bottom>
      </div>
    )
  }
}