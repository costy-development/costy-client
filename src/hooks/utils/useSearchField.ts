/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useSearchParams } from "@/hooks/utils";

export default function useSearchField() {
  const { setParam, getParam, removeParam } = useSearchParams();

  const defaultSearchParam = getParam("search");
  const [search, setSearch] = useState(defaultSearchParam || "");

  useEffect(() => {
    if (
      (!search && defaultSearchParam) ||
      (!search && defaultSearchParam !== null && defaultSearchParam === "")
    )
      return removeParam("search");

    const timeoutId = setTimeout(() => {
      if (!search) return;
      setParam("search", search);
    }, 800);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [search, defaultSearchParam]);

  return { search, setSearch };
}
