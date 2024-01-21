import { LoadingStatusT } from "@/interface/store/common.types";
import * as ArticleAPI_T from "@/interface/db/article.types";

type ArticleStateT = {
  hasMore: boolean;
  currentPage: number;
  article: ArticleAPI_T.ArticleT;
  articles: Array<ArticleAPI_T.ArticleT>;

  createArticleStatus: LoadingStatusT;
  deleteArticleStatus: LoadingStatusT & { articleId: string };
  articleStatus: LoadingStatusT;
  allArticlesStatus: LoadingStatusT;
};

type ArticleActionsT = {
  // LOCALS
  cleanUpArticle: () => void;
  cleanUpArticles: () => void;
  // API
  createArticle: (args: ArticleAPI_T.CreateArticleArgsT) => Promise<void>;
  updateArticle: (args: ArticleAPI_T.UpdateArticleArgsT) => Promise<void>;
  deleteArticle: (args: ArticleAPI_T.DeleteArticleArgsT) => Promise<void>;
  getArticle: (args: ArticleAPI_T.GetArticleArgsT) => Promise<void>;
  getAllArticles: (args: ArticleAPI_T.GetAllArticlesArgsT) => Promise<void>;
  getPaginatedArticles: (
    args: ArticleAPI_T.GetAllArticlesArgsT
  ) => Promise<void>;
};

type ArticleStoreT = ArticleStateT & ArticleActionsT;

export type { ArticleStateT, ArticleStoreT };
