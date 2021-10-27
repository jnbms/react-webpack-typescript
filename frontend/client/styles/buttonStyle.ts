import {css} from "@emotion/css"

function size(height, width){
    return css({height: height, width:width})
}

const buttonStyle = css({
    color:"cornsilk",
    backgroundColor:"crimson"
},size("30px","300px"))
export default buttonStyle;