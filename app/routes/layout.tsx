import { Layout } from "../../src/components/Layout/Layout";
import { Outlet } from "react-router";

export default function RootLayout(){
  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}