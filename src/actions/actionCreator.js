// 引入http的内容，使用fetch请求回来的数据
import {getSwiperImg} from '@/api/home'
import {action} from "./index"

export const getSwiperAction = () => {
    return async (dispatch)=>{
        let data = await getSwiperImg();
        dispatch(action("SWIPER_IMG",data.result))
    }
}