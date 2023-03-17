import React, { memo } from 'react';
import { atom, selector, selectorFamily, useRecoilState, useRecoilValue } from "recoil";
import { charCountState, textState } from "@/stores/index";
import reactLogo from '@/assets/react.svg'
const userSelector = selectorFamily({
  key: 'user selector family',
  get: (userId: string) => async () => {
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
        <ul className="space-y-4">
            <li>
              <div className="w-64 h-3 bg-gradient-to-br from-fuchsia-500 to-purple-600"></div>
            </li>
            <li>
              <div className="w-56 h-3 bg-gradient-to-br from-fuchsia-500 to-purple-600"></div>
            </li>
            <li>
              <div className="w-48 h-3 bg-gradient-to-br from-fuchsia-500 to-purple-600"></div>
            </li>
            <li>
              <div className="w-40 h-3 bg-gradient-to-br from-fuchsia-500 to-purple-600"></div>
            </li>
            <li>
              <div className="w-32 h-3 bg-gradient-to-br from-fuchsia-500 to-purple-600"></div>
            </li>
            <li>
              <div className="w-24 h-3 bg-gradient-to-br from-fuchsia-500 to-purple-600"></div>
            </li>
            <li>
              <div className="w-20 h-3 bg-gradient-to-br from-fuchsia-500 to-purple-600"></div>
            </li>
            <li>
              <div className="w-16 h-3 bg-gradient-to-br from-fuchsia-500 to-purple-600"></div>
            </li>
            <li>
              <div className="w-12 h-3 bg-gradient-to-br from-fuchsia-500 to-purple-600"></div>
            </li>
            <li>
              <div className="w-10 h-3 bg-gradient-to-br from-fuchsia-500 to-purple-600"></div>
            </li>
          </ul>
          <figure className="md:flex bg-gray-100 rounded-xl p-8 md:p-0">
          <img className="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={reactLogo} alt="" width="384" height="512"/>
          <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              <p className="text-lg font-semibold">
                “Tailwind CSS is the only framework that I've seen scale
                on large teams. It’s easy to customize, adapts to any design,
                and the build size is tiny.”
              </p>
            </blockquote>
            <figcaption className="font-medium">
              <div className="text-cyan-600">
                Sarah Dayan
              </div>
              <div className="text-gray-500">
                Staff Engineer, Algolia
              </div>
            </figcaption>
          </div>
        </figure>
      </React.Fragment>
    )
}
export default memo(View);
