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

#### redux
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





#### recoil
