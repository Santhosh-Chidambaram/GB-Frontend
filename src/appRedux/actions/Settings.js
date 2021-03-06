import { SET_DARK_THEME, SET_LIGHT_THEME,SET_DRAWER_VISIBLE } from "../../constants/actionTypes";

export const setDarkTheme =  () =>(
    {
        type:SET_DARK_THEME
    }
)

export const setLightTheme =  () =>(
    {
        type:SET_LIGHT_THEME
    }
)

export const handleDrawerOpen =  () =>(
    {
        type:SET_DRAWER_VISIBLE,
        payload:true
    }
)

export const handleDrawerClose =  () =>(
    {
        type:SET_DRAWER_VISIBLE,
        payload:false
    }
)