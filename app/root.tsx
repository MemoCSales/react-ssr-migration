import { Meta, Links, Outlet, Scripts, ScrollRestoration } from "react-router"
import { ThemeProvider } from "@rescui/ui-contexts";
import '../src/styles/base.scss';
import '../src/styles/grid.scss';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <ThemeProvider theme="dark">
          {children}
        </ThemeProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />
}