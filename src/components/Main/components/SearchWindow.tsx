import { useSearchField } from "@/hooks/utils";
import { useProductsQuery } from "@/hooks/api/products/client";

import {
  SearchField,
  ProductCard,
  ErrorMessage,
  InfiniteScroll,
  RelativeSpinner,
} from "@/components/Layouts";
import * as Styled from "./styles/search.styled";

type SearchWindowT = {};

const SearchWindow: React.FC<SearchWindowT> = () => {
  const { search, setSearch } = useSearchField();

  const { data, hasMore, total, getProductsQuery, status } = useProductsQuery();

  return (
    <Styled.Search>
      <span className="search-title">ფასთა კრებული</span>

      <SearchField value={search} onChange={(value) => setSearch(value)} />

      <div className="search-result">
        {status.status === "SUCCESS" && (
          <InfiniteScroll
            total={total}
            hasMore={hasMore}
            onNext={getProductsQuery}
            height="50vh"
          >
            {data.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </InfiniteScroll>
        )}

        {status.loading && <RelativeSpinner />}

        {status.error && <ErrorMessage message={status.message} />}
      </div>
    </Styled.Search>
  );
};

export default SearchWindow;
