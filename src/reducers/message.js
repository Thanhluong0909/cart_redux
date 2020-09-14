import * as Message from './../constants/Message';
import * as Types from './../constants/ActionType';
// state của cart 
let initialState = Message.MSG_WELCOME

const message = (state = initialState, action) => {
    switch (action.type) {
        case Types.CHANG_MESSAGE:
            return action.message;
        default: return [...state];
    }
}

export default message;

