import React, { memo } from 'react';
import Children from './Children.tsx';
import Inp from "@/islands/Form/Inp.tsx";
interface Props {
}

const View: React.FC = (props: Props) => {

    return (
      <React.Fragment>
          Home page
          <br/>
          <Inp/>
          <br />
          这是子组件Child
          <br/>
          <Children/>
      </React.Fragment>
    )
}
export default memo(View);
