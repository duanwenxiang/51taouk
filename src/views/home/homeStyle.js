import styled from "styled-components"

export const SearchStyle = styled.div`
    font-size:0.16rem;
    >.am-search{
        >.am-search-input{
        }
    }
`

export const SlideStyle = styled.div`
    .am-wingblank{
        margin:0;
    }
    .am-carousel-wrap{
        opacity: 0.5;
    }
    .am-carousel-wrap-dot-active>span{
        background:rgba(255,104,84,1);
    }
`

export const CountDownStyle = styled.div`
    font-size:0.14rem;
    margin-bottom:0.1rem;
    >.top{
        padding:0 0.18rem;
        display:flex;
        height:0.4rem;
        justify-content:space-between;
        align-items:center;
        >p:nth-of-type(1){
            align-items:center;
            display:flex;
            >span{
                display:block;
                padding-left:0.05rem;
            }
        }
        >p:nth-of-type(2){
            font-size:0.12rem;
            display:flex;
            align-items:center;
            >span{
                display:block;
                width:0.17rem;
                height: 0.19rem;
                background:black;
                color:#fff;
                text-align:center;
                line-height:0.19rem;
                margin:0 0.05rem;
            }
            >b{
                display:block;
                font-weight:200;
                color:#aaa;
            }
        }
    }
    >.bottom{
        >img{
            width:100%;
        }
    }
`

export const SwiperImgStyle = styled.ul`
    font-size:0.12rem;
    padding-bottom:0.3rem;
    >li{
        width:1rem;
        >img{
            width:1rem;
            height:1rem;
        }
        >p:nth-of-type(1){
            overflow: hidden;
            white-space: nowrap;
            text-overflow:ellipsis;
            color:#666666;
            margin:0.05rem 0;
        }
        >p:nth-of-type(2){
            text-align:center;
            margin:0.05rem 0;
            >span{
                color:rgba(245,81,77,1);
            }
            >s{
                display:inline-block;
                margin-left:0.05rem;
                color:#cccccc;
            }
        }
        >p:nth-of-type(3){
            margin:0 auto;
            text-align:center;
            height:0.2rem;
            width:0.8rem;
            line-height:0.18rem;
            color:rgba(245,81,77,1);
            border:solid 1px rgba(245,81,77,1);
            border-radius:0.5rem;
        }
    }
`