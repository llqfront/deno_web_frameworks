import React, { memo } from 'react';import {
  // RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { charCountState, textState } from "@/stores/index";
import useHomeTest, { TestContext } from "@/hooks/useHome";

import Child from './Child.tsx';
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
    // const { text } = useRecoilValue(textState);
    const count = useRecoilValue(charCountState);
    const homeTest = useHomeTest();
    return (
      <React.Fragment>
          Home page
          
          <TestContext.Provider value={homeTest}>
            <Child/>
          </TestContext.Provider>
          <br/>
          ----{count}
      </React.Fragment>
    )
}
export default memo(View);