import {AnimateSharedLayout} from "framer-motion" // App에서 전체적으로 import 해주기
import {Fragment} from "react";
import {useRecoilState, useRecoilValue} from "recoil";
import {textState} from "../context"; // 중간씩 구분해서 작성해주는 방법을 생각해기

export default function Home(props){
    const [text,setText] = useRecoilState(textState);
    // const changeText = event => setText(event.target.value);
    return <Fragment>
        <div>first page</div>
        <button onClick={() => setText("Hello Recoil")}>Click</button>
        <div>recoil Data is {text}</div>
        <WhyDontWork/>
        <WhyDontWork/>
    </Fragment>
}

function WhyDontWork(){
    const text = useRecoilValue(textState);
    return <div>ITS {text}</div>
}