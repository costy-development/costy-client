import { lazy } from "react";
import { SuspenseContainer } from "@/components/Layouts";
import Helmet from "@/pages/Helmet";

const UpdatePassword = lazy(() => import("@/components/Auth/UpdatePassword"));

const UpdatePasswordPage: React.FC = () => {
  return (
    <>
      <Helmet
        title="Update Password"
        description="Costy costy Costi costi Costy costy Costi costi Costy"
      />

      <SuspenseContainer>
        <UpdatePassword />
      </SuspenseContainer>
    </>
  );
};

export default UpdatePasswordPage;
