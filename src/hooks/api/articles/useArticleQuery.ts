/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { articleStore } from "@/store";

export default function useArticleQuery() {
  const { slug } = useParams();

  const getArticle = articleStore.use.getArticle();

  const status = articleStore.use.articleStatus();
  const article = articleStore.use.article();

  const cleanUpArticle = articleStore.use.cleanUpArticle();

  useEffect(() => {
    if (!slug) return;

    getArticle({ slug });
  }, [slug]);

  useEffect(() => {
    return () => {
      cleanUpArticle();
    };
  }, []);

  return { status, article };
}
