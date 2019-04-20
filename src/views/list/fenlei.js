import React,{Component} from "react";
import Fenleione from "./fenleione";
import Fenleitwo from "./fenleitwo";
import Fenleithr from "./fenleithr";
import Fenleifou from "./fenleifou";
import Fenleifiv from "./fenleifiv";
import "./fenlei.css";


export default class fenlei extends Component{
    constructor(props){
        super(props);
        this.state={
            tabs:[
                {tabName:"母婴用品",id:1},
                {tabName:"营养保健",id:2},
                {tabName:"美容美发",id:3},
                {tabName:"英式生活",id:4},
                {tabName:"英伦轻奢",id:5},
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
        let isBox1=this.state.currentIndex===1?'block':'none';
        let isBox2=this.state.currentIndex===2?'block':'none';
        let isBox3=this.state.currentIndex===3?'block':'none';
        let isBox4=this.state.currentIndex===4?'block':'none';
        let isBox5=this.state.currentIndex===5?'block':'none';

        let tabLists=this.state.tabs.map(function (res,index) {
            let tabStyles=res.id===this.state.currentIndex?'mie active':'mie';

            return <li key={index} onClick={this.tabChoiced.bind(_this,res.id)}  className={tabStyles} >{res.tabName}</li>
        }.bind(_this));

        return(
            <div className="fenlei">
                <ul className="fenlei_tabbar">
                    {tabLists}
                </ul>
                <div className="fenlei_content">
                    <div style={{"display":isBox1}}>
                        <Fenleione></Fenleione>
                    </div>
                    <div style={{"display":isBox2}}>
                        <Fenleitwo></Fenleitwo>
                    </div>
                    <div style={{"display":isBox3}}>
                        <Fenleithr></Fenleithr>
                    </div>
                    <div style={{"display":isBox4}}>
                        <Fenleifou></Fenleifou>
                    </div>
                    <div style={{"display":isBox5}}>
                        <Fenleifiv></Fenleifiv>
                    </div>
                </div>
            </div>
        )
    }
}
