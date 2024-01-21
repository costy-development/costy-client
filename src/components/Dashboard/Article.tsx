import { Article as ActiveArticle } from "@/components/Layouts";

type ArticleT = {};

const Article: React.FC<ArticleT> = () => {
  return <ActiveArticle root="dashboard" />;
};

export default Article;
