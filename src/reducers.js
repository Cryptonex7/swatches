const initialState = { 
    color1:'#f00',
    color2:'#00f',
    color3:''
}

export const setColorValue = (state = initialState, action = {}) => {
    switch(action.type){
        case 'CHANGE_IN_COLOR1':
            return Object.assign({}, state, { color1: action.payload });
        case 'CHANGE_IN_COLOR2':
            return Object.assign({}, state, { color2: action.payload });
        case 'CHANGE_IN_COLOR3':
            return Object.assign({}, state, { color3: action.payload });
        default: 
            return state;
    }
}

