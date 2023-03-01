import React from "react";
import Router from "./router.tsx";

import { Provider } from "react-redux";
import { setupStore } from "./stores/index.ts";
const store = setupStore();

const RootApp = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};
export default RootApp;
