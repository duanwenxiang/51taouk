/* eslint-disable jsx-a11y/alt-text */
import React, { Component, Fragment } from 'react'

export default class countDown extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor() {
        super();
        var today = new Date(),
        hour = today.getHours(),
        minute = today.getMinutes(),
        seconds = today.getSeconds();
        this.state = {
            hour:hour,
            minute:minute,
            seconds:seconds
        }
    }
    render() {
        return (
            <Fragment>
                <div className="top">
                    <p><img src="https://m.51taouk.com/static/svg/icon_product_time.svg" /><span>限时抢购</span></p>
                    <p><b>距离结束还剩</b><span>{this.state.hour}</span>:<span>{this.state.minute}</span>:<span>{this.state.seconds}</span></p>
                </div>
                <div className="bottom">
                    <img src="https://resource.51taouk.com/AdminImages/Content1/1/26b4480b-e8f9-4433-bc41-3a357f967fd5.png?imageMogr2/format/webp/thumbnail/x536" />
                </div>
            </Fragment>
        )
    }
    tick = () => {
        var Today = new Date(),
        Hour = Today.getHours(),
        Minute = Today.getMinutes(),
        Seconds = Today.getSeconds();
        this.setState({
            hour:Hour,
            minute:Minute,
            seconds:Seconds
        })
    }
    componentDidMount() {
        // 定时器，可以修改1000为自己想要的时间，
        this.interval = setInterval(() => this.tick(), 1000);  
    }
}
