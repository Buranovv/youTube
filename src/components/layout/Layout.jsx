import { Fragment } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Aside from "./Aside";

const Layout = () => {
  return (
    <Fragment>
      <div className="box">
        <Header />
        <Aside />
        <main>
          <Outlet />
        </main>
      </div>
    </Fragment>
  );
};

export default Layout;
