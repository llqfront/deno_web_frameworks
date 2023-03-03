import React, { memo } from 'react';import {
  // RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { charCountState, textState } from "@/stores/index.ts";
interface Props {
}
// const textState = atom({
//   key: "textState", // unique ID (with respect to other atoms/selectors)
//   default: "", // default value (aka initial value)
// });
// const charCountState = selector({
//   key: 'charCountState', // unique ID (with respect to other atoms/selectors)
//   get: ({get}) => {
//     const text = get(textState);
//     return text.length;
//   },
// });
const View: React.FC = (props: Props) => {
    const [text, setText] = useRecoilState(textState);
    const count = useRecoilValue(charCountState);
    const onChange = (event) => {
      setText(event.target.value);
    };
    return (
      <React.Fragment>
          Home page
          <input type="text" value={text} onChange={onChange} />
          <br />
          Echo: {text}
          ----{count}
      </React.Fragment>
    )
}
export default memo(View);
