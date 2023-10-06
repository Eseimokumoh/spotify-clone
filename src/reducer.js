export const initialState = {
    user: null,
    discover_weekly: null,
    playlists: [],
    playing: false,
    item: null,
    //REMOVE after finished developing...
    //token: 'BQD4TzgMBSyb-9ELnoV7ohXJQuaXqgzwSpfHWYtorRXQwSLyu9TcraD3n3SUek_cikJpT8YADbAhw2Wh3uAHVHgc_nidgN3_UN-6OfnPsift57ca1bLbNBIMrjfaaf6z-t9r4UjqnUBpIG7CJDzR-3iJUWX6YCNBumNkRwxg_Z1gzPk7e30prZRTPE973_Aga2fWKQPKGSRfG6KCPkM2',
};

const reducer = (state, action) => {
    console.log(action);

    //Action -> type, [payload]

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };
        case 'SET_TOKEN':
            return {
                ...state, 
                token: action.token,
            };
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            };
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };
        case "SET_ITEM":
            return {
                ...state,
                item: action.item,
            };        

            default:
                return state;
    }
}

export default reducer;