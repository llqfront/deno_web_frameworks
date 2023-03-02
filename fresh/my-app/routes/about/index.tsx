// routes/about.tsx
import { HeadElement } from "@/components/HeadElement/index.tsx";

export default function AboutPage() {
  return (
    <main>
        <HeadElement
          description="Shop for Deno fresh"
          keywords="Shop for Deno fresh"
          title="about"
        />
      <h1>About</h1>
      <p>This is the about page.</p>
    </main>
  );
}
