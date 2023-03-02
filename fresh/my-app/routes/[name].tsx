import { PageProps } from "$fresh/server.ts";
import { HeadElement } from "@/components/HeadElement/index.tsx";

export default function Greet(props: PageProps) {
  return (
      <>
          <HeadElement
            description="Shop for Deno fresh"
            keywords="Shop for Deno fresh"
            title="other"
          />
          <div>Hello {props.params.name}</div>
      </>
  );
}
