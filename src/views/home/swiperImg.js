/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "@/mapprops/home";
import Swiper from 'swiper';
import "swiper/dist/css/swiper.css";
import { SwiperImgStyle } from './homeStyle'


class swiperImg extends Component {
    constructor() {
        super();
        this.state = {
            goods: [
                {
                    img: "https://resource.51taouk.com/AdminImages/Product/6/8fab664a-b70c-4ca3-abe5-19fdb57224e3.jpg?imageMogr2/format/webp/thumbnail/x200",
                    info: "【包邮包税】Lilycharmed金色生肖猪手链HappyChineseNewYear",
                    price1: 38.45,
                    price2: 58.45,
                },
                {
                    img: "https://resource.51taouk.com/AdminImages/Product/6/8fab664a-b70c-4ca3-abe5-19fdb57224e3.jpg?imageMogr2/format/webp/thumbnail/x200",
                    info: "【包邮包税】Lilycharmed金色生肖猪手链HappyChineseNewYear",
                    price1: 38.45,
                    price2: 58.45,
                },
                {
                    img: "https://resource.51taouk.com/AdminImages/Product/6/8fab664a-b70c-4ca3-abe5-19fdb57224e3.jpg?imageMogr2/format/webp/thumbnail/x200",
                    info: "【包邮包税】Lilycharmed金色生肖猪手链HappyChineseNewYear",
                    price1: 38.45,
                    price2: 58.45,
                },
                {
                    img: "https://resource.51taouk.com/AdminImages/Product/6/8fab664a-b70c-4ca3-abe5-19fdb57224e3.jpg?imageMogr2/format/webp/thumbnail/x200",
                    info: "【包邮包税】Lilycharmed金色生肖猪手链HappyChineseNewYear",
                    price1: 38.45,
                    price2: 58.45,
                },
                {
                    img: "https://resource.51taouk.com/AdminImages/Product/6/8fab664a-b70c-4ca3-abe5-19fdb57224e3.jpg?imageMogr2/format/webp/thumbnail/x200",
                    info: "【包邮包税】Lilycharmed金色生肖猪手链HappyChineseNewYear",
                    price1: 38.45,
                    price2: 58.45,
                },
                {
                    img: "https://resource.51taouk.com/AdminImages/Product/6/8fab664a-b70c-4ca3-abe5-19fdb57224e3.jpg?imageMogr2/format/webp/thumbnail/x200",
                    info: "【包邮包税】Lilycharmed金色生肖猪手链HappyChineseNewYear",
                    price1: 38.45,
                    price2: 58.45,
                },
                {
                    img: "https://resource.51taouk.com/AdminImages/Product/6/8fab664a-b70c-4ca3-abe5-19fdb57224e3.jpg?imageMogr2/format/webp/thumbnail/x200",
                    info: "【包邮包税】Lilycharmed金色生肖猪手链HappyChineseNewYear",
                    price1: 38.45,
                    price2: 58.45,
                },
                {
                    img: "https://resource.51taouk.com/AdminImages/Product/6/8fab664a-b70c-4ca3-abe5-19fdb57224e3.jpg?imageMogr2/format/webp/thumbnail/x200",
                    info: "【包邮包税】Lilycharmed金色生肖猪手链HappyChineseNewYear",
                    price1: 38.45,
                    price2: 58.45,
                },
                {
                    img: "https://resource.51taouk.com/AdminImages/Product/6/8fab664a-b70c-4ca3-abe5-19fdb57224e3.jpg?imageMogr2/format/webp/thumbnail/x200",
                    info: "【包邮包税】Lilycharmed金色生肖猪手链HappyChineseNewYear",
                    price1: 38.45,
                    price2: 58.45,
                },
                {
                    img: "https://resource.51taouk.com/AdminImages/Product/6/8fab664a-b70c-4ca3-abe5-19fdb57224e3.jpg?imageMogr2/format/webp/thumbnail/x200",
                    info: "【包邮包税】Lilycharmed金色生肖猪手链HappyChineseNewYear",
                    price1: 38.45,
                    price2: 58.45,
                },
                {
                    img: "https://resource.51taouk.com/AdminImages/Product/6/8fab664a-b70c-4ca3-abe5-19fdb57224e3.jpg?imageMogr2/format/webp/thumbnail/x200",
                    info: "【包邮包税】Lilycharmed金色生肖猪手链HappyChineseNewYear",
                    price1: 38.45,
                    price2: 58.45,
                },
                {
                    img: "https://resource.51taouk.com/AdminImages/Product/6/8fab664a-b70c-4ca3-abe5-19fdb57224e3.jpg?imageMogr2/format/webp/thumbnail/x200",
                    info: "【包邮包税】Lilycharmed金色生肖猪手链HappyChineseNewYear",
                    price1: 38.45,
                    price2: 58.45,
                }
            ]
        }
    }
    render() {
        return (
            <div className="swiper-container banner-container" ref={banner => this.banner = banner} style={{paddingLeft:"0.05rem",fontSize:"0.12rem"}}>
                <div className="swiper-wrapper">
                    {
                        this.state.goods.map((item, index) => (
                            <div className="swiper-slide" key={index}>
                                <SwiperImgStyle>
                                    <li className="Img_C">
                                        <img src={item.img} />
                                        <p>{item.info}</p>
                                        <p><span>${item.price1}</span><s>${item.price2}</s></p>
                                        <p>立即抢</p>
                                    </li>
                                </SwiperImgStyle>
                            </div>
                        ))
                    }
                </div>
                <div className="swiper-pagination banner-pagination"></div>
            </div>
        )
    }
    componentDidMount() {
        if(!this.swiper){
            this.swiper = new Swiper(this.banner, {
                slidesPerGroup: 3,
                slidesPerView: 3,
                pagination: {
                    el: '.banner-pagination',
                },
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(swiperImg);
