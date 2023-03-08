import React, { memo } from 'react';
import Childrenren from './Childrenren.tsx';
interface Props {
}

const View: React.FC = (props: Props) => {

    return (
      <React.Fragment>
          这是子子组件Children
          <Childrenren/>
      </React.Fragment>
    )
}
export default memo(View);
