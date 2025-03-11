import { Header } from "@/widges/header";
import { Outlet } from "react-router";

const BaseLayout = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

export default BaseLayout;
