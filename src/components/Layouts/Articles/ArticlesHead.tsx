import { Link } from "react-router-dom";

import { PATHS } from "@/config/paths";
import { useSearchField } from "@/hooks/utils";

import { SearchField } from "@/components/Layouts";

type ArticlesHeadT = {
  root: "dashboard" | "client";
  headChildren?: React.ReactNode;
};

const ArticlesHead: React.FC<ArticlesHeadT> = ({ root, headChildren }) => {
  const { search, setSearch } = useSearchField();

  return (
    <div className="articles-head">
      {root === "dashboard" && (
        <Link
          to={PATHS.dashboard_create_article_page}
          className="add-article__btn"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 21 21"
          >
            <path
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.5 10.5h10m-5-5v10"
            />
          </svg>

          <span>სტატიის დამატება</span>
        </Link>
      )}

      {headChildren ? headChildren : <></>}

      <SearchField value={search} onChange={setSearch} />
    </div>
  );
};

export default ArticlesHead;
