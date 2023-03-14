import React, { memo } from 'react';
import {
  // RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { charCountState, textState } from "@/stores/index";
interface Props {
}
const View: React.FC = (props: Props) => {
    const [text, setText] = useRecoilState(textState);
    const count = useRecoilValue(charCountState);
    return (
      <React.Fragment>
      demo page Echo: {text}<br/>
      {count}
      </React.Fragment>
    )
}
export default memo(View);
