import { useArticleQuery, useDeleteArticleQuery } from "@/hooks/api/articles";

import {
  QuillEditor,
  ErrorMessage,
  RelativeSpinner,
} from "@/components/Layouts";
import ArticleHead from "./ArticleHead";
import * as Styled from "./article.styled";

type ArticleT = {
  root: "dashboard" | "client";
};

const Article: React.FC<ArticleT> = ({ root }) => {
  const { article, status } = useArticleQuery();
  const { onStartDelete, status: deletionStatus } = useDeleteArticleQuery();

  const hasError = status.error && deletionStatus.error;
  const message = status.message || deletionStatus.message;

  return (
    <Styled.Article>
      {status.loading ? (
        <RelativeSpinner />
      ) : (
        <>
          <span className="article-title">{article.title}</span>

          <ArticleHead article={article} root={root} onDelete={onStartDelete} />

          <QuillEditor readonly={true} value={article.body} />
        </>
      )}

      {deletionStatus.loading && <RelativeSpinner />}

      {hasError && <ErrorMessage message={message} />}
    </Styled.Article>
  );
};

export default Article;
