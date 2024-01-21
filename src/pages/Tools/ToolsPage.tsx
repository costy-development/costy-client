import { lazy } from "react";

import Helmet from "@/pages/Helmet";
import { SuspenseContainer } from "@/components/Layouts";
import AppLayout from "@/components/AppLayout/AppLayout";

const Tools = lazy(() => import("@/components/Tools/ToolsMain"));

const ToolsPage: React.FC = () => {
  return (
    <>
      <Helmet
        title="Tools"
        description="Costy costy Costi costi Costy costy Costi costi Costy"
      />

      <AppLayout>
        <SuspenseContainer>
          <Tools />
        </SuspenseContainer>
      </AppLayout>
    </>
  );
};

export default ToolsPage;
