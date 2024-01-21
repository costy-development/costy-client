import { lazy } from "react";
import { SuspenseContainer } from "@/components/Layouts";
import Helmet from "@/pages/Helmet";

const ConfirmEmail = lazy(() => import("@/components/Auth/ConfirmEmail"));

const ConfirmEmailPage: React.FC = () => {
  return (
    <>
      <Helmet
        title="Confirm Email"
        description="Costy costy Costi costi Costy costy Costi costi Costy"
      />

      <SuspenseContainer>
        <ConfirmEmail />
      </SuspenseContainer>
    </>
  );
};

export default ConfirmEmailPage;
