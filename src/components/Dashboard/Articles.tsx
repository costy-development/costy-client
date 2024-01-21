import { Articles as ArticlesList } from "@/components/Layouts";

type ArticlesT = {};

const Articles: React.FC<ArticlesT> = () => {
  return <ArticlesList root="dashboard" />;
};

export default Articles;
