import { memo, useEffect, useState, useRef } from 'react';
import { todoApi } from '../../services/todo.ts'
const Page: React.FC = () => {
  const { data, error, isLoading } = todoApi.useGetAdvertiseQuery('advertise')

  useEffect(()=>{
    console.log(data)
  },[isLoading])
  return (
      <>
        <div>dsaSettingasdfa</div>
      </>
  )
}
export default Page;
//
//
// export default function Page() {
//   return (
//     <div>
//       Home page
//     </div>
//   );
// }
