import { ProductSchemaT } from "@/utils/validations/products/productSchema";

type ProductT = {
  _id: string;
  title: {
    ka: string;
    en: string;
  };
  description?: {
    ka: string;
    en: string;
  };
  price: number;
  createdAt: string;
};

// API

type GetProductsArgsT = { query: string; page: number };

type GetProductsResponseT = {
  data: Array<ProductT>;
  currentPage: number;
  hasMore: boolean;
};

type CreateProductArgsT = ProductSchemaT;

type UpdateProductArgsT = {
  data: ProductSchemaT;
  productId: string;
};

type DeleteProductArgsT = { productId: string };

export type {
  ProductT,
  //API
  GetProductsArgsT,
  GetProductsResponseT,
  CreateProductArgsT,
  UpdateProductArgsT,
  DeleteProductArgsT,
};
