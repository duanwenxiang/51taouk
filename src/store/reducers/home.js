import immutable from 'immutable'

const defaultState = immutable.fromJS({
    swiperImg:{}
})

export default (state=defaultState,action)=>{
    switch(action.type){
        default:
            return state;
    }
}