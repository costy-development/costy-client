import { lazy } from "react";
import { SuspenseContainer } from "@/components/Layouts";

import Helmet from "@/pages/Helmet";

const Login = lazy(() => import("@/components/Auth/Login"));

const LoginPage: React.FC = () => {
  return (
    <>
      <Helmet
        title="Login"
        description="Costy costy Costi costi Costy costy Costi costi Costy"
      />

      <SuspenseContainer>
        <Login />
      </SuspenseContainer>
    </>
  );
};

export default LoginPage;
