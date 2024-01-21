import { useGetAllArticlesQuery } from "@/hooks/api/articles";

import {
  ArticleCard,
  InfiniteScroll,
  ErrorMessage,
  RelativeSpinner,
} from "@/components/Layouts";
import * as Styled from "./articles.styled";
import ArticlesHead from "./ArticlesHead";

type ArticlesT = {
  root: "dashboard" | "client";
  headChildren?: React.ReactNode;
};

const Articles: React.FC<ArticlesT> = ({ root, headChildren }) => {
  const { data, getArticlesQuery, status, hasMore, total } =
    useGetAllArticlesQuery();

  return (
    <Styled.Articles>
      <ArticlesHead root={root} headChildren={headChildren} />

      <div className="articles-list">
        {status.status === "SUCCESS" && (
          <InfiniteScroll
            total={total}
            hasMore={hasMore}
            onNext={getArticlesQuery}
            showLastMessage={false}
          >
            {data.map((article) => (
              <ArticleCard key={article._id} root={root} article={article} />
            ))}
          </InfiniteScroll>
        )}

        {status.loading && <RelativeSpinner />}

        {status.error && <ErrorMessage message={status.message} />}
      </div>
    </Styled.Articles>
  );
};

export default Articles;
