import { Link } from "react-router-dom";

import { PATHS } from "@/config/paths";

import * as UI from "./components/Products";
import * as Styled from "./styles/products.styled";

const Products: React.FC = () => {
  return (
    <Styled.Products>
      <header className="products-header">
        <UI.ProductsFilter />
        <Link
          to={PATHS.dashboard_products_create_page}
          className="add-product__btn"
        >
          + Add Product
        </Link>
      </header>

      <UI.ProductsList />
    </Styled.Products>
  );
};

export default Products;
