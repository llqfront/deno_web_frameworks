import { lazy, Suspense } from "react";
import useServerContext from "ultra/hooks/use-server-context.js";
import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./views/Layouts/index.tsx";
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
  return (
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
  );
}
