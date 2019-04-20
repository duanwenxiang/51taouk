// 引入路由懒加载
import Loadable from 'react-loadable'
import Loading from '@/common/loading'

// 通过异步的方式来引入组件实现路由懒加载  顺便加上了 loading
const Home = Loadable({
    loader:()=>import('./home'),
    loading:Loading
})
const List = Loadable({
    loader:()=>import('./list'),
    loading:Loading
})
const Shopping = Loadable({
    loader:()=>import('./shopping'),
    loading:Loading
})
const Mine = Loadable({
    loader:()=>import('./mine'),
    loading:Loading
})

export{
    Home,
    List,
    Shopping,
    Mine
}