import React, { Component } from 'react';
import "./classification.css"
import Fenlei from "./fenlei";

export default class classification extends Component {
    constructor(props){
        super(props);
        this.state={
            tabs:[
                {tabName:"按分类",id:1},
                {tabName:"按品牌",id:2},
            ],
            currentIndex:1,
        };
    }
    componentDidMount(){

    }
    tabChoiced=(id)=>{
        this.setState({
            currentIndex:id
        });
    }
    render(){
        let _this=this;
        let isBox1Show=this.state.currentIndex==1 ? 'block' : 'none';
        let isbox2Show=this.state.currentIndex==2 ? 'block' : 'none';

        let tabList=this.state.tabs.map(function (res,index) {
            let tabStyle=res.id==this.state.currentIndex ? 'subCtrl active' : 'subCtrl';

            return <li key={index} onClick={this.tabChoiced.bind(_this,res.id)} className={tabStyle}>{res.tabName}</li>
        }.bind(_this));

        return(
            <div className="tab_content">
                <ul className="subNavWrap">
                    {tabList}
                </ul>
                <div className="classification">
                    <div style={{"display":isBox1Show}}>
                        <Fenlei></Fenlei>
                    </div>
                    <div style={{"display":isbox2Show}}>
                        222
                    </div>
                </div>
            </div>
        )
    }
}