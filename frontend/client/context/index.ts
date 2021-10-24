// 상태관리 라이브러리는 refrech할 경우, 초기화된다.
import {atom} from "recoil";
// reacoil-persist는 localstorage를 통해 PAGE 이동 시 데이터를 유지한다.
import {recoilPersist} from "recoil-persist";
const {persistAtom} = recoilPersist();

export const textState = atom({
    key: "textState",
    default: "",
    effects_UNSTABLE: [persistAtom]
});
