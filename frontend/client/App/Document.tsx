import {Fragment} from "react";
import {RecoilRoot} from "recoil";

export default function Document(props){
    const {children} = props;
    
    return (
    <Fragment>
        <RecoilRoot>
            {children}
        </RecoilRoot>
    </Fragment>
    )
}