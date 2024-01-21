/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { articleStore } from "@/store";

export default function useGetAllArticlesQuery() {
  const { search } = useLocation();

  const getAllArticles = articleStore.use.getAllArticles();
  const getPaginatedArticles = articleStore.use.getPaginatedArticles();

  const status = articleStore.use.allArticlesStatus();

  const hasMore = articleStore.use.hasMore();
  const currentPage = articleStore.use.currentPage();

  const data = articleStore.use.articles();
  const total = data.length;

  const cleanUpArticles = articleStore.use.cleanUpArticles();

  const getArticlesQuery = async () => {
    getPaginatedArticles({ query: search || "", page: currentPage + 1 });
  };

  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      await getAllArticles({ query: search || "", page: 1 });
    }, 800);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [search]);

  useEffect(() => {
    return () => {
      cleanUpArticles();
    };
  }, []);

  return { data, hasMore, total, getArticlesQuery, status };
}
