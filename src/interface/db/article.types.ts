type ArticleT = {
  _id: string;
  slug: string;
  createdAt: string;
  title: string;
  body: string;
};

// API

type CreateArticleArgsT = {
  title: string;
  body: string;
};

type UpdateArticleArgsT = CreateArticleArgsT & {
  slug: string;
};

type DeleteArticleArgsT = {
  slug: string;
};

type GetArticleArgsT = {
  slug: string;
};

type GetArticleResponseT = ArticleT;

type GetAllArticlesArgsT = {
  query: string;
  page: number;
};

type GetAllArticlesResponseT = {
  data: Array<ArticleT>;
  currentPage: number;
  hasMore: boolean;
};

export type {
  ArticleT,
  // API
  CreateArticleArgsT,
  UpdateArticleArgsT,
  DeleteArticleArgsT,
  GetArticleArgsT,
  GetArticleResponseT,
  GetAllArticlesArgsT,
  GetAllArticlesResponseT,
};
