import React, { memo } from 'react';
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";
import { charCountState, textState } from "@/stores/index.ts";

interface Props {
}
const View: React.FC = (props: Props) => {
    const [text, setText] = useRecoilState(textState);
    const count = useRecoilValue(charCountState);
    return (
      <React.Fragment>
        Aboout<br/>
        about page Echo: {text}<br/>
        {count}
      </React.Fragment>
    )
}
export default memo(View);
