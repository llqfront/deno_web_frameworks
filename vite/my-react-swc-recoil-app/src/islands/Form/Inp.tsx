import React, { memo,useContext } from 'react';import {
  // RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { textState } from "@/stores/index.ts";
import { TestContext } from "@/hooks/useHome";
interface Props {
}
const IsLand: React.FC = (props: Props) => {
    const {
        setTest
    } = useContext(TestContext);
    const [text, setText] = useRecoilState(textState);
    const onChange = (event) => {
      setText(event.target.value);
      setTest(event.target.value)
    };
    return (
      <React.Fragment>
        <input type="text" value={text} onChange={onChange} />
      </React.Fragment>
    )
}
export default IsLand;
