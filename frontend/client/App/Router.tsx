// 폴더 디렉토리 구조대로 URL을 동적 라우팅
import path from "path";
import {Fragment, useEffect, useState} from "react";
import Document from "./Document";

const LoadingPage = () => <div>Implement the skeletone</div>
// const NotFoundPage = () => <div>The page is not Found</div>

export default function DynamicPage(props){
    const {pathname,onNotFound} = props;
    const [Component,setComponent] = useState(null);
    
    useEffect(() => {
        import("../pages" + pathname)
            .then(module => setComponent(() => module.default))
            .catch(e => {console.error(e); onNotFound();})
    }, [pathname]);


    // if(pathname == "/404")
    //     return <NotFoundPage/>
    // else
        if(Component == null)
            return <LoadingPage/>
        else
            return (
            <Fragment>
                <Document>
                    <Component {...props}/>
                </Document>
            </Fragment>
            )
}