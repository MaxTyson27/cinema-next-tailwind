import Layout from "./components/layout/Layout";
import { Home } from "./components/screens/Home/Home";

import type { NextPage } from "next";

const HomePage: NextPage = () => {
  return (
    <Layout>
      <Home/>
    </Layout>
  )
}

export default HomePage;
