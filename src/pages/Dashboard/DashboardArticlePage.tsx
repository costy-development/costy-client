import { lazy } from "react";
import { SuspenseContainer } from "@/components/Layouts";

const Article = lazy(() => import("@/components/Dashboard/Article"));

const DashboardArticlePage: React.FC = () => {
  return (
    <SuspenseContainer>
      <Article />
    </SuspenseContainer>
  );
};

export default DashboardArticlePage;
