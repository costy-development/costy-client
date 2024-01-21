import { lazy } from "react";
import { SuspenseContainer } from "@/components/Layouts";

const CreateProduct = lazy(
  () => import("@/components/Dashboard/CreateProduct")
);

const DashboardCreateProductPage: React.FC = () => {
  return (
    <SuspenseContainer>
      <CreateProduct />
    </SuspenseContainer>
  );
};

export default DashboardCreateProductPage;
