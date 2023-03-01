[altra](https://ultrajs.dev/)

#### 两个版本 list
```cmd
deno run -A -r https://deno.land/x/ultra/create.ts


Let's get you setup with your new Ultra project.


What is the name of your project? ultra-redux

Do you want to use TypeScript? [y/n] y

Which css/style library do you want to use?
'(0) None  (1) Twind  (2) Stitches  0

Which routing library do you want to use?
(0) None  (1) React Router  (2) Wouter  1

Which head management library do you want to use?
(0) None  (1) React Helmet 0

Which query library do you want to use?
(0) None (1) React Query 0
```


##### add Router.tsx
```tsx
import { lazy, Suspense } from "react";
import useServerContext from "ultra/hooks/use-server-context.js";
import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./views/Layout/index.tsx";
const HomePage = lazy(() => import("./views/Home/index.tsx"));
const AboutPage = lazy(() => import("./views/About/index.tsx"));
const DemoPage = lazy(() => import("./views/Demo/index.tsx"));

function RouteNotFound() {
  useServerContext((context) => {
    context.status(404);
  });
  return <div>Not found</div>;
}

export default function Router() {
    return(
        <Suspense fallback={<div>Page is Loading...</div>}>
          <Routes>
            <Route path="/" element={<DefaultLayout />}>
              <Route index element={<HomePage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="demo" element={<DemoPage />} />
              <Route path="*" element={<RouteNotFound />} />
            </Route>
          </Routes>
        </Suspense>
    )
}

```
##### fmt
```cmd
deno fmt
```

##### add Root.tsx
```tsx
import React from "react";
import Router from "./router.tsx";
const RootApp = () => {
  return (
    <Router />
  );
};
export default RootApp;

```
##### update app.tsx
```tsx
import useAsset from "ultra/hooks/use-asset.js";
import RootApp from "./root.tsx";
export default function App() {
  // console.log("Hello world!");
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="renderer" content="webkit" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <title>Deno Ultra</title>
        <meta name="keywords" content="Deno Ultra" />
        <meta name="description" content="Deno Ultra" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href={useAsset("/favicon.ico")} />
        <link rel="stylesheet" href={useAsset("/style.css")} />
      </head>
      <body>
        <RootApp />
      </body>
    </html>
  );
}


```

##### fmt
```cmd
deno fmt
```


##### start project
```cmd
deno task dev

http://localhost:8000

click

check sitemap
```

##### npm add

```cmd
https://esm.sh/
deno run -A -r https://esm.sh init

eg:

# Adding packages
deno task esm:add react react-dom     # add multiple packages
deno task esm:add react@17.0.2        # specify version
deno task esm:add react:preact/compat # using alias

# Updating packages
deno task esm:update react react-dom  # update specific packages
deno task esm:update                  # update all packages

# Removing packages
deno task esm:remove react react-dom

```



#### redux  ultra-redux
##### add redux
```cmd
deno run -A -r https://esm.sh init

add @reduxjs/toolkit

deno task esm:add @reduxjs/toolkit

ultra/ultra-redux/importMap.json

update importMap.json
"react": "https://esm.sh/react@18.2.0?dev",
"@reduxjs/toolkit": "https://esm.sh/v108/*@reduxjs/toolkit@1.9.3",
"@reduxjs/toolkit/": "https://esm.sh/v108/*@reduxjs/toolkit@1.9.3/"

use @reduxjs/toolkit/  query
so add /
"@reduxjs/toolkit/": "https://esm.sh/v108/*@reduxjs/toolkit@1.9.3/"


add react-redux
deno task esm:add react-redux
no install
so url add react-redux
https://esm.sh/v108/   from @reduxjs/toolkit  https://esm.sh/v108/*@reduxjs/toolkit@1.9.3   https://esm.sh/v108/

https://esm.sh/v108/react-redux@8.0.5

add ?external=react
https://esm.sh/v108/react-redux@8.0.5?external=react



{
  "imports": {
    "ultra/": "https://deno.land/x/ultra@v2.2.1/",
    "react-dom": "https://esm.sh/react-dom@18.2.0",
    "react-dom/client": "https://esm.sh/react-dom@18.2.0/client?dev",
    "react-dom/server": "https://esm.sh/react-dom@18.2.0/server?dev",
    "react-router-dom/server": "https://esm.sh/react-router-dom@6.3.0/server?external=react",
    "react-router-dom": "https://esm.sh/react-router-dom@6.3.0?external=react",
    "react/": "https://esm.sh/react@18.2.0/",
    "react": "https://esm.sh/react@18.2.0?dev",
    "@reduxjs/toolkit": "https://esm.sh/v108/*@reduxjs/toolkit@1.9.3",
    "@reduxjs/toolkit/": "https://esm.sh/v108/*@reduxjs/toolkit@1.9.3/",
    "react-redux": "https://esm.sh/v108/react-redux@8.0.5?external=react"
  },
  "scopes": {
    "https://esm.sh/v108/": {
      "immer": "https://esm.sh/v108/immer@9.0.19",
      "redux-thunk": "https://esm.sh/v108/redux-thunk@2.4.2",
      "redux": "https://esm.sh/v108/redux@4.2.1",
      "reselect": "https://esm.sh/v108/reselect@4.1.7"
    }
  }
}

````


##### update root.tsx
```tsx
import React from "react";
import Router from "./router.tsx";

import { Provider } from 'react-redux';
import { setupStore } from './stores/index.ts';
const store = setupStore();

const RootApp = () => {
  return (
      <Provider store={store}>
        <Router />
      </Provider>
  );
};
export default RootApp;
```

##### add file
```html
features
services
stores
```

##### change view file
```tsx
demo/
about/
```
##### start project
```cmd
deno task dev

ok

Access to development
```




#### recoil ultra-recoil
```cmd
```
