const initialState = { 
    color1:'#f00',
    color2:'#00f',
    color3:''
}

export const setColor3 = (state = initialState, action = {}) => {
    switch(action.type){
        case 'CHANGE_IN_COLOR3':
            return Object.assign({}, state, { color3: action.payload });
        default: 
            return state;
    }
}

