import data from '@/mock';
import Mock from 'mockjs';


//   '/goods/goodsAll'
// 如果是post请求可以在回调中读取body传递过来的数据
Mock.mock(/goods\/goodsAll/,"get",()=>{
    return data;
});