import {Fragment} from "react";
import {useRecoilValue} from "recoil";
import {textState} from "../../context";

export default function Index(props){

    const text = useRecoilValue(textState);

    return (
        <Fragment>
            <div>Recoil Data is {text}</div>
        </Fragment>
    );
}