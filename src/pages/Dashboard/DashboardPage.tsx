import { lazy } from "react";
import { Outlet, useLocation } from "react-router-dom";

import { PATHS } from "@/config/paths";
import { useRedirectUser } from "@/hooks/auth";

import Helmet from "@/pages/Helmet";
import { SuspenseContainer } from "@/components/Layouts";

const Dashboard = lazy(() => import("@/components/Dashboard/Dashboard"));
const EmptyDashboard = lazy(
  () => import("@/components/Dashboard/EmptyDashboard")
);

const DashboardPage: React.FC = () => {
  const { pathname } = useLocation();

  const isOnRoot = pathname === PATHS.dashboard_page;

  const { loading } = useRedirectUser();

  return loading ? (
    <></>
  ) : (
    <>
      <Helmet title="Dashboard" description={"Costy"} />

      <SuspenseContainer>
        <Dashboard>{isOnRoot ? <EmptyDashboard /> : <Outlet />}</Dashboard>
      </SuspenseContainer>
    </>
  );
};

export default DashboardPage;
