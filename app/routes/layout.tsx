import { Layout } from "src/components/Layout/Layout";
import { Outlet } from "react-router-dom";

export default function RootLayout(){
  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}