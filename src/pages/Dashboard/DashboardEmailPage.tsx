import { lazy } from "react";
import { SuspenseContainer } from "@/components/Layouts";

const Email = lazy(() => import("@/components/Dashboard/Email"));

const DashboardEmailPage: React.FC = () => {
  return (
    <SuspenseContainer>
      <Email />
    </SuspenseContainer>
  );
};

export default DashboardEmailPage;
