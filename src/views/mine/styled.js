import styled from "styled-components";
export const Header = styled.div`
     background:url(${require("../../img/top_back.png") } );
     background-size:3.45rem;
    img{
        width:3.12rem;
        height:1.56rem;
    }
    height:1.56rem;
    width:100%;
    font-size: 14px;
    .img_user{
        display:flex;
        justify-content:center;
        
        img{
            width:.7rem;
            height:.7rem;
            margin-top:.3rem;
            
        }
    }
    .box{
        display:flex;
        font-size:14px;
        color:#fff;
        margin-left:1.28rem;
        margin-top:.2rem;
    }
`
export const Nav = styled.div`
width:100%;
height:100%;
background:rgba(242,242,242,1);
padding-top:.1rem;
    .nav{
        width:100%;
        height:.42rem;
        background:#fff;
        margin:0 0 .01rem;
        line-height:.42rem;
        display:flex;
    }
    .Order{
        font-size:.14rem;
        padding-left:.13rem;
    }
    .see{
        font-size:.12rem;
        color:rgba(204,204,204,1);
        padding-left:1.6rem;
    }
    .details{
        width:100%;
        height:.7rem;
        background:#fff;
        margin-bottom:.1rem;
        font-size:.12rem;
        display:flex;
        justify-content: center;
        
        padding-left:.13rem;
    }
    .four{
        width:.8rem;
        height:.48rem;
        padding-left:.1rem;
        padding-top:.1rem;
    }
    .four>p{
        padding-top:.06rem;
    }
`
export const Transport = styled.div`
.both{
    width:100%;
    height:100%;
    background:rgba(242,242,242,1);
}
    .transport{
        width:100%;
        height:.48rem;
        background:#fff;
        padding-left:.1rem;
        padding-right:.1rem;
        display:flex;
        line-height:.48rem;
        margin-bottom:.1rem;
        
    }
    .transport>h6{
        font-weight:normal;
        font-size:.14rem;
        margin-left:.1rem;
    }
    .transport>h5{
        font-weight:normal;
        font-size:.12rem;
        color:rgba(204,204,204,1);
        padding-left:1.05rem;
    }
    .transport:nth-child(2) h5{
        padding-left:1.52rem;
    }
`
export const Deliver = styled.div`
.information{
    width:100%;
    height:100%;
    background:rgba(242,242,242,1); 
}
.information_branch{
    width:100%;
    height:.48rem;
    background:#fff;
    padding-left:.1rem;
    padding-right:.1rem;
    display:flex;
    line-height:.48rem;
    margin-bottom:.01rem;
    
}
}
.information_branch h4{
    font-weight:normal;
    font-size:.14rem;
    margin-left:.1rem; 
}
.information_branch h3{
    font-weight:normal;
    font-size:.12rem;
    color:rgba(204,204,204,1);
    padding-left:1.4rem;
}
.information_branch:nth-child(1) h3{
    padding-left:1.52rem;
}
.information_branch:nth-child(3) h3{
    padding-left:1.7rem;
}
.information_branch:nth-child(4) h3{
    padding-left:1.9rem;
}

`
export const Bottom = styled.div`
.bottom{
    width:100%;
    height:1.16rem;
    background:rgba(242,242,242,1);
    padding-top:.09rem;
    margin-bottom:.48rem;
}
.mine{
   background:#fff;
   display:flex;
   padding-left:.1rem;
   height:.48rem;
  
}
.mine h2{
   font-size:.14rem;
   font-weight:normal;
   width:100%;
   height:.48rem;
   line-height:.48rem;
}
.mine p{
    font-size:.12rem;
    color:rgba(204,204,204,1);
    margin-left: -0.3rem;
    line-height:.48rem;
}
.bottom h1{
    font-size:.12rem;
    color:rgba(204,204,204,1);
    height:.58rem;
    font-weight:normal;
    text-align:center;
    padding-top:.38rem;
}
`
