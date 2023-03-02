import { AppProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
export default function App({ Component }: AppProps) {
  return (
    <>
        <a href="/">首页</a>
        <br />
        <a href="/test">test</a>
        <br />
        <a href="/about">about</a>
        <br />
      <Component />
    </>
  );
}
