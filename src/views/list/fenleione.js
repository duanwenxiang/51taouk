import React,{Component,Fragment} from "react";
import {HashRouter as Router,Route,Link,NavLink,Switch} from "react-router-dom";
import "./fenleione.css";
import Image from "../../img/fenlei1.webp";

export default class fenleione extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <Fragment>
                <Router>
                    <div className="fenlei_right">
                        <div className="img">
                            <img src={Image} alt=""/>
                        </div>
                        <ul className="fenlei_shop">
                            <li>
                                <NavLink to="/list/muying1">
                                    <img src={Image} alt=""/>
                                    <p>营养辅食</p>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/list/muying1">
                                    <img src={Image} alt=""/>
                                    <p>原味奶粉</p>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/list/muying1">
                                    <img src={Image} alt=""/>
                                    <p>儿童保健</p>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/list/muying1">
                                    <img src={Image} alt=""/>
                                    <p>妈妈必备</p>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/list/muying1">
                                    <img src={Image} alt=""/>
                                    <p>宝宝喂养</p>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/list/muying1">
                                    <img src={Image} alt=""/>
                                    <p>宝宝洗护</p>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </Router>
            </Fragment>
        )
    }
}

