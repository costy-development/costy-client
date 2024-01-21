import { lazy } from "react";
import { SuspenseContainer } from "@/components/Layouts";
import Helmet from "@/pages/Helmet";

const ForgotPassword = lazy(() => import("@/components/Auth/ForgotPassword"));

const ForgotPasswordPage: React.FC = () => {
  return (
    <>
      <Helmet
        title="Forgot Password"
        description="Costy costy Costi costi Costy costy Costi costi Costy"
      />

      <SuspenseContainer>
        <ForgotPassword />
      </SuspenseContainer>
    </>
  );
};

export default ForgotPasswordPage;
