import { useNavigate, useLocation } from "react-router-dom";

export default function useSearchParams() {
  const navigate = useNavigate();
  const { search, pathname } = useLocation();

  const searchParams = new URLSearchParams(search);

  const setParam = (key: string, value: string) => {
    searchParams.set(key, value);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  const removeParam = (key: string) => {
    searchParams.delete(key);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  const getParam = (key: string) => searchParams.get(key);

  return { setParam, removeParam, getParam };
}
