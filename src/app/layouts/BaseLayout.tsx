import { Header } from "@/widges/header";
import { Outlet } from "react-router";

const BaseLayout = () => {
  return (
    <>
      <Header />
      <main className="main">
        <div className="container">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default BaseLayout;
