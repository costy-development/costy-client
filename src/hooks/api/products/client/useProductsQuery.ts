/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { productsStore } from "@/store/client";

export default function useProductsDashboardQuery() {
  const { search } = useLocation();

  const getProducts = productsStore.use.getProducts();
  const getPaginatedProducts = productsStore.use.getPaginatedProducts();

  const status = productsStore.use.status();

  const hasMore = productsStore.use.hasMore();
  const currentPage = productsStore.use.currentPage();

  const data = productsStore.use.products();
  const total = data.length;

  const cleanUpProducts = productsStore.use.cleanUpProducts();

  const getProductsQuery = async () => {
    getPaginatedProducts({ query: search || "", page: currentPage + 1 });
  };

  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      await getProducts({ query: search || "", page: currentPage + 1 });
    }, 800);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [search]);

  useEffect(() => {
    return () => {
      cleanUpProducts();
    };
  }, []);

  return { data, hasMore, total, getProductsQuery, status };
}
