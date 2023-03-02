import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";
import { HeadElement } from "@/components/HeadElement/index.tsx";
export default function Home() {
  return (
    <>
        <HeadElement
          description="Shop for Deno fresh"
          keywords="Shop for Deno fresh"
          title="Deno fress"
        />
      <div>
        <img
          src="/logo.svg"
          width="128"
          height="128"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <p>
          Welcome to `fresh`. Try updating this message in the
          ./routes/index.tsx file, and refresh.
        </p>
        <Counter start={3} />
      </div>
    </>
  );
}
