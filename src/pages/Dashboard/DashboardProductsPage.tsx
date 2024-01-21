import { lazy } from "react";
import { SuspenseContainer } from "@/components/Layouts";

const Products = lazy(() => import("@/components/Dashboard/Products"));

const DashboardProductsPage: React.FC = () => {
  return (
    <SuspenseContainer>
      <Products />
    </SuspenseContainer>
  );
};

export default DashboardProductsPage;
