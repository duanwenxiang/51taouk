import {getSwiperAction} from '@/actions/actionCreator'


export const mapStateToProps = (state) => ({
    SwiperImg:state.getIn(["Home"])
})

export const mapDispatchToProps = (dispatch) => ({
    getHomeData(){
        dispatch(getSwiperAction())
    }
})