import { lazy } from "react";

import Helmet from "@/pages/Helmet";
import AppLayout from "@/components/AppLayout/AppLayout";
import { SuspenseContainer } from "@/components/Layouts";

const Articles = lazy(() => import("@/components/Articles/Articles"));

const ArticlesPage: React.FC = () => {
  return (
    <>
      <Helmet
        title="Articles"
        description="Costy app for those who fleeing for the Best"
      />

      <AppLayout showLogo={false} showSocials={false} showBgLine={false}>
        <SuspenseContainer>
          <Articles />
        </SuspenseContainer>
      </AppLayout>
    </>
  );
};

export default ArticlesPage;
