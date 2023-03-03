import React, { memo } from 'react';
import { atom, selector, selectorFamily, useRecoilState, useRecoilValue } from "recoil";
import { charCountState, textState } from "@/stores/index.ts";
const userSelector = selectorFamily({
  key: 'user selector family',
  get: (userId) => async () => {
    const response = await fetch(`/api/${userId}`);
    return await response.json()
  }
});

interface Props {
}
const View: React.FC = (props: Props) => {
    const [text, setText] = useRecoilState(textState);
    const count = useRecoilValue(charCountState);
    const user = useRecoilValue(userSelector('advertise'));
    console.log(user.data)
    return (
      <React.Fragment>
        Aboout<br/>
        about page Echo: {text}<br/>
        {count}
      </React.Fragment>
    )
}
export default memo(View);
