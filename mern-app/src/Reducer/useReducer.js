export const initialState = null;

export const reducer = (state, action) => {
    console.log("Action Type");
    console.log(action.type);
    if(action.type === "USER"){
        return action.payload;
    }
    return state;
}