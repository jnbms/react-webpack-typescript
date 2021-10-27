// import {AnimateSharedLayout} from "framer-motion" // App에서 전체적으로 import 해주기
import {Fragment} from "react";
// import {useRecoilState, useRecoilValue} from "recoil";
import Button from "../components/atoms/button";
// import {textState} from "../context"; // 중간씩 구분해서 작성해주는 방법을 생각해기
// import useAxios from "../hooks/data/useAxios";

export default function Home(props){
    // const [text,setText] = useRecoilState(textState);
    // const data = useAxios("http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20120101")
    // const {boxOfficeResult} = data;
    return (
    <Fragment>
        {/* <div>{data}</div> */}
        {/* <div>{boxOfficeResult}</div> */}
        {/* <button onClick={() => setText("Hello Recoil")}>Click</button> */}
        {/* <div>recoil Data is {text}</div> */}
        <Button>
            {/* <div className="name">안녕</div> */}
            {/* <div>하신가</div> */}
            Hello
        </Button>
    </Fragment>
    );
}