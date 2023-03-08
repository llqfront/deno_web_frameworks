import React, { memo,useContext,useReducer } from 'react';import {
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

//	reducer 计数器
const initialState = {count: 0};

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
};
const IsLand: React.FC = (props: Props) => {

    const [state, dispatch] = useReducer(reducer, initialState);


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


        Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
      </React.Fragment>
    )
}
export default IsLand;
