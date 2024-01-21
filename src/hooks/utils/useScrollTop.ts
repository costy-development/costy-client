import { useEffect } from "react";

export default function useScrollTop() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);
}
