import { lazy } from "react";
import { SuspenseContainer } from "@/components/Layouts";

const CreateArticle = lazy(
  () => import("@/components/Dashboard/CreateArticle")
);

const CreateArticlePage: React.FC = () => {
  return (
    <SuspenseContainer>
      <CreateArticle />
    </SuspenseContainer>
  );
};

export default CreateArticlePage;
