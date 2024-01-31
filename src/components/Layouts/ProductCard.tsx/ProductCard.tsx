import * as Styled from "./productCard.styled";
import CardActions from "./components/CardActions";

import { ProductT } from "@/interface/db/product.types";

type ProductCardT = {
  product: ProductT;
  showActions?: boolean;
};

const ProductCard: React.FC<ProductCardT> = ({
  product,
  showActions = false,
}) => {
  return (
    <Styled.ProductCard className="search-result__item">
      <span className="product-title">{product.title.ka}</span>
      {product.description?.ka && <div>{product.description?.ka}</div>}
      <div className="product-price">
        <span>ფასი:</span>
        &nbsp;
        <strong>{product.price}</strong>&nbsp;₾
      </div>

      {showActions && <CardActions product={product} />}
    </Styled.ProductCard>
  );
};

export default ProductCard;
