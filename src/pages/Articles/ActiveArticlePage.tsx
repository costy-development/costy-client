import { lazy } from "react";

import { articleStore } from "@/store";

import Helmet from "@/pages/Helmet";
import AppLayout from "@/components/AppLayout/AppLayout";
import { SuspenseContainer } from "@/components/Layouts";

const Article = lazy(() => import("@/components/Articles/Article"));

const ActiveArticlePage: React.FC = () => {
  const article = articleStore.use.article();
  return (
    <>
      <Helmet
        title={`Article | ${article.title}`}
        type="article"
        description="Costy costy Costi costi Costy costy Costi costi Costy"
      />

      <AppLayout showBgLine={false}>
        <SuspenseContainer>
          <Article />
        </SuspenseContainer>
      </AppLayout>
    </>
  );
};

export default ActiveArticlePage;
