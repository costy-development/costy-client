import { lazy } from "react";
import { SuspenseContainer } from "@/components/Layouts";
import Helmet from "@/pages/Helmet";

const Register = lazy(() => import("@/components/Auth/Register"));

const RegisterPage: React.FC = () => {
  return (
    <>
      <Helmet
        title="Register"
        description="Costy costy Costi costi Costy costy Costi costi Costy"
      />

      <SuspenseContainer>
        <Register />
      </SuspenseContainer>
    </>
  );
};

export default RegisterPage;
