const initailState={
    theme: "themeLight",
}
function ThemeReducer(state=initailState,action) {
  switch (action.type) {
        case 'LIGHT':
            return {...state,theme:"themeLight"};

        case 'DARK' :
            return {...state,theme:"themeDark"};
        default:
        return state;
    }
}
export  default ThemeReducer;
