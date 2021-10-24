// 폴더 디렉토리 구조대로 URL을 동적 라우팅
import React,{useEffect, useState} from "react";

const LoadingPage = () => <div></div>

export default function Router(props){
    const {pathname,onNotFound} = props;
    const [Component,setComponent] = useState(null);
    
    useEffect(() => {
        import("../pages" + pathname)
            .then(module => setComponent(() => module.default))
            .catch(e => onNotFound())
    }, [pathname]);

    return Component ? <Component {...props}/> : <LoadingPage/>
}