/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

import { PATHS } from "@/config/paths";
import { useQuill } from "@/hooks/utils";
import { getTimeString } from "@/utils";
import { useDeleteArticleQuery } from "@/hooks/api/articles";

import {
  LineClamp,
  Dropdown,
  ErrorMessage,
  RelativeSpinner,
} from "@/components/Layouts";
import * as Styled from "./articleCard.styled";

import { ArticleT } from "@/interface/db/article.types";

type ArticleCardT = {
  article: ArticleT;
  root: "dashboard" | "client";
};

const ArticleCard: React.FC<ArticleCardT> = ({ root, article }) => {
  const navigate = useNavigate();

  const { getShortContent } = useQuill();
  const { description, thumbnail } = getShortContent(article.body);

  const { onStartDelete, status } = useDeleteArticleQuery();

  const dropdownConfig = useMemo(
    () => [
      {
        label: "განახლება",
        authorized: true,
        role: "MANAGER",
        danger: false,
        onSelect: () =>
          navigate(PATHS.dashboard_create_article_page, { state: { article } }),
      },
      {
        label: "წაშლა",
        authorized: true,
        role: "MANAGER",
        danger: true,
        onSelect: () => onStartDelete(article.slug),
      },
    ],
    [article]
  );

  return (
    <Styled.ArticleCard
      to={
        root === "dashboard"
          ? `/dashboard/articles/${article.slug}`
          : `/articles/${article.slug}`
      }
      data-article-card
    >
      {thumbnail && (
        <figure className="article-card__fig">
          <img
            src={thumbnail}
            alt={article.title}
            width="100%"
            height="100%"
            title={article.title}
            loading="lazy"
          />
        </figure>
      )}

      <div className="article-card__head">
        <span className="article-card__date">
          {getTimeString(article.createdAt || "")}
        </span>

        {root === "dashboard" && (
          <Dropdown
            Button={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="10"
                viewBox="-4 4 30 10"
              >
                <path
                  fill="currentColor"
                  d="M14 10.25a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0m-5 0a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0m-5 0a1.249 1.249 0 1 1 2.5 0a1.25 1.25 0 1 1-2.5 0"
                />
              </svg>
            }
            data={dropdownConfig}
            buttonClass="card-dropdown__trigger-btn"
            dropdownClass="article-card__dropdown-window"
          />
        )}
      </div>

      <LineClamp component="h3" clamp={2} text={article.title} />

      <div className="card-description__wrapper">
        <LineClamp clamp={7} text={description} />
      </div>

      {status.loading && status.articleId === article.slug && (
        <RelativeSpinner />
      )}

      {status.error && status.articleId === article.slug && (
        <ErrorMessage message={status.message} align="center" />
      )}
    </Styled.ArticleCard>
  );
};

export default ArticleCard;
