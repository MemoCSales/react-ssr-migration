import type { Route } from "./+types/home";

export function meta(_args: Route.MetaArgs) {
  return [
    { title: "React SSR Migration" },
    { name: "description", content: "React Router 7 Framework Mode with SSR" },
  ];
}

export default function Home() {
  return (
    <main>
      <h1>Welcome to React Router 7</h1>
      <p>Server-side rendering is enabled via Vite and React Router Framework Mode.</p>
    </main>
  );
}
