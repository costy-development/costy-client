import { useProductsQuery } from "@/hooks/api/products/dashboard";

import {
  ProductCard,
  ErrorMessage,
  InfiniteScroll,
  RelativeSpinner,
} from "@/components/Layouts";
import * as Styled from "./styles/productsList.styled";

type ProductsListT = {};

const ProductsList: React.FC<ProductsListT> = () => {
  const { data, hasMore, total, getProductsQuery, status } = useProductsQuery();

  return (
    <Styled.ProductsList>
      {status.status === "SUCCESS" && (
        <InfiniteScroll
          total={total}
          hasMore={hasMore}
          onNext={getProductsQuery}
        >
          {data.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              showActions={true}
            />
          ))}
        </InfiniteScroll>
      )}

      {status.loading && <RelativeSpinner />}

      {status.error && <ErrorMessage message={status.message} />}
    </Styled.ProductsList>
  );
};

export default ProductsList;
