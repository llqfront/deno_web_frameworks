import React from "react";
import Router from "./router.tsx";
import { RecoilRoot } from "recoil";
const RootApp = () => {
  return (
    <RecoilRoot>
      <Router />
    </RecoilRoot>
  );
};
export default RootApp;
