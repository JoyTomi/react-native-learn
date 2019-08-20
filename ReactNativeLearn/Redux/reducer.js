//这个数据的初始值
import { CHANGE_VALUE, CHANGE_COLOR} from './ActionTypes';

const defaultState = {
    values: '',
    color: '',
};

export default (state = defaultState , action) =>{
    if(action.type === CHANGE_VALUE){
        const newState = JSON.parse(JSON.stringify(state));
        newState.values = action.values;
        return newState;
    }

    if (action.type == CHANGE_COLOR){
        const newState = JSON.parse(JSON.stringify(state));
        newState.color = action.color
        return newState
    }

    return state;
}