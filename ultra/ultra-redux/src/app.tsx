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
