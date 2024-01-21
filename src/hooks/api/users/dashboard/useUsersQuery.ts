/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { usersStore } from "@/store/dashboard";

export default function useUsersQuery() {
  const { search } = useLocation();

  const getUsers = usersStore.use.getUsers();
  const getPaginatedUsers = usersStore.use.getPaginatedUsers();

  const status = usersStore.use.status();

  const hasMore = usersStore.use.hasMore();
  const currentPage = usersStore.use.currentPage();

  const data = usersStore.use.users();
  const total = data.length;

  const cleanUpUsers = usersStore.use.cleanUpUsers();

  const getUsersQuery = async () => {
    getPaginatedUsers({ query: search || "", page: currentPage + 1 });
  };

  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      await getUsers({ query: search || "", page: currentPage + 1 });
    }, 800);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [search]);

  useEffect(() => {
    return () => {
      cleanUpUsers();
    };
  }, []);

  return { data, hasMore, total, getUsersQuery, status };
}
